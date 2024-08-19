import React from 'react';
import { useDroppable } from '@dnd-kit/core';

function Canvas({ children }) {
  const { setNodeRef } = useDroppable({
    id: 'canvas',
  });

  const style = {
    width: '100%',
    height: '400px',
    backgroundColor: '#fff',
    border: '2px dashed #ccc',
    position: 'relative',
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}

export default Canvas;
