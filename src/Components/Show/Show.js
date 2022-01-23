import React from 'react';
import show from "./show.module.css";

function Show(props) {
  
  return <div className={show.show}>

    {props.renderData.map((elem,index)=>
          <div  className={show.container} >
              <img  src={elem.url} alt="" srcset=""  />
              <div id={index} className={show.upr} onClick={props.delete}>
                x
              </div>
          </div>
    )}
  </div>;
}

export default Show;
