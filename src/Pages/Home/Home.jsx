import Navbar from "../../Components/Navbar";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <body>
        <div class="card">
          <img src="product-image.jpg" alt="Product Image" class="card-image" />
          <div class="card-content">
            <h2 class="card-title">Product Name</h2>
            <p class="card-description">
              A brief description of the product goes here.
            </p>
            <p class="card-price">$19.99</p>
            <button class="card-button">Add to Cart</button>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Home;
