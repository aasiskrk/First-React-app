import React from 'react'

const ProductCard = ({ productInfo, color }) => {

    return (
        <>
            <div class="card" style={{ width: "18rem" }}>

                <span style={{ backgroundColor: color, color: { color }, border: color }} className='badge position-absolute top-0'>{productInfo.productCategory}</span>

                <img src={`http://localhost:5000/products/${productInfo.productImage}`} class="card-img-top w-50 h-50" alt="..." />
                <div class="card-body ">
                    <div className='d-flex justify-content-between'>
                        <h5 class="card-title">{productInfo.productName}</h5>
                        <h5 class="text-danger">NRP.{productInfo.productPrice}</h5>
                    </div>
                    <p class="card-text">{productInfo.productDescription.slice(0, 40)} ...</p>
                    <a href="#" class="btn btn-outline-dark w-100">View Product</a>
                </div>
            </div >
        </>
    )
}

export default ProductCard