import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'

const UpdatePage = () => {
  const {id} = useParams()

  const navigate = useNavigate();

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("0")
  const [description, setDescription] = useState("")


  useEffect(() => {
    axios.get(`http://localhost:8002/api/products/${id}`)
        .then(response => {
            const product = response.data;
            setTitle(product.Title);
            setPrice(product.Price);
            setDescription(product.description);
        })
        .catch(err => console.log(err))
}, [id])

  const handleSubmit= (e) =>{
    e.preventDefault();
    axios.patch(`http://localhost:8002/api/products/${id}`, {Title: title, Price: price, Description: description})
        .then(response=>{
            console.log(response.data)
            navigate(`/products/${id}`)
        })
        .catch(err=>console.log(err))
  }

  const handleDelete = ()=>{
    axios.delete(`http://localhost:8002/api/products/${id}`)
        .then(response=>{
            // logic after delete
            navigate(`/dashboard`)
        })
        .catch(err=>console.log(err))
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
            <div>
                <label> Title</label>
                <input type="text" name="title" value={title}
                    onChange={e=>setTitle(e.target.value)} />
            </div>
            <div>
                <label> Price </label>
                <input type="number" name="price" value={price}
                    onChange={e=>setPrice(e.target.value)} />
            </div>
            <div>
                <label> Description </label>
                <input type="text" name="imageUrl" value={description}
                    onChange={e=>setDescription(e.target.value)} />
            </div>
            <button type="submit">Update</button>
        </form>
        <button onClick={handleDelete}> Delete</button>
    </div>
  )
}

export default UpdatePage