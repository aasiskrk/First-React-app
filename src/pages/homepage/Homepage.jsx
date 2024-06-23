import ProductCard from "../../components/ProductCard";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllProducts } from "../../apis/Api";

const Homepage = () => {
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




  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://images.pexels.com/photos/1841591/pexels-photo-1841591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Light Up light up sketchers</h5>
              <p>I like my sketchers you like me mmy gucci shoes</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/840185/pexels-photo-840185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Laptop</h5>
              <p>Nice keyboard 30% off on all of it</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/11820506/pexels-photo-11820506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Yeezy</h5>
              <p>Beautiful morning, kanye west</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container mt-3">
        <h2>Availabe Products</h2>
        {/* dynamic card for specific product */}
        <div class="row row-cols-1 row-cols-md-3 g-4" >

          {
            products.map((singleProduct) => (
              <div class="col">
                <ProductCard productInfo={singleProduct} color={'green'} />
              </div>
            ))
          }


        </div>
      </div>



    </>
  );
};

export default Homepage;
