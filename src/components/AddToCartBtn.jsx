import cart from "../assets/icons/icon-cart.svg";

function AddToCartBtn() {
  return (
    <button
      className="flex items-center justify-center gap-3 bg-primary text-white w-full py-4 
    rounded-xl cursor-pointer "
    >
      <img className="max-h-4" src={cart} alt="cart icon" />
      <p className="font-bold">Add to cart</p>
    </button>
  );
}

export default AddToCartBtn;
