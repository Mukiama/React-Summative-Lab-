import React from "react"
import {useEffect, useState} from "react"
import NavBar from "./NavBar"
import Search from "./Search"
import Card from "./Card"

function  Bookshop({books}) {
    
    const [search, setSearch]= useState("")
    
    

    const displayedBooks = books.filter((book) => (book.title || "").toLowerCase().includes(search.toLowerCase()))
    return (
        <>
        <NavBar />
        <Search search={search} onSearch= {setSearch}/>
        {displayedBooks.map(book => <Card key={book.id}{...book}/>)}
        </>
    )

}

export default Bookshop 
