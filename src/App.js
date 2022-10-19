import logo from './logo.svg';
import {useState, useEffect} from "react";

import './App.css';

function App() {

const[num,setNum]=useState(0);

const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={ `App ${theme}`}>
      <button  className="sub" onClick={()=>{

        if(num>0){
        setNum(num-1)
        }
      }} >-</button>

      <div className="screen"> 
      <h2>{num}</h2>
      </div>

      <button  className="add" onClick={()=>{

        // const randNum=Math.floor(Math.random()*100);

        setNum(num+1)
      }} >+</button>

<button className='forTheme' onClick={toggleTheme}>Dark/Light</button>

    </div>
  );
}

export default App;
