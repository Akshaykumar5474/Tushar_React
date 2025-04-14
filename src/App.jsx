import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import CartItem from './Cart'

function App() {

  const [products,setProducts]=useState([])

async function GetData() {
  try {
    let data=await axios.get('https://dummyjson.com/products')
    setProducts(data.data.products)
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}


 useEffect(()=>{
  GetData()
 },[])

  return (
    <>
    {products?.length ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {products.map((item, key) => (
      <CartItem product={item} key={key} />
    ))}
  </div>
) : null}
    </>
  )
}

export default App
