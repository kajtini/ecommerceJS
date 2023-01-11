function Backdrop({ closeLightbox }) {
  return (
    <div
      className="fixed top-0 l;left-0 h-screen w-screen bg-black bg-opacity-75"
      onClick={closeLightbox}
    ></div>
  );
}

export default Backdrop;
