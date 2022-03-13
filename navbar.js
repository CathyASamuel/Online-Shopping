import { BsCart } from 'react-icons/bs';
import "../styles/navbar.css"

export const Navbar = () => {
    return (

        <div className = "navbar">
            <h1 > WATCHES FOR SALE </h1> 
            <BsCart/>
            <div className = "cartcounter"> 0 </div> 
        </div>

    );
};
