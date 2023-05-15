import React, { useEffect, useState } from 'react'
import axios from "axios"


const DashboardPage = () => {
  const [productList, setProductList] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:8002/api/products')
      .then(response => {
        console.log(response.data);
        setProductList(response.data);
      })
      .catch(err=> console.log(err))
  }, [])

  const handleDelete = (deleteId) => {
    axios.delete(`http://localhost:8002/api/products/${deleteId}`)
        .then(response => {
            // logic after delete
            removeFromDom(deleteId)
        })
        .catch(err => console.log(err))
}

const removeFromDom = (deleteId) =>{
    const filteredList = productList.filter((eachProduct)=>
        eachProduct._id !== deleteId) 
    setProductList(filteredList)
}



  return (
    <div>
      <h3>All Products: </h3>
      <table style={{margin: "auto"}}>
        <tbody>
          {
            productList.map((eachProduct, idx)=>(
              <tr key={idx}>
              <td>{eachProduct.Title}</td>
              <td>
                <button onClick={() => handleDelete(eachProduct._id)}> Delete </button>
              </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default DashboardPage