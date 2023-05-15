import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from "axios";

const DetailsPage = () => {
  const [product, setProduct] = useState();

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8002/api/products/${id}`)
        .then(response => {
            setProduct(response.data)
        })
        .catch(err => console.log(err))
}, [id])


  return (
    <div>
      {
        product?
        <div>
          <h3>Product Title: {product.Title}</h3>
          <p>Product Price ${product.Price}</p>
          <p>Product Description: {product.Description}</p>
        </div>:
        <h3>Loading...</h3>
      }
    </div>
  )
}

export default DetailsPage