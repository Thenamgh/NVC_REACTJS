import React from 'react';
import { useDrag } from 'react-dnd';

const BlockItem = ({ type, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'BLOCK',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'grab',
        border: '1px solid #ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 8,
        background: '#fff',
      }}
    >
      {label}
    </div>
  );
};

const DragBlockPalette = () => {
  return (
    <div style={{ width: 200, padding: 16, borderRight: '1px solid #ddd' }}>
      <h4>Block kéo thả</h4>
      <BlockItem type="heading" label="Tiêu đề H2" />
      <BlockItem type="paragraph" label="Đoạn văn" />
      <BlockItem type="list" label="Danh sách" />
      <BlockItem type="image" label="Ảnh từ URL" />
      <BlockItem type="youtube" label="Video YouTube" />
    </div>
  );
};

export default DragBlockPalette;
