import './App.css';
import Aktie from './aktien';
// import CanvasJSReact from './canvasjs.react';
// import { render } from '@testing-library/react';

function App() {
		return (
      <body>
        <div className='iConBox'>
        <div className="box">
            <Aktie url="https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2021-07-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=cMJpjZ_3DNh4bOxSPpvOwIln0gfewRfV"/>
        </div>
        </div>
      </body>

    ); 
}

export default App;
// https://api.polygon.io/v2/aggs/ticker/SMCI/range/1/day/2021-07-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=cMJpjZ_3DNh4bOxSPpvOwIln0gfewRfV