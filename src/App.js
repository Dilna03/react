import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import Signup from './components/Signup';
import UseEffect from './components/UseEffect';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Navbar/> */}
      {/* <StateBasics/> */}
      {/* <Counter/> */}
      {/* <Signup/> */}
      {/* <UseEffect/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/sign" element={<Signup/>}/>
        <Route path="/counters"element={<Counter/>}/>
        
        <Route path="/StateBasics" element={<StateBasics/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
