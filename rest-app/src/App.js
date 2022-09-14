import React, {useEffect, useState} from 'react';
import './App.css';
import NewToListenToForm from './NewToListenToForm';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
export default function App() {
  const [toListenTo, setToListenTo] = useState( [] );

//READ
  const fetchAllToListenTo = async () => {
      const response= await fetch("http://localhost:3000/toListenTo");
      const data = await response.json();
      setToListenTo(data);
    }

  useEffect(() => {
    fetchAllToListenTo();
  }, [])
  // only run once after first render

  // const createToListenTo = () => {
  //   const newToListenTo = {
  //     id: 101,
  //     name: "Reptilia",
  //     artist: "The Strokes"
  //   }

  //   //updating data on backend
  //const newlyCreatedToListenTo = response.json();

  //   //Option 2 - updating on front end 
  //   setToListenTo([...toListenTo, newToListenToData])

  // }
//UPDATE

  const createToListenToFromForm = (newToListenToData) => {
      fetch("http://localhost:3000/toListenTo", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      
      body: JSON.stringify(newToListenToData)
    })
    fetchAllToListenTo(); 
  }

const deleteToListenTo = (id) => {
  var url = "http://localhost:3000/toListenTo/"
  var itemUrl = url += id;
  fetch(itemUrl, {method: "DELETE"});
  const newList = toListenTo.filter((item) => item.id !== id);
  setToListenTo(newList);
  
  }
  

  return (
    <div className="App">
      {/*<button className="btn btn-success float-end" onClick={createToListenTo}>Create To Listen To</button>*/}
      <NewToListenToForm onSubmit={createToListenToFromForm}/>
      <ul>
        {toListenTo.map(toListenTo => <li key={toListenTo.id} onClick={() => deleteToListenTo(toListenTo.id)}>{ toListenTo.song }:  { toListenTo.artist }</li>)}
      </ul>

    </div>
  );
}



