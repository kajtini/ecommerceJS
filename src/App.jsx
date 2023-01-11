import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import MainInfo from "./components/MainInfo";
import Lightbox from "./components/Lightbox";
import { AmountProvider } from "./context/AmountContext";
import { useState, useEffect } from "react";
import product1 from "./assets/images/image-product-1.jpg";
import product2 from "./assets/images/image-product-2.jpg";
import product3 from "./assets/images/image-product-3.jpg";
import product4 from "./assets/images/image-product-4.jpg";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([
    {
      id: 1,
      path: product1,
      isSelected: true,
    },
    {
      id: 2,
      path: product2,
      isSelected: false,
    },
    {
      id: 3,
      path: product3,
      isSelected: false,
    },
    {
      id: 4,
      path: product4,
      isSelected: false,
    },
  ]);

  const [currentImage, setCurrentImage] = useState(null);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  function handleClick(id) {
    setImages((prevImages) =>
      prevImages.map((image) => {
        return image.id === id
          ? { ...image, isSelected: true }
          : { ...image, isSelected: false };
      })
    );
  }

  function toggleCart() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function closeLightbox() {
    setLightboxIsOpen(false);
  }

  function openLightbox() {
    setLightboxIsOpen(true);
  }

  useEffect(() => {
    setCurrentImage(...images.filter((image) => image.isSelected));
  }, [images]);

  return (
    <div className="">
      <div className="max-w-[1440px] mx-auto min-h-screen ">
        <AmountProvider>
          <Navbar handleCartClick={toggleCart} isOpen={isOpen} />
          <div className="md:flex md:items-center md:justify-center gap-24">
            <ImageSlider
              images={images}
              handleClick={handleClick}
              currentImage={currentImage}
              openLightbox={openLightbox}
            />
            <MainInfo />
          </div>
        </AmountProvider>
        {lightboxIsOpen && (
          <Lightbox
            images={images}
            handleClick={handleClick}
            currentImage={currentImage}
            closeLightbox={closeLightbox}
          />
        )}
      </div>
    </div>
  );
}

export default App;
