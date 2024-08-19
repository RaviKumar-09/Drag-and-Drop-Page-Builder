import React from 'react';

function RenderedPage({ layout }) {
  return (
    <div>
      <h2>A Sample Dynamic Page</h2>
      <div>
        {layout.map((item, index) => (
          <div key={index} style={{ marginBottom: '16px' }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RenderedPage;
