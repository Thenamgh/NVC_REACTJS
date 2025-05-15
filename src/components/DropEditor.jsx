import React, { useRef, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';

const DropEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: '<p>Kéo các block từ bên trái vào đây...</p>',
  });

  const editorRef = useRef(null);

  const [, drop] = useDrop(() => ({
    accept: 'BLOCK',
    drop: async (item) => {
      if (!editor) return;

      switch (item.type) {
        case 'heading':
          editor.chain().focus().insertContent('<h2>Tiêu đề mới</h2>').run();
          break;
        case 'paragraph':
          editor.chain().focus().insertContent('<p>Đoạn văn mới...</p>').run();
          break;
        case 'list':
          editor.chain().focus().insertContent('<ul><li>Mục 1</li><li>Mục 2</li></ul>').run();
          break;
        case 'image':
          const imgUrl = prompt('Nhập URL ảnh:');
          if (imgUrl) {
            editor.chain().focus().setImage({ src: imgUrl }).run();
          }
          break;
        case 'youtube':
          const youtubeUrl = prompt('Nhập ID video YouTube (vd: dQw4w9WgXcQ):');
          if (youtubeUrl) {
            editor.commands.insertContent(
              `<iframe width="560" height="315" src="https://www.youtube.com/embed/${youtubeUrl}" frameborder="0" allowfullscreen></iframe><p></p>`
            );
          }
          break;
        default:
          break;
      }
    },
  }));

  useEffect(() => {
    if (editorRef.current) {
      drop(editorRef);
    }
  }, [drop]);

  return (
    <div
      ref={editorRef}
      style={{
        flex: 1,
        padding: 20,
        minHeight: 500,
        border: '1px solid #ccc',
        borderRadius: 4,
        backgroundColor: '#fff',
      }}
    >
      <EditorContent editor={editor} />
    </div>
  );
};

export default DropEditor;
