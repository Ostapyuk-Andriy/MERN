import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'

const ProductForm = () => {
    
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
    <>
            <form className="mt-3" onSubmit={onSubmitHandler}>
                <p className="form-group">
                    <label>Title</label>
                    <br />
                    <input
                        className="form-control"
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </p>
                <p className="form-group">
                    <label>Price</label>
                    <br />
                    <input
                        className="form-control"
                        type="number"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
                </p>
                <p className="form-group">
                    <label>Description</label>
                    <br />
                    <input
                        className="form-control"
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </p>
                <p className="text-center">
                    <button className="btn btn-primary">Submit</button>
                </p>
            </form>
        </>
    );
}


export default ProductForm