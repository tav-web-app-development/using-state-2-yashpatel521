export default function NavBar({ user, checkout, setCheckout } = false) {
  return (
    <>
      {user ? (
        <span>{`Welcome ${user.firstName} ${user.lastName} `}</span>
      ) : (
        <a href="#">Login </a>
      )}
      <a href="#home">Home </a>
      <a href="#home">Laptops </a>
      <a href="#contact">Contact </a>
      <a href="#about">About </a>
      <button>
        <span>{`${user.itemsInCart} item in your cart`}</span>
      </button>
      <button
        onClick={() => {
          setCheckout((val) => !val);
        }}
      >
        {checkout ? "Close" : "checkout"}
      </button>
    </>
  );
}
