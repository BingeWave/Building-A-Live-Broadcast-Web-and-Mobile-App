import logo from './logo.svg';
import './App.css';

import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://connect.bingewave.com/connect.js";
    script.async = true;
  
    document.body.appendChild(script);

    setTimeout(() => { window.BingewaveConnector.init();}, 1000);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="App">
      <h1>Web Broadcast</h1>

      <span dangerouslySetInnerHTML={{__html: '<bw:widget env="prod" type="stream" id="[live_event_id]"></bw:widget>'}} />
      

    </div>
  );
}

export default App;
