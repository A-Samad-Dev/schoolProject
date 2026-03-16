import viteLogo from "/vite.svg";
import "./App.css";
import Landing from "./assets/Components/Landing";
import { Route, Routes } from "react-router";

import Display from "./assets/Components/display";
import About from "./assets/Components/pages/About";
import Contact from "./assets/Components/pages/Contact";
import Admin from "./assets/Components/pages/Admin";
import NewStudent from "./assets/Components/pages/NewStudent";
import EditStudent from "./assets/Components/pages/EditPage";
import Students from "./assets/Components/pages/Students";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route index element={<Display />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/admin" element={<Admin />}>
          <Route index element={<Students />} />
          <Route path="newstudent" element={<NewStudent />} />
          <Route path="editstudent/:id" element={<EditStudent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
// https://dribbble.com/shots/26848769-School-Website-Design this is the link of the template i'm following
