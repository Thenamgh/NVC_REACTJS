import React, { useRef, useState } from 'react';

const ResizableImageComponent = ({ node, updateAttributes, selected }) => {
  const imageRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = (event) => {
    setIsResizing(true);
    event.preventDefault();
  };

  const stopResizing = () => setIsResizing(false);

  const handleResizing = (event) => {
    if (!isResizing || !imageRef.current) return;
    const width = event.clientX - imageRef.current.getBoundingClientRect().left;
    updateAttributes({ width: `${width}px` });
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        border: selected ? '1px solid #409eff' : 'none',
      }}
    >
      <img
        ref={imageRef}
        src={node.attrs.src}
        style={{ width: node.attrs.width || 'auto', maxWidth: '100%' }}
        alt=""
        onMouseMove={handleResizing}
        onMouseUp={stopResizing}
      />
      <div
        onMouseDown={startResizing}
        onMouseUp={stopResizing}
        style={{
          width: 10,
          height: 10,
          background: '#409eff',
          position: 'absolute',
          bottom: 0,
          right: 0,
          cursor: 'nwse-resize',
        }}
      />
    </div>
  );
};

export default ResizableImageComponent;
