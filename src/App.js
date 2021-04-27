import React, { useState } from 'react';
import './App.css';
import Client from './components/Client';

const App = () => {

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  /* //Másik megoldás useEffectel
    const [show, setShow] = useState(false);
  
      useEffect(() => {
        //setLoad(false)
    
        fetch(`/api/clients?search=${search}`)
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => setData(null))
        //.finally(() => setLoad(true))
      }, [show])
  */

  function click() {
    setData(null)

    fetch(`/api/clients?search=${search}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setData(null))
  }

  return (
    <div className="App">
      <h1>Veterinarian admin - clients</h1>
      <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
      <button disabled={search.length < 3 ? true : false} onClick={() => click()}>Search</button>

      {/* data
        ? data.map((item, index) => <Client key={index} item={item} />)
        : ''
      */}

      {// rövidebb megoldás a tenary helyett
        data && data.map((item, index) => <Client key={index} item={item} />)
      }

    </div>
  )
}

export default App
