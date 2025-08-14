import { useState } from "react";
import ClassComponent from "./ClassComponent";
import College from "./College";
import { SubjectContext } from "./ContextData";
import Student from "./Student";
import Subject from "./Subject";

const App = () => {
  const [subject,setSubject] = useState('');
  return(
    <div style={{backgroundColor:"yellow", padding:"10px"}}>
        <SubjectContext.Provider value={subject}>
          <select value = {subject} name="data" id="data" onChange={(e)=> setSubject(e.target.value)}>
            <option value="">Select Subject</option>
            <option value="Maths">Maths</option>
            <option value="History">History</option>
            <option value="English">English</option>
          </select>
          <h1>Context API</h1>
          <button onClick={()=>setSubject('')}>Clear Subject</button>
          <College/> 
        </SubjectContext.Provider>
    </div>
  )
}

export default App;
