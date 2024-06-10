import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createProductApi, deleteProduct, getAllProducts } from "../../apis/Api";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
    //logic for get products
    //make a state to save (array format)
    const [products, setProducts] = useState([]);
    //hit api (get all products) automatically=> use effect (list of products)
    useEffect(() => {
        getAllProducts().then((res) => {
            setProducts(res.data.products);

        }).catch((err) => {
            console.log(err);
        })
    }, [])

    console.log(products)

    //table row ()




    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productCategory, setProductCategory] = useState("");

    //image state
    const [productImage, setProductImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);


    //function to upload and preview image
    const handleImageUpload = (event) => {
        //0 index- file, 1 index -name, 2- size
        const file = event.target.files[0]
        setProductImage(file)
        setPreviewImage(URL.createObjectURL(file))
    }
    //delete product
    const handleDelete = (id) => {
        const confirmDialogue = window.confirm("Are you sire u want to delete?")
        if (confirmDialogue) {
            //delete product
            deleteProduct(id).then((res) => {
                if (res.status === 201) {
                    toast.success(res.data.message)
                    window.location.reload()
                }
            }).catch((error) => {
                if (error.response.status === 500) {
                    toast.error(error.response.data.message)
                }
            })
        }

    }

    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(productName, productPrice, productCategory, productDescription, productImage)

        //make a logical form data

        const formData = new FormData()

        formData.append('productName', productName)
        formData.append('productDescription', productDescription)
        formData.append('productPrice', productPrice)
        formData.append('productCategory', productCategory)
        formData.append('productImage', productImage)

        createProductApi(formData).then((res) => {
            if (res.status === 201) {
                toast.success(res.data.message)
                window.location.reload()
            } else {
                toast.error("Something went wrong in frontend!")
            }
        }).catch((error) => {
            if (error.response) {
                if (error.response.status === 400) {
                    toast.error(error.response.data.message)
                } else if (error.response.status === 401) {
                    toast.error(error.response.data.message)
                }
            } else if (error.response.status === 500) {
                toast.error("Internal server error")
            } else {
                toast.error("No response")
            }
        })
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
                                        {/* Preview Image */}
                                        {
                                            previewImage && (
                                                <div className="mb-2 mt-2">
                                                    <img src={previewImage} alt="img" className="img-fluid rounded object-fit-cover" />
                                                </div>
                                            )
                                        }




                                    </form>

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button onClick={handleSubmit} type="button" class="btn btn-primary">Add Products</button>
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
                        {
                            products.map((oneProduct) => (
                                <tr>
                                    <td>
                                        <img height={40} width={40} alt="img" src={`http://localhost:5000/products/${oneProduct.productImage}`} />
                                    </td>
                                    <td>
                                        {oneProduct.productName}
                                    </td>
                                    <td>
                                        NRP. {oneProduct.productPrice}
                                    </td>
                                    <td>
                                        {oneProduct.productDescription}
                                    </td>
                                    <td>
                                        {oneProduct.productCategory}
                                    </td>
                                    <td>
                                        <div className='btn-group' role='group'>
                                            <Link to={`/admin/update/${oneProduct._id}`} className='btn btn-success'>Edit</Link>
                                            <button onClick={() => handleDelete(oneProduct._id)} className='btn btn-danger'>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>

            </div >
        </>
    )
}

export default AdminDashboard


// new page (Update product)
// Form (required fields) name, price, desc, category, old image, new image
// use state 7 -
// Fill the previous values
// Call the api  (single product)
// Backend
// Based on _id (Admin Dashboard)
// Transport '_id'  to upadte product
// recieve in updateproduct page
