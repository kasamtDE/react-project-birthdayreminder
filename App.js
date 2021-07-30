import data from "./data"
import React,{useState} from "react"
import List from "./List"
function App() {

  const [people , setPeople] = useState(data)

  console.log(people)

  
  return (
    <div className="container">

      <List people = {people} />
      <button className = "clear" onClick = {() =>{setPeople([])}}> Clear All </button>
      
    </div>
  );
}

export default App;
