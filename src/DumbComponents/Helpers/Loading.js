import React from 'react';
var Loader = require('react-loader');
var options = {
    lines: 13,
    length: 20,
    width: 10,
    radius: 30,
    scale: 1.00,
    corners: 1,
    color: '#000',
    opacity: 0.25,
    rotate: 0,
    direction: 1,
    speed: 1,
    trail: 60,
    fps: 20,
    zIndex: 2e9,
    top: '50%',
    left: '50%',
    shadow: false,
    hwaccel: false,
};
export default function MyLoadingComponent() {
    return <div style={{
        background: 'white',
        height: '30vh',
        width: '100%',
        margin: '0 auto',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        resize: 'both',
        overflow: 'auto',
    }}>
      <div style={{
          width: '50%',
          padding: '20px',
          resize: 'both',
          overflow: 'auto',
      }}>
        <Loader loaded={false} options={options} className="spinner" />
      </div>
    </div>;
}
export const load = () => (
    <div>Loading...</div>
  )