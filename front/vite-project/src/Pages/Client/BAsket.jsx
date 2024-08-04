import React, { useContext } from 'react'
import mainContext from '../../Context/Context'
import { Toaster } from 'react-hot-toast'

const BAsket = () => {
  const {basket,decrease,increase,removeFromBasket}=useContext(mainContext)
  let totalPriceSum = 0;
  return (
    <div style={{minHeight:"650px"}}>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">image</th>
      <th scope="col">title</th>
      <th scope="col">increse</th>
      <th scope="col">count</th>
      <th scope="col">decrease</th>
      <th scope="col">totalPrice</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>
    {
      basket.map((item,index)=>{
        totalPriceSum += item.totalPrice;
        return(
          <tr>
          <th scope="row"><img style={{width:"100px"}} src={item.product.image} alt="" /></th>
          <td>{item.product.title}</td>
          <td><button className='btn btn-info' onClick={()=>{
            increase(item)
          }}>increase</button></td>
          <td>{item.count}</td>
          <td><button className='btn btn-danger' onClick={()=>{
            decrease(item)
          }}>decrease</button></td>
          <td>{item.totalPrice}</td>
          <td><button className='btn btn-success' onClick={()=>{
            removeFromBasket(item)
          }}>delete</button></td>
        </tr>
        )
      })
    }

  </tbody>
  </table>
  <h1>Total Price: {totalPriceSum}</h1>
      <Toaster/>
    </div>
  )
}

export default BAsket
