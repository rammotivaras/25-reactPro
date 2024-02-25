import { useEffect, useState } from "react";
import "./style.css";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
// eslint-disable-next-line react/prop-types, no-unused-vars
const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await res.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  console.log(images);
  if (loading) {
    <div>Loading Data Please wait !</div>;
  }
  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicator">
        {images && images.length
          ? images.map((_, index) => (
              <button onClick={()=> setCurrentSlide(index)} key={index} className={currentSlide === index ? 'current-indicator' : 'current-indicator inactive-indicator'}></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
