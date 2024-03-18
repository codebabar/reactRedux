import React from 'react';
import { UseDispatch,useDispatch,useSelector } from 'react-redux';
import { increment,decrement } from './store/action';
function App() {

 const count = useSelector(state => state.count)
 const dispatch = useDispatch()
  return (
    <div>
       <h1>App {count} </h1>
       <button onClick={()=>dispatch(increment())}>INCREMENT</button>
       <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
    </div>
  );
}

export default App;
