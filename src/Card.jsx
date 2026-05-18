import {Outlet} from "react-router-dom"
function Card ({title, author, price}){
    
    return(
    <div>
     <h2>{title}</h2>
    <h3>{author}</h3>
    <h4>{price}</h4>
    </div>
    )
}

export default Card 