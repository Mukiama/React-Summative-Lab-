function Search({search, onSearch}) {
    return(
        <form className= "searchbar">
            <input
            type= "text"
            id= "search"
            placeholder = "Search book..."
            onChange={(e) => onSearch(e.target.value)}
            />
        
        </form>
    
    )
}

export default Search