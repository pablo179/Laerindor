'use client';
import { colors as historyColors } from '@laerindor/sigils/history';
import { colors as projectColors } from '@laerindor/sigils/project';
import './page.css';
export default function Home() {
  return (
    <div className="main">
      <h1>Rivendell</h1>
      <h2>Testing colors by ts import</h2>
      <h3> History</h3>
      <div className="colorsContainer">
        {Object.entries(historyColors).map(([key, value]) => (
          <div key={key} className="color">
            <div
              key={key}
              style={{
                backgroundColor: value,
              }}
              className="squareColor"
            />
            {key}: {value ? value : 'undefined'}
          </div>
        ))}
      </div>
      <h3>Project</h3>
      <div className="colorsContainer">
        {Object.entries(projectColors).map(([key, value]) => (
          <div key={key} className="color">
            <div
              key={key}
              style={{
                backgroundColor: value,
              }}
              className="squareColor"
            />
            {key}: {value ? value : 'undefined'}
          </div>
        ))}
      </div>
    </div>
  );
}
