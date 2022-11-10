import logo from './logo.svg';
import './App.css';
import {React, useState} from 'react'
import BarChart from "react-bar-chart";


const items = ['P', 'M', 'Ar', 'ASaud', ];



function App() {

const [counter, setCounter] = useState(0);
this.onValueChange = this.onValueChange.bind(this);
this.formSubmit = this.formSubmit.bind(this);


let dane1; let dane2; let dane3; let dane4;

switch(counter){
  case 1: dane1 = 0;
  break;
  case 2: dane2 = 0 ;
  break;
  case 3: dane3 = 10;
  break;
  case 4: dane4 = 0;
  break;
}

const label1 = "Pox";
const label2 = "Mex";
const label3 = "ASaud;
const label4 = "Arx"; 



const data = [
  { text: "Pox", value: counter },
  { text: "Arx", value: 10 },
  { text: "ASaud", value: 100 },
  { text: "Mex", value: 35 }
];

const margin = { top: 40, right: 0, bottom: 30, left: 200 };

//createCheckbox = label => (
 // <Checkbox label={label} handleCheckboxChange={this.toggleCheckbox} key={label} />
//)

//createCheckboxes = () => ( items.map(this.createCheckbox))

//increase counter
const increase = () => {
  setCounter(count => count + 1);
};

//decrease counter
const decrease = () => {
  setCounter(count => count - 1);
};

//reset counter 
const reset = () =>{
  setCounter(0)
}

const onValueChange = (event) => {
  this.setState({
    selectedOption: event.target.value
  });
}

const formSubmit = (event) => {
  event.preventDefault();
  console.log(this.state.selectedOption)
}



  return (
    <div className="App">
      <h1>React Counter</h1>
      <div style={{ width: "20%" }}>
        <BarChart
          ylabel="Quantity"
          width={500}
          height={500}
          margin={margin}
          data={data}
        />
      </div>
      <div>
      <div onChange={onValueChange}>
        <input type="radio" value="Pox" name="Polska" onChange={onValueChange} checked={formSubmit === "Pox"}/>
        <input type="radio" value="Mex" name="Meksyk" onChange={onValueChange} checked={formSubmit === "Mex"}/>
        <input type="radio" value="Arx name="Argentyna"onChange={onValueChange} checked={formSubmit === "Arx"} />
        <input type="radio" value="ASaud" name="Arab_Saud" onChange={onValueChange} checked={formSubmit === "ASaud"}/>
     
      </div>
    </div>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>+</button>
        <button className="control__btn" onClick={decrease}>-</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};



export default App;
