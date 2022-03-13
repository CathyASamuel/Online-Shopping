import { list } from "./Watches";
import "../styles/product.css";
import { Navbar } from "./Navbar";

export const ProductList = () => (
    <div>
        <div> <Navbar/> </div>  
            <div className = "column"> {
            list.map((watch, index) => {
            return <div key = { index } className = "column">
                <h1> { watch.title } </h1>  
                <img width="200px" src={watch.img} alt="Watch"/>
                <h3> <label> Price: $ </label>
                {watch.price}</h3>
                <label> Quantity: </label>
                <button> - </button>
                { "                 " } 
                {watch.count} 
                { "                 " } 
                <button> + </button>  
                { "                 " } 
                <button className = "btn"> Add to Cart </button>   
                <br></br>   
                {watch.info }
                
                
                </div>
        })
    } 
           </div>  
    </div>
)
