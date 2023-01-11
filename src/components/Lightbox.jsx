import Backdrop from "./Backdrop";
import close from "../assets/icons/icon-close.svg";
import iconNext from "../assets/icons/icon-next.svg";
import iconPrevious from "../assets/icons/icon-previous.svg";

function Lightbox({ images, handleClick, currentImage, closeLightbox }) {
  return (
    <div>
      <Backdrop closeLightbox={closeLightbox} />
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="relative">
          <div className=" w-[60px] h-[60px] bg-white translate-y-[-50%] flex flex-col justify-center items-center  absolute top-[50%] rounded-full cursor-pointer right-0 translate-x-[50%]">
            <img src={iconNext} alt="icon next" />
          </div>

          <div className=" w-[60px] h-[60px] bg-white translate-y-[-50%] flex flex-col justify-center items-center  absolute top-[50%] translate-x-[-50%] rounded-full cursor-pointer ">
            <img src={iconPrevious} alt="icon next" />
          </div>
          <img
            className="absolute right-0 top-[-8%] h-8 cursor-pointer"
            src={close}
            alt="close icon"
            onClick={closeLightbox}
          />
          <img
            className="max-h-[650px] rounded-xl mb-6"
            src={currentImage?.path}
            alt="product image"
          />
        </div>

        <ul className="flex gap-10 justify-center">
          {images.map((image) => (
            <li
              key={image.id}
              className={`relative ${
                image.isSelected &&
                "before:absolute before:top-0 before:left-0 before:bg-primary-pale before:w-full before:rounded-xl before:bg-opacity-75 before:h-full before:border-solid before:border-primary before:border-[2px] "
              } cursor-pointer`}
              onClick={() => handleClick(image.id)}
            >
              <img
                className="max-h-24 rounded-xl "
                src={image.path}
                alt="product image"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Lightbox;
