import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../../apis/Api';


const AdminUpdate = () => {
    // get id from url
    const { id } = useParams();

    // get product information (Backend)
    useEffect(() => {
        getSingleProduct(id).then((res) => {

            console.log(res.data);
            setProductName(res.data.product.productName);
            setProductPrice(res.data.product.productPrice);
            setProductCategory(res.data.product.productCategory);
            setProductDescription(res.data.product.productDescription);
            setOldImage(res.data.product.productImage);

        }).catch((error) => {
            console.log(error)
        })
    }, [])


    // fill all the info in each fields

    // make a use state
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productDescription, setProductDescription] = useState('')

    // state for image
    const [productNewImage, setProductNewImage] = useState(null)
    const [previewNewImage, setPreviewNewImage] = useState(null)
    const [oldImage, setOldImage] = useState('')

    // image upload handler
    const handleImage = (event) => {
        const file = event.target.files[0]
        setProductNewImage(file) // for backend
        setPreviewNewImage(URL.createObjectURL(file))
    }








    return (
        <>
            <div className='container mt-3'>

                <h2>Update product for <span className='text-danger'>{productName}</span></h2>

                <div className='d-flex gap-3'>
                    <form action="">
                        <label htmlFor="">Product Name</label>
                        <input value={productName} onChange={(e) => setProductName(e.target.value)} className='form-control' type="text" placeholder='Enter your product name' />

                        <label className='mt-2' htmlFor="">Product Price</label>
                        <input value={productPrice} onChange={(e) => setProductPrice(e.target.value)} className='form-control' type="number" placeholder='Enter your product name' />

                        <label className='mt-2'>Choose category</label>
                        <select value={productCategory} onChange={(e) => setProductCategory(e.target.value)} className='form-control'>
                            <option value="plants">Plants</option>
                            <option value="electronics">Electronics</option>
                            <option value="gadgets">Gadgets</option>
                            <option value="furniture">Furniture</option>
                        </select>

                        <label className='mt-2'>Enter description</label>
                        <textarea value={productDescription} onChange={(e) => setProductDescription(e.target.value)} className='form-control'></textarea>

                        <label className='mt-2'>Choose product Image</label>
                        <input onChange={handleImage} type="file" className='form-control' />

                        <button className='btn btn-danger w-100 mt-2'>Update Product</button>

                    </form>
                    <div className='image section'>

                        <h6>Old Image Preview</h6>

                        <img src={`http://localhost:5000/products/${oldImage}`} height={'300px'} width={'300px'} className='img-fluid object-fit-cover rounded-4' alt='geda'></img>

                        {
                            previewNewImage && <div>
                                <h6>New Image Preview</h6>
                                <img src={previewNewImage} alt='geda' height={'300px'} width={'300px'} className='img-fluid object-fit-cover rounded-4'></img>
                            </div>
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default AdminUpdate

