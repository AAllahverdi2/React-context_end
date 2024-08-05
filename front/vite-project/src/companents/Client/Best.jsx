import React from 'react'
import "./Best.scss"
const Best = () => {
    return (
        <div className='container' style={{marginTop:"30px"}}>
            <div className="best__name">
                <h2>Best Sellers</h2>
                <div className='free'></div>
            </div>
            <div className="row" style={{marginTop:"30px"}}>
            <div className="col-lg-3 col-md-4">
      <div className="card1" style={{ width: "18rem" }}>
        <div className="card-badge1">
          <i className="fa-solid fa-bolt"></i> New
        </div>
        <img className="card-img-top1" src="https://preview.colorlib.com/theme/coloshop/images/product_3.png" alt="Card image cap" />
        <div className="card-body1">
          <h5 className="card-title1">Samsung CF-204</h5>
          <p className="card-text1" style={{ color: "red" }}><b>200$</b></p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-4">
      <div className="card1" style={{ width: "18rem" }}>
        <div className="card-badge1">
          <i className="fa-solid fa-bolt"></i> New
        </div>
        <img className="card-img-top1" src="https://preview.colorlib.com/theme/coloshop/images/product_10.png" alt="Card image cap" />
        <div className="card-body1">
          <h5 className="card-title1">Samsung CF-204</h5>
          <p className="card-text1" style={{ color: "red" }}><b>200$</b></p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-4">
      <div className="card1" style={{ width: "18rem" }}>
        <div className="card-badge1">
          <i className="fa-solid fa-bolt"></i> New
        </div>
        <img className="card-img-top1" src="https://preview.colorlib.com/theme/coloshop/images/product_8.png" alt="Card image cap" />
        <div className="card-body1">
          <h5 className="card-title1">Samsung CF-204</h5>
          <p className="card-text1" style={{ color: "red" }}><b>200$</b></p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-4">
      <div className="card1" style={{ width: "18rem" }}>
        <div className="card-badge1">
          <i className="fa-solid fa-bolt"></i> New
        </div>
        <img className="card-img-top1" src="https://preview.colorlib.com/theme/coloshop/images/product_2.png" alt="Card image cap" />
        <div className="card-body1">
          <h5 className="card-title1">Samsung CF-204</h5>
          <p className="card-text1" style={{ color: "red" }}><b>200$</b></p>
        </div>
      </div>
    </div>
              
            </div>

        </div>
    )
}

export default Best
