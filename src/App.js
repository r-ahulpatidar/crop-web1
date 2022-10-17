import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./Routes/Home.jsx";
import About from "./Routes/About.jsx";
import Service from "./Routes/Service.jsx";
import Contact from "./Routes/Contact.jsx";
import SignUp from "./Routes/SignUp.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign" element={<SignUp />} />
      </Routes>
    </div>
  );
}
export default App;
