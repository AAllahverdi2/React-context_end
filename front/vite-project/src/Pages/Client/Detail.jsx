import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import "./Detail.scss"
import mainContext from '../../Context/Context'
import { Toaster } from 'react-hot-toast'
const Detail = () => {

  const {AddToBasket,decrease}=useContext(mainContext)
  const { id } = useParams()
  const [detail, setDetail] = useState([])

  axios.get(`http://localhost:7954/product/${id}`).then(res => {
    setDetail(res.data)
  })
  return (
    <div className='detail__all'>
      <div className="left__side"><img src={detail.image} alt="" /></div>
      <div className="right___side">
        <p><strong>Name:</strong>  {detail.title}</p>
        <div className='right__basket'><strong>Price :  {detail.price}</strong> 
          <button onClick={()=>{
            AddToBasket(detail)
          }}>Add To Basket</button>
          {/* <button onClick={()=>{
            decrease(detail)
          }}>decrease</button> */}
        </div>
      </div>

<Toaster/>

    </div>
  )
}

export default Detail
