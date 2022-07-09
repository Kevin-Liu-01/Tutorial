import "./App.css";
import Main from "./pages/Main.js";
import Footer from "./elements/Footer.js";
import FindTutor from "./pages/FindTutor.js";
import FindClient from "./pages/FindClient.js";
import CreateClient from "./pages/CreateClient.js";
import CreateTutor from "./pages/CreateTutor.js";
import Documentation from "./pages/Documentation.js";
import Creator from "./pages/Creator.js";
import Rules from "./pages/Rules.js";
import About from "./pages/About.js";
import Terms from "./pages/Terms.js";
import Privacy from "./pages/Privacy.js";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="find-a-tutor" element={<FindTutor />}></Route>
        <Route path="find-a-client" element={<FindClient />}></Route>
        <Route path="create-tutor" element={<CreateTutor />}></Route>
        <Route path="create-client" element={<CreateClient />}></Route>
        <Route path="documentation" element={<Documentation />}></Route>
        <Route path="create-listing" element={<Creator />}></Route>
        <Route path="rules" element={<Rules />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="terms" element={<Terms />}></Route>
        <Route path="privacy-policy" element={<Privacy />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
