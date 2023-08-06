import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getCalls } from './util/api';

import Header from './Header.jsx';


  

const App = () => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    // Fetch the list of calls from the API when the component mounts
    getCalls()
      .then((response) => setCalls(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='container'>
      <Header/>
      <div className="container-view">Some activities should be here</div>

      <h2>Activity Feed</h2>
      <ul>
        {calls.map((call) => (
          <li key={call.id}>{call.direction}</li>
        ))}
      </ul>
      
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
