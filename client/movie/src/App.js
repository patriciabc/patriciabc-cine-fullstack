import './App.css';
import Home from './components/Home.js';
import Index from './components/Index.js';
import  MovieForm  from './components/MovieForm.js';
import Login from './components/Login.js'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootswatch/dist/lux/bootstrap.min.css";
import {Navigation} from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navigation />
      <div className='container p-4'>
        <Routes>
            <Route exact path="/" element={<Index />}></Route>
            <Route exact path="/home" element={<Home />}></Route>   
            <Route exact path="/new-movie" element={<MovieForm />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;