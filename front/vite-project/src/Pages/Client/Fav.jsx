import React, { useContext } from 'react'
import mainContext from '../../Context/Context'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const Fav = () => {
  const {wishList,addToWishList}=useContext(mainContext)
  return (
    <div className='container' style={{minHeight:"600px", marginTop:"30px"}}>
      <div className="row">


      {
        wishList.map((item,index)=>{
          return(
            <div className='col-lg-4 col-md-2 mb-3 mr-3'>
            <div class="card" style={{ width: "18rem;" }}>
                <img class="card-img-top" src={item.image} alt="Card image cap" />
                <div class="card-body">
                   <Link style={{textDecoration:"none", color:"black"}}> <h5 class="card-title">{item.title}</h5></Link>
                    <p className="card-text" style={{ fontWeight: "bold", fontSize:"23px" }}>
                        {item.price}$$ <span style={{color:"gray", }}>{item.isCount ? (item.price-(item.price * item.isCount /100) ) : ""}</span>
                    </p>
                    <button onClick={()=>{
                        AddToBasket(item)
                    }}><i class="fa-solid fa-basket-shopping"></i></button>
                    <button onClick={()=>{
                        addToWishList(item)
                    }}><i class="fa-regular fa-heart"></i></button>
                </div>
            </div>
            <Toaster/>
        </div>
          )
        })
      }
      </div>
      
    </div>
  )
}

export default Fav
