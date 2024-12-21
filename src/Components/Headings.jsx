import './css/Headings.css'
import { useState } from 'react'
let Headings=()=>{
  let[input,setInput]=useState("");
  let [taskList, setTaskList] = useState([]);
  let [date,setDate]=useState("");
  let [getvisble,setIsDisabled]=useState(true);
  
  let task=(e)=>{
    let value = e.target.value; // Declare the variable
    setInput(value);
    
    if (value.trim().length > 0 && date.trim().length > 0) {
      setIsDisabled(false);
    } 
    else {
      setIsDisabled(true);
    }
  };
  
  let dateinput=(e)=>{
    setDate(e.target.value);
    if (input.trim().length > 0 && e.target.value.trim().length > 0) { // Use e.target.value
      setIsDisabled(false);
    } 
    else {
      setIsDisabled(true);
    }
  };
  
  let clicked=()=>{
    setTaskList([...taskList,
      {
        "task":input,
        "date":date
      }
    ]);
    setInput("");
    setDate("");
    setIsDisabled(true); // Reset disabled state
  };
  
  let del=(indexToDel)=>{
    const updatedTaskList = taskList.filter((_,index) => index !== indexToDel);
    setTaskList(updatedTaskList);
  }
  
  return(
  <div>
   <nav>
    <div class="one">
      <p>Task</p>
      <input type="text"onChange={task} value={input}/>
    </div>
    
    <div class="two">
      <p>Expire date</p>
      <input type="date" name="" id="" onInput={dateinput} value={date}/>
    </div>
    
    <div class="three">
      <p>Submit</p>
      
      <input type="submit" value="Add Todo" onClick={clicked} disabled={getvisble}/>

    </div>
   </nav>
   <div className="error">
     <p>{taskList.length === 0 ? "No Tasks":false}</p>
   </div>

       {taskList.map((item, index) => {
  return (
    <div className="items" key={index}>
       
     <div className="task">
       <li>{item.task}</li>
     </div>
      <div className="date">
       <li>{item.date}</li>
     </div>
     <div>
       <button onClick={()=>del(index)} key={index}>Delete</button>
     </div>
    </div>
  );
})}
  </div>
    )
}

export default Headings;
