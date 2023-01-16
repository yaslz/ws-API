import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Users from "./Pages/Users";
import Error from "./Pages/Error";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
       <NavBar />
      <h1>workshop API </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
