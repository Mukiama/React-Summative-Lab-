import React from "react"
import {useEffect, useState} from "react"
import NavBar from "./NavBar"
import Search from "./Search"
import Card from "./Card"

function  Bookshop() {
    const [books, setBooks]= useState([])
    const [search, setSearch]= useState("")
    
    useEffect(() => {
        fetch("http://localhost:3000/books")
        .then((r) => r.json())
        .then(data => {
            console.log(data)
            setBooks(data)})
        .catch(console.error)
    }, [])

    const displayedBooks = books.filter((book) => (book.title || "").toLowerCase().includes(search.toLowerCase()))
    return (
        <>
        <Search search={search} onSearch= {setSearch}/>
        {displayedBooks.map(book => <Card key={book.id}{...book}/>)}
        </>
    )

}

export default Bookshop 
