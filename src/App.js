import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ResizableWrapper from './components/ResizableWrapper/ResizableWrapper';

function App() {
  const dispatch = useDispatch()
  const state = useSelector((state) => {
    return {
      routesData: state.routesData,
      map: state.map
    }
  })
  console.log(state)

  return (
    <div className="App">
      <ResizableWrapper state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
