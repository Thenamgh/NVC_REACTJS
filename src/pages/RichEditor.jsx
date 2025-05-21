import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import { ResizableImage } from '../extension/ResizableImage';
import '../css/RichEditor.css';

const RichEditor = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

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
      Placeholder.configure({
        placeholder: 'Soạn nội dung ở đây...',
        emptyEditorClass: 'is-editor-empty',
      }),
    ],
    content: '',
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file || !editor) return;
    const url = URL.createObjectURL(file);
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

  const handleSubmit = () => {
    const htmlContent = editor?.getHTML();
    console.log({
      title,
      category,
      thumbnail,
      content: htmlContent,
    });
    alert('Gửi bài thành công (demo log ở console)');
  };

  return (
    <div className="rich-editor-container" style={{ flexDirection: 'column' }}>
      <h2 style={{ marginBottom: '12px' }}>Tạo bài viết mới</h2>

      <input
        type="text"
        placeholder="Nhập tiêu đề bài viết"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '100%',
          marginBottom: '12px',
          borderRadius: '6px',
          border: '1px solid #ccc',
        }}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '15px',
          width: '300px',
          marginBottom: '12px',
          borderRadius: '6px',
          border: '1px solid #ccc',
        }}
      >
        <option value="">-- Chọn chuyên mục --</option>
        <option value="tin-tuc">Tin tức</option>
        <option value="su-kien">Sự kiện</option>
        <option value="thong-bao">Thông báo</option>
      </select>

      <label style={{ marginBottom: '8px', fontWeight: 'bold' }}>Ảnh đại diện:</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setThumbnail(e.target.files[0])}
        style={{ marginBottom: '16px' }}
      />

      <div style={{ display: 'flex', gap: '24px' }}>
        <div className="rich-editor-sidebar">
          <h4>Định dạng</h4>
          <div className="rich-editor-controls">
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
              if (url) editor.chain().focus().setLink({ href: url }).run();
            }}>Link</button>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <button onClick={insertYoutube}>YouTube</button>
            <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>Code</button>
            <button onClick={() => editor.chain().focus().toggleBlockquote().run()}>Quote</button>
            <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>HR</button>
          </div>
        </div>

        <div className="rich-editor-content">
          <EditorContent editor={editor} />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        style={{
          marginTop: '20px',
          padding: '12px 24px',
          backgroundColor: '#4f88ff',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Đăng bài
      </button>
    </div>
  );
};

export default RichEditor;
