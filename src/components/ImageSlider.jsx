import iconNext from "../assets/icons/icon-next.svg";
import iconPrevious from "../assets/icons/icon-previous.svg";

function ImageSlider({ images, handleClick, currentImage, openLightbox }) {
  return (
    <div>
      <div className="relative mb-7">
        <img
          className="max-h-[300px] md:max-h-[440px] md:rounded-2xl w-full object-cover cursor-pointer"
          src={currentImage?.path}
          alt="product image"
          onClick={openLightbox}
        />
        {/* That needs refactoring */}
        <div className=" w-[40px] h-[40px] bg-white translate-y-[-50%] flex flex-col justify-center items-center  absolute top-[50%] right-[4%] rounded-full cursor-pointer md:hidden ">
          <img src={iconNext} alt="icon next" />
        </div>

        <div className=" w-[40px] h-[40px] bg-white translate-y-[-50%] flex flex-col justify-center items-center  absolute top-[50%] left-[4%]  rounded-full cursor-pointer md:hidden ">
          <img src={iconPrevious} alt="icon next" />
        </div>
      </div>

      <ul className="md:flex items-center justify-between hidden">
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
  );
}

export default ImageSlider;
