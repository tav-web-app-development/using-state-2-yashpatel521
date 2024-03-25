import { useState } from "react";

export default function ProductCard({ product, setItemsInCart }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const handleAddToCartClick = () => {
    setItemsInCart((i) => (i += 1));
  };
  return (
    <>
      <div id="image-carousel">
        <img
          src={product.imageUrls[currentImageIndex] + " " + product.name}
          alt={product.name}
        />
        <br />
        <button
          disabled={currentImageIndex >= product.imageUrls.length - 1}
          onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
        >
          Next
        </button>
        <button
          disabled={currentImageIndex <= 0}
          onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
        >
          Previous
        </button>
      </div>

      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={() => setShowDescription(!showDescription)}>
        {showDescription ? "Hide " : "Show"} Description
      </button>
      <div className="price">${product.price}</div>

      <button onClick={handleAddToCartClick}>Add to Cart</button>
      <br />
      {!product.isInStock && "The product is out of stock"}
      <br />
    </>
  );
}
