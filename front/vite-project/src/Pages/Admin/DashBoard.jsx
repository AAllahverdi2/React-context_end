import React, { useContext } from 'react'
import mainContext from '../../Context/Context'

const DashBoard = () => {
  const { product, setProduct,deleteddata } = useContext(mainContext)
  return (
    <div >
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">NAme</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">delete</th>
          </tr>
        </thead>
        <tbody>
          {
            product.map((item,index)=>{
              return(
                <tr>
                <th scope="row"><img style={{width:"120px"}} src={item.image} alt="" /></th>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td><button onClick={()=>{
                  deleteddata(item._id)
                }} className='btn btn-dark'>delete</button></td>
              </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default DashBoard
