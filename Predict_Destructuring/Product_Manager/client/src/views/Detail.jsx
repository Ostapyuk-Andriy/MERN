import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";
    
const Detail = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                // removeFromDom(productId)
                navigate("/")
            })
            .catch(err => console.error(err));
    }
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <h1>Title: {product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <p><Link to={"/product/" + product._id + "/edit"}>Edit</Link> | <button className='btn btn-danger' onClick={(e)=>{deleteProduct(product._id)}}>Delete</button></p>
        </div>
    )
}
    
export default Detail;

