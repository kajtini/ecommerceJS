import Price from "./Price";
import Quantity from "./Quantity";
import AddToCardBtn from "./AddToCartBtn";

function MainInfo() {
  return (
    <div className="font-primary p-5">
      <div className="mb-5">
        <p className="uppercase text-[10px] font-bold text-primary tracking-widest mb-2 md:text-[14px] md:mb-4">
          Sneaker Company
        </p>
        <h1 className="font-bold text-2xl md:text-5xl md:max-w-md max-w-xs mb-2 md:mb-9">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-sm text-neutral-dark-grayish max-w-xs md:max-w-md md:text-base md:leading-[28px]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
      </div>
      <Price />
      <div className="md:flex md:items-center gap-3">
        <div className="flex-grow-[1]">
          <Quantity />
        </div>
        <div className="flex-grow-[2]">
          <AddToCardBtn />
        </div>
      </div>
    </div>
  );
}

export default MainInfo;
