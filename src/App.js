// import logo from './logo.svg';
// import './App.css';
import React, {useState} from "react";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const addToList = () => {
    if(input.length){
      setList((prev)=>[...prev,input])
      setInput("");
    }
    console.log("list--->", list);
  }
  return (
    <div className="App">
      <input val={input} onChange={setInput}
      />
      <button onSubmit={addToList}>submit</button>
      {list.map((item,ind)=>{
        return <div key={ind}>{item}</div>
      })}
    </div>
  );
}

export default App;
