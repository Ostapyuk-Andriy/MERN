import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
    
const ProductList = (props) => {
    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <h1>All Products:</h1>
            {props.products.map( (product, i) =>
                <p>
                    <Link to={`/product/${product._id}`} key={i}>{product.title}</Link> | <button className='btn btn-danger' onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                </p>
            )}
        </div>
    )
}
    
export default ProductList;

