import { useRef,useState } from 'react';
import './App.css'

function App() {
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  const [inputValue,setInputValue] = useState('')
  const colorName = useRef('')
  {console.log(colorName.current)}
  return (
    <>
    
    <input 
    type='text' 
    onChange={(e) => setInputValue(e.target.value)} 
    ref={colorName} 
    value={inputValue}  

    ></input>
    <div className='container'>
      
      {colors.map((color,index) => <div key={index} className='box' style={ colorName.current.value !== color ?  {border:`1px solid ${color}`, color:`${color}`} : {border:`1px solid ${color}`, color:'white' , background:`${color}`}  } > {colorName.current.value !== color ? `I'm not a ${colorName.current.value} color` : `I'm a ${colorName.current.value} color`  } </div>)}

    </div>
    </>
  )
}

export default App
