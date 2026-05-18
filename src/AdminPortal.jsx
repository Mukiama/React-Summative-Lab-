import NavBar from "./NavBar"
import {useState} from "react"

function AdminPortal () {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        price: ""

})

    function handleSubmit (e) {
        e.preventDefault()
        const newBook = {...formData}

        fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(newBook)
        })
        .then(r=>{
            if(!r.ok) {throw new Error("failed to add book")}
            return r.json()
        })
        .then(newBook=>{
            setFormData({
                title: "",
                author: "",
                price: ""
            })
        })
    }

    function handleChange (event) {
        setFormData(previousData => ({
            ...previousData, [event.target.name]: event.target.value
        }))
    }
    return (
        <form onSubmit ={handleSubmit}>
            <h3>Add Book</h3>
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
            <button type="submit">Submit</button>
        </form>
    )
}

export default AdminPortal