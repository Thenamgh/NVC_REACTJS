import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import { ResizableImage } from '../extension/ResizableImage';

const RichEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Strike,
      TextStyle,
      Color,
      Link.configure({ openOnClick: false }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      ResizableImage,
    ],
    content: '<p>Soạn nội dung ở đây...</p>',
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file || !editor) return;
    const url = URL.createObjectURL(file); // TODO: replace with real upload
    editor.chain().focus().insertContent({
      type: 'resizableImage',
      attrs: { src: url, width: '300px' },
    }).run();
  };

  const insertYoutube = () => {
    const link = prompt('Nhúng link YouTube: (https://www.youtube.com/embed/...)');
    if (link) {
      editor.commands.insertContent(
        `<iframe width="560" height="315" src="${link}" frameborder="0" allowfullscreen></iframe>`
      );
    }
  };

  return (
    <div style={{ display: 'flex', gap: 16 }}>
      {/* Sidebar bên trái */}
      <div style={{ width: 200, borderRight: '1px solid #ddd', paddingRight: 12 }}>
        <h4>Định dạng</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <button onClick={() => editor.chain().focus().toggleBold().run()}>Bold</button>
          <button onClick={() => editor.chain().focus().toggleItalic().run()}>Italic</button>
          <button onClick={() => editor.chain().focus().toggleUnderline().run()}>Underline</button>
          <button onClick={() => editor.chain().focus().toggleStrike().run()}>Strike</button>
          <button onClick={() => editor.chain().focus().toggleBulletList().run()}>• List</button>
          <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>1. List</button>
          <button onClick={() => editor.chain().focus().setTextAlign('left').run()}>Trái</button>
          <button onClick={() => editor.chain().focus().setTextAlign('center').run()}>Giữa</button>
          <button onClick={() => editor.chain().focus().setTextAlign('right').run()}>Phải</button>
          <button onClick={() => editor.chain().focus().setParagraph().run()}>P</button>
          <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>H1</button>
          <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
          <input
            type="color"
            onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
          />
          <button onClick={() => {
            const url = prompt('Nhập URL:');
            editor.chain().focus().setLink({ href: url }).run();
          }}>Link</button>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <button onClick={insertYoutube}>YouTube</button>
          <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>Code</button>
          <button onClick={() => editor.chain().focus().toggleBlockquote().run()}>Quote</button>
          <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>HR</button>
        </div>
      </div>

      {/* Editor bên phải */}
      <div style={{
        flex: 1,
        minHeight: 400,
        border: '1px solid #ccc',
        borderRadius: 4,
        padding: 16
      }}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default RichEditor;
