import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import Welcome from "./Welcome";

function App() {

  const name = useSelector(state => state.counter)
  const setName = useDispatch()

  return (
     <>
         <button onClick={() => setName({
             type : "INCREMENT",
             payload : 1
         })}>+</button>
         <button onClick={() => setName({
             type : "DECREMENT",
             payload : 1
         })}>-</button>


         {name}
         <br/>
         <br/>
         <br/>
         <Welcome/>
     </>
  );
}

export default App;
