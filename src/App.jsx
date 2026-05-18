import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home"
import Bookshop from "./Bookshop"
import AdminPortal from "./AdminPortal"

const App =()=> (
  
  <BrowserRouter>
    <Routes>
      <Route path= "/" element={<Home/>}/>
      <Route path= "/bookshop" element= {<Bookshop/>}/>
      <Route path= "/adminPortal" element= {<AdminPortal/>} />

    </Routes>
  </BrowserRouter>

)

export default App