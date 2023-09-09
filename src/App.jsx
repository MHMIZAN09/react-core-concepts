import './App.css';
import Counter from './Counter';
import Friends from './Friends';
import Users from './User';

function App() {
 
  function handleClick(){
    alert('button clicked');
  }
  return (
    <>
      <h3> React core concept</h3>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <Users></Users>
      <Friends></Friends>
      
    </>
  )
}

export default App
