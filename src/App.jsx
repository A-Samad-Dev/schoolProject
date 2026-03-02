import viteLogo from "/vite.svg";
import "./App.css";
import Landing from "./assets/Components/Landing";
import { Route, Routes } from "react-router";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Display from "./assets/Components/display";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route index element={<Display />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
// https://dribbble.com/shots/26848769-School-Website-Design this is the link of the template i'm following
