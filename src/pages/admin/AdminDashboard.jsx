import React, { useState } from "react";

const AdminDashboard = () => {
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productImage, setProductImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    const handleImageUpload = (event) => {
        const file = event.target.files[0]
        setProductImage(file)
        setPreviewImage(URL.createObjectURL(file))
    }
    return (
        <>
            <div className='container mt-5'>
                <div className='d-flex justify-content-between'>
                    <h3>Admin Dashboard</h3>
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add Products
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create a new product</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action=''>
                                        <label htmlFor=''>Product Name</label>
                                        <input onChange={(e) => setProductName(e.target.value)} type='text' className='form-control' placeholder='Enter Product Name' />

                                        <label htmlFor='' className='mt-2'>Product Price</label>
                                        <input onChange={(e) => setProductPrice(e.target.value)} type='number' className='form-control' placeholder='Enter Product Price' />


                                        <div className='mt-2'>
                                            <label htmlFor=''>Product Category</label>
                                            <select onChange={(e) => setProductCategory(e.target.value)} className='form-control'>
                                                <option value="plants">Plants</option>
                                                <option value="gadgets">Gadgets</option>
                                                <option value="geda">Geda</option>
                                                <option value="electronics">Electronics</option>
                                            </select>
                                        </div>

                                        <label htmlFor='' className='mt-2'>Product Desc</label>
                                        <textarea onChange={(e) => setProductDescription(e.target.value)} type='text' className='form-control' placeholder='Describe....' />

                                        <label htmlFor='' className='mt-2'>Product Image</label>
                                        <input onChange={handleImageUpload} type='file' className='form-control' />
                                        {
                                            previewImage && (
                                                <div className="mb-2">
                                                    <img src={previewImage} className="img-fluid"></img>
                                                </div>
                                            )
                                        }




                                    </form>

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Add Products</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <button className='btn btn-danger'>Add Products</button> */}
                </div>
                <table className='table mt-2 justify-content-between'>
                    <thead className='table-dark'>
                        <tr>
                            <th>
                                Product Image
                            </th>
                            <th>
                                Product Name
                            </th>
                            <th>
                                Product Price
                            </th>
                            <th>
                                Product Description
                            </th>
                            <th>
                                Product Category
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img height={40} width={40} src='https://picsum.photos/50' />
                            </td>
                            <td>
                                Flower
                            </td>
                            <td>
                                112
                            </td>
                            <td>
                                Flower for your mom
                            </td>
                            <td>
                                Flower
                            </td>
                            <td>
                                <div className='btn-group' role='group'>
                                    <button className='btn btn-success'>Edit</button>
                                    <button className='btn btn-danger'>Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>

            </div >
        </>
    )
}

export default AdminDashboard