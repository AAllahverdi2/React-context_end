import React, { useEffect, useState } from 'react'
import ROUTES from './index.routes'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(ROUTES)
import axios from 'axios'
import mainContext from './Context/Context';
import toast from 'react-hot-toast';

const App = () => {

  const [data, setData] = useState([])
  const [search,setSearch]=useState([])
  const [basket, setBasket] = useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [])
  const [wishList, setWishList] = useState(localStorage.getItem("fav") ? JSON.parse(localStorage.getItem("fav")) : [])
  const [product,setProduct]=useState([])
  useEffect(() => {
    axios.get("http://localhost:7954/product/").then(res => {
      console.log(res.data)
      setSearch(res.data)
      setData(res.data)
      setProduct(res.data)
    })
  }, [])


  function AddToBasket(product) {
    const target = basket.find((item) => item.product._id == product._id)
    if (target) {
      target.count += 1,
        target.totalPrice = target.product.price * target.count
      setBasket([...basket])
      localStorage.setItem("basket", JSON.stringify([...basket]))
      toast.success("added to basket")

    }
    else {
      const newBasketItem = {
        count: 1,
        totalPrice: product.price,
        id: product._id,
        product: product
      }
      setBasket([...basket, newBasketItem])
      localStorage.setItem("basket", JSON.stringify([...basket, newBasketItem]))
      toast.success("added to basket")

    }
  }

  function decrease(product) {
    const target = basket.find((item) => item.id == product.id)
    if (target.count > 1) {
      console.log(target.count)
      target.count -= 1
      target.totalPrice = target.product.price * target.count
      setBasket([...basket])
      localStorage.setItem("basket", JSON.stringify([...basket]))
    }
  }

  function increase(product) {
    const target = basket.find((item) => item.id == product.id)
      console.log(target.count)
      target.count += 1
      target.totalPrice = target.product.price * target.count
      setBasket([...basket])
      localStorage.setItem("basket", JSON.stringify([...basket]))

  }

  const removeFromBasket=(product)=>{
    const target=basket.find(item=>item._id==product._id)
    basket.splice(basket.indexOf(target),1)
    setBasket([...basket])
    localStorage.setItem("basket",JSON.stringify([...basket]))
    toast.success("deleted from basket")
  }





  function addToWishList(prod) {
    const targetIndex = wishList.findIndex((item) => item._id === prod._id)
    if (targetIndex !== -1) {
      const updatedWishList = wishList.filter((item) => item._id !== prod._id)
      setWishList(updatedWishList)
      localStorage.setItem("fav", JSON.stringify(updatedWishList))
      toast.success("deleted item")
    } else {
      const updatedWishList = [...wishList, prod]
      setWishList(updatedWishList)
      localStorage.setItem("fav", JSON.stringify(updatedWishList))
      toast.success("item added")
    }
  }

  function handlerFilterByCategory(e) {
    const sorting = e.target.value;
    if (sorting === 'df') {
      setData([...search]);
    }
    if (sorting === 'accessories') {
      setData([...search.filter((a) => a.category === 'accessories')]);
    }
    if (sorting === 'women') {
      setData([...search.filter((a) => a.category === 'women')]);
    }
    if (sorting === 'men') {
      setData([...search.filter((a) => a.category === 'men')]);
    }
  }

  function handlerFilterByPrice(e) {
    const sorting = e.target.value;
    if (sorting === 'Default') {
      setData([...search]);
    }
    if (sorting === '01') {
      setData([...search.sort((a,b)=>a.price-b.price)]);
    }
    if (sorting === '10') {
      setData([...search.sort((a,b)=>b.price-a.price)]);;
    }
   
  }

  function handlerSearch(searchValue) {
    if (searchValue=="") {
      setData([...search])
    }else{
     const target= search.filter((item)=>item.title.trim().toLowerCase().includes(searchValue))
     setData([...target])
    }
  }

  function deleteddata(id) {
    axios.delete(`http://localhost:7954/product/${id}`).then(res=>{
      const target=product.find((item)=>item._id==id)
      product.splice(product.indexOf(target),1)
      setProduct([...product])
    })
  }

 


  const values = {
    data,
    AddToBasket,
    basket,
    decrease,
    increase,
    removeFromBasket,
    addToWishList,
    wishList,
    handlerFilterByCategory,
    handlerSearch,
    product,
    setProduct,
    deleteddata,
    handlerFilterByPrice
  }

  return (
    <div>
      <mainContext.Provider value={values}>

        <RouterProvider router={router} />

      </mainContext.Provider>

    </div>
  )
}

export default App
