import NavBar from "./NavBar"
import {useState} from "react"

function AdminPortal ({books, setBooks}) {

    const [editingId, setEditingId] = useState(null)
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        price: ""

})

   //HANDLE INPUT CHANGE  
    function handleChange (event) {
        setFormData(previousData => ({
            ...previousData, [event.target.name]: event.target.value
        }))
    }

    //POST NEW BOOK
    function addBook(){
        fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(formData)
        })
        .then(r=>{
            if(!r.ok) {throw new Error("failed to add book")}
            return r.json()
        })
        .then((newBook)=>{
            setBooks([...books, newBook])
            setFormData({
                title: "",
                author: "",
                price: ""
            })
        })
    }
//PATCH EXISTING BOOK
    function updateBook() {
        fetch(`http://localhost:3000/books/${editingId}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(formData)
        })
        .then((r) =>{
            if(!r.ok) {
                throw new Error ("failed to update book")
            }
            return r.json()
        })
        .then((updatedBook) => {
            const updatedBooks = books.map((book) =>
            book.id === updatedBook.id ? updatedBook : book)
            setBooks(updatedBooks)
            setEditingId(null)
            setFormData ({
                title: "",
                author: "",
                price: ""
            })
        })
        .catch(console.error)
    }

    //DELETE BOOK
    function deleteBook(id) {
        fetch(`http://localhost:3000/books/${id}`, {
            method: "DELETE",
        })
        .then(()=> {
            const filteredBooks= books.filter((book) => book/id !== id)
            setBooks(filteredBooks)
        })
        .catch(console.error)
    }
    //LOAD BOOK INTO FORM FOR EDITING 
    function handleEdit(book) {
        setEditingId(book.id)

        setFormData({
            title:book.title, 
            author: book.author,
            price: book.price
        })
    }

    //HANDLE SUBMIT 
   function handleSubmit (e) {
    e.preventDefault()
    if (editingId) {
        updateBook()
    } else {
        addBook()
    }
   }

    
    return (
        <>
        <NavBar/>
        <form onSubmit ={handleSubmit}>
            <h3>{editingId ? "Edit Book" : "Add Book"}</h3>
            <label>
                Title 
                <input
                type= "text"
                name= "title"
                value= {formData.title}
                onChange= {handleChange}
                />
            </label>

            <label>
                Author
                <input
                type= "text"
                name= "author"
                value= {formData.author}
                onChange= {handleChange}
                />
            </label>

            <label>
                Price 
                <input
                type= "text"
                name= "price"
                value= {formData.price}
                onChange= {handleChange}
                />
            </label>
            <button type="submit">{editingId ? "Updatae Book" : "Submit"}</button>
        </form>

        <hr/>
        <h2>Books</h2>

        {books.map((book) => (
            <div key={book.id}>
                <h3> {book.title}</h3>
                <p>{book.author}</p>
                <p>{book.price}</p>
                <button onClick={() => handleEdit(book)}>
                    Edit
                    </button>
                <button onClick={() => deleteBook(book.id)}> Delete</button>
        </div>
        ))}
        </>
    )
}

export default AdminPortal