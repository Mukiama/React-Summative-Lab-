import {BrowserRouter, Routes, Route} from "react-router-dom"
import {useEffect, useState} from "react"
import Home from "./Home"
import Bookshop from "./Bookshop"
import AdminPortal from "./AdminPortal"

const App =()=> {
  const [books, setBooks]= useState([])

  useEffect(() => {
        fetch("http://localhost:3000/books")
        .then((r) => r.json())
        .then(data => {
            console.log(data)
            setBooks(data)})
        .catch(console.error)
    }, [])
  
    return (
  <BrowserRouter>
    <Routes>
      <Route path= "/" element={<Home/>}/>
      <Route path= "/bookshop" element= {<Bookshop books = {books}/>}/>
      <Route path= "/adminPortal" element= {<AdminPortal books={books} setBooks={setBooks}/>} />

    </Routes>
  </BrowserRouter>
    )

  }

export default App