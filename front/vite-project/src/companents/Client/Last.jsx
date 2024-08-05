import React from 'react'
import "./Last.scss"
const Last = () => {
  return (
    <div className='container' style={{marginTop:"20px"}}>
      <div className='last_top'>
      <h1>Lastest Blogs</h1>
      <div className='free'></div>

      </div>

        <div className="row" style={{marginTop:"30px"}}>
            <div className="col-lg-4 col-md-6 mb-3 mr-3" >
                <img src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg" alt="" />
            </div>
            <div className="col-lg-4 col-md-6 mb-3 mr-3" >
<img src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg" alt="" />
            </div>

            <div className="col-lg-4 col-md-6 mb-3 mr-3" >
<img src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg" alt="" />
            </div>
        </div>

      
    </div>
  )
}

export default Last
