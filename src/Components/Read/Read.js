import React,{useState} from 'react';
import css from "./read.module.css";

function Read(props) {

    const [inp, setinp] = useState({url:"",name:""});
    const onChangeHandler=(e)=>{
      setinp({...inp,[e.target.name]:e.target.value})
    }
    console.log(inp)
    
  return<>
  <div>
    <div className={css.read}>
      <input name='url' placeholder='url' value={inp.url} onChange={onChangeHandler} type="text" />
      <input name='name' placeholder='name' value={inp.name} onChange={onChangeHandler} type="text" /> 
    </div>
    <div className={css.btn}>
      <button onClick={()=>props.add(inp)}>Add</button>
    </div>
  </div>
    
  
  </>
}

export default Read;
