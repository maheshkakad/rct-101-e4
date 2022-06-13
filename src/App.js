import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home"
import { Routes , Route } from "react-router-dom";

function App() {
  return <div className="App">
    
         <Navbar />
         <Home></Home>
         <Login></Login>
    </div>;
}

export default App;
