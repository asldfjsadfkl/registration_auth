import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import NavBar from "./components/NavBar";
import CreateList from "./components/CreateList";
import Table from "./components/Table";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/createlist" element={<CreateList />} />
          <Route path="/data" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
