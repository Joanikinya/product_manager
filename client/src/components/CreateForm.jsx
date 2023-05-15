import React, {useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const CreateForm = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("0")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        // send the formData to api
        axios.post(`http://localhost:8002/api/products`, {Title: title, Price: price, Description: description})
            .then(response=>{
                console.log(response.data)
                navigate(`/dashboard`) // logic after successful create
            })
            .catch(err=>console.log(err))
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label> Title </label>
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
                <input type="text" name="description" value={description}
                    onChange={e=>setDescription(e.target.value)} />
            </div>
            <button type="submit">Create</button>
        </form>
    )
}

export default CreateForm