import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import DraggableControl from './components/DraggableControl';
import Canvas from './components/Canvas';
import LayoutControls from './components/LayoutControls';
import RenderedPage from './components/RenderedPage';

function App() {
  const [layout, setLayout] = useState([]);
  const [publishedLayout, setPublishedLayout] = useState(null);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && over.id === 'canvas') {
      setLayout([...layout, active.data.current.label]);
    }
  };

  const handleSaveLayout = (layoutName) => {
    localStorage.setItem(layoutName, JSON.stringify(layout));
    alert('Layout saved!');
  };

  const handleLoadLayout = () => {
    const loadedLayout = JSON.parse(localStorage.getItem('your-layout-name'));
    setLayout(loadedLayout || []);
  };

  const handlePublish = () => {
    setPublishedLayout(layout);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
      <LayoutControls onSave={handleSaveLayout} onLoad={handleLoadLayout} onPublish={handlePublish} />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '200px', marginRight: '16px' }}>
          <DraggableControl id="label" label="Label" />
          <DraggableControl id="input" label="Input Box" />
          <DraggableControl id="checkbox" label="Check Box" />
          <DraggableControl id="button" label="Button" />
          <DraggableControl id="table" label="Table" />
        </div>
        <Canvas>{layout.map((item, index) => <div key={index}>{item}</div>)}</Canvas>
      </div>
      {publishedLayout && <RenderedPage layout={publishedLayout} />}
    </div>
  );
}

export default App;
