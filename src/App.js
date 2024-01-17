import './App.css';
import React,{useState} from 'react'; 

function App() {
  const[weight, setWeight] = useState(0);
  const[height, setHeight] = useState(0);
  const[message, setMessage] = useState('');
  const[bmi, setBmi] = useState('');

  let bmiCalc = (e) => {
    e.preventDefault();
    if(weight === 0 || height === 0){
      alert("Please enter a valid weight or height")
    }else{
      let heightInMeters = (height * 0.3048) + (height * 0.0254);
      let bmi = weight / (heightInMeters * heightInMeters)
      setBmi(bmi.toFixed(1))
      if (bmi < 18.5) {
        setMessage("You are Underweight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("You are Normal Weight");
      } else if (bmi >= 25 && bmi < 29.9) {
        setMessage("You are Overweight");
      } else {
        setMessage("You are Obese");
      }
    }
  }

  let reload = () =>{
    window.location.reload()
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>BMI Calculator</h1>
        <form onSubmit={bmiCalc}>
          <div>
            <label>Weight (kg)</label>
            <input type='text' placeholder='Enter your weight' value={weight} onChange={(e) => setWeight(e.target.value)}/>
          </div>
          <div>
            <label>Height (feet)</label>
            <input type='text' placeholder='Enter your height' value={height} onChange={(e) => setHeight(e.target.value)}/>
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>
          </div>
          <div className='center'>
            <h2>Your BMI is: {bmi}</h2>
            <h2>{message}{setMessage}</h2>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
