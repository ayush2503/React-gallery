import React,{useState} from 'react';
import Read from "./Components/Read/Read";
import Show from "./Components/Show/Show";
import app from "./App.module.css";
import Time from "./Components/TIme/Time";

function App() {
  const [data, setdata] = useState([]);

  const addHandler=(inp)=>{
    const copydata=[...data]
    copydata.push(inp)
    console.log(copydata)
    setdata(copydata)
  }

  const deleteHandler=(e)=>{
    console.log(e.target.id)
    const copy=[...data]
    copy.splice(Number(e.target.id),1)
    setdata(copy)
  }
  
  return <div className={app.main}>
    <Time/>
    <h2>React Gallery</h2>
   
    <Read add={(elem)=>addHandler(elem)} />
   
    <Show renderData={data} delete={deleteHandler}/> 
  
  </div>;
}

export default App;
