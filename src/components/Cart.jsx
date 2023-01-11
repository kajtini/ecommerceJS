function Cart() {
  return (
    <div className="absolute top-[130%] right-0 bg-white shadow-2xl rounded-lg min-w-[320px]">
      <div className="p-5">
        <p className="font-bold">Cart</p>
      </div>
      <hr className="" />
      <div className="flex flex-col items-center justify-center min-h-[150px]">
        <p className="font-bold text-neutral-dark-grayish ">
          Your cart is empty.
        </p>
      </div>
    </div>
  );
}

export default Cart;
