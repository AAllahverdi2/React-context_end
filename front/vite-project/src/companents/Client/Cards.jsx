import React, { useContext } from 'react'
import mainContext from '../../Context/Context'
import Card from './Card'

const Cards = () => {
    const {data,handlerFilterByCategory,handlerSearch,handlerFilterByPrice}=useContext(mainContext)
  return (
    <div className='container' style={{marginTop:"20px"}}>
       
       <select style={{width:"200px", height:"40px"}} name="" id="" onChange={(e) => handlerFilterByCategory(e)}>
        <option value="df">Default</option>
        <option value="accessories">accessories</option>
        <option value="women">women</option>
        <option value="men">men</option>
      </select>

      <select style={{width:"200px", height:"40px"}} name="" id="" onChange={(e) => handlerFilterByPrice(e)}>
        <option value="Default">Default</option>
        <option value="01">azdan-coxa</option>
        <option value="10">coxdan aza</option>
      </select>

      <input style={{width:"200px", height:"40px", marginLeft:"20px"}} type="text"  placeholder='search by product name' onChange={(e)=>{
        handlerSearch(e.target.value)
      }}/>
        <div className="row" style={{marginTop:"20px"}}>
            {
                data.map((item,index)=>{
                    return(
                        <Card item={item} key={index}/>
                    )
                })
            }
        </div>
      
    </div>
  )
}

export default Cards
