import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ViewUser } from "./components/viewuser";
import { Update } from "./components/updateuser";
import Adduser from "./components/adduser";

function App() {
  return (
    <>
      <Router>
        <Routes>
         
          <Route path="/" element={<ViewUser />} />

         
          <Route path="/update/:id" element={<Update />} />
          <Route path="/adduser" element={<Adduser/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
