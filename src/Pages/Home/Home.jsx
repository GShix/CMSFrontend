
import axios from "axios";
import Navbar from "../../Components/Navbar";

import "./Home.css";
import { useEffect } from "react";
const Home = () => {

  // API call
  // const getBlogs = async () =>{
  //   const response = await axioss.get('http://localhost:2000/blogs');
  //   console.log(response)
  // }
  // useEffect(()=>{
  //   fetchBlogs();
  // },[])
  
  return (
    <div>
      <Navbar />
        <div className="card">
          <img src="" alt="Product Image" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">Product Name</h2>
            <p className="card-description">
              A brief description of the product goes here.
            </p>
            <p className="card-price">$19.99</p>
            <button className="card-button">Add to Cart</button>
          </div>
        </div>
    </div>
  )
  }

export default Home;
