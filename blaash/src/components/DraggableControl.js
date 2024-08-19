import React from 'react';
import { useDraggable } from '@dnd-kit/core';

function DraggableControl({ id, label }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    padding: '8px',
    marginBottom: '8px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    cursor: 'move',
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {label}
    </div>
  );
}

export default DraggableControl;
