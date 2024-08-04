import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Cards.scss"
import mainContext from '../../Context/Context'
import toast, { Toaster } from 'react-hot-toast';

const Card = ({ item }) => {
    const { AddToBasket, addToWishList } = useContext(mainContext)
    return (
        <div className='col-lg-4 col-md-6 mb-3 mr-3'>
            <div class="card" style={{ width: "18rem;" }}>
                <Link to={`prod/${item._id}`}> <img class="card-img-top" src={item.image} alt="Card image cap" />
                </Link>
                <div class="card-body">
                    <Link style={{ textDecoration: "none", color: "black" }}> <h5 class="card-title">{item.title}</h5></Link>
                    <p className="card-text" style={{ fontWeight: "bold", fontSize: "23px" }}>
                        {item.price}$$ <span style={{ color: "gray", }}>{item.isCount ? (item.price - (item.price * item.isCount / 100)) : ""}</span>
                    </p>
                    <button onClick={() => {
                        AddToBasket(item)
                    }}><i class="fa-solid fa-basket-shopping"></i></button>
                    <button onClick={() => {
                        addToWishList(item)
                    }}><i class="fa-regular fa-heart"></i></button>
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default Card
