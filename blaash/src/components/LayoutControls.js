import React, { useState } from 'react';

function LayoutControls({ onSave, onLoad, onPublish }) {
  const [layoutName, setLayoutName] = useState('');

  return (
    <div style={{ marginBottom: '16px' }}>
      <input
        type="text"
        placeholder="Enter Layout Name"
        value={layoutName}
        onChange={(e) => setLayoutName(e.target.value)}
        style={{ marginRight: '8px' }}
      />
      <button onClick={() => onSave(layoutName)}>Save Layout</button>
      <button onClick={onLoad}>Load Layout</button>
      <button onClick={onPublish}>Publish</button>
    </div>
  );
}

export default LayoutControls;
