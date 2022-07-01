import './App.css';
import Main from './pages/Main.js'
import Footer from './elements/Footer.js'
import FindTutor from './pages/FindTutor.js'
import FindClient from './pages/FindClient.js'
import CreateClient from './pages/CreateClient.js'
import CreateTutor from './pages/CreateTutor.js'
import Documentation from './pages/Documentation.js'
import Creator from './pages/Creator.js'


import { Routes, Route } from "react-router-dom";

function App() {

  
    return (<>
    

       <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="find-a-tutor" element={<FindTutor />}></Route>
      <Route path="find-a-client" element={<FindClient />}></Route>
      <Route path="create-tutor" element={<CreateTutor />}></Route>
      <Route path="create-client" element={<CreateClient />}></Route>
      <Route path="documentation" element={<Documentation/>}></Route>
      <Route path="create-listing" element={<Creator/>}></Route>


      </Routes> 
      <Footer></Footer>

      </>
      
      
      )
}


        

export default App;
