import ProductCard from "./ProductCard";

export default function ProductCardContainer({ products, setItemsInCart }) {
  const productsJsx = products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      setItemsInCart={setItemsInCart}
    />
  ));
  return (
    <>
      <h1>Discover Your Favorite Products</h1>
      {productsJsx}
    </>
  );
}
