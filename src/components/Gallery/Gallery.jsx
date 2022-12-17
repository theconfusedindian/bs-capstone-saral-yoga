// import of images
import img1 from "../../assets/images/gallery/1.jpg";
import img2 from "../../assets/images/gallery/2.jpg";
import img3 from "../../assets/images/gallery/3.jpg";
import img4 from "../../assets/images/gallery/4.jpg";
import img5 from "../../assets/images/gallery/5.jpg";
import img6 from "../../assets/images/gallery/6.jpg";
import img7 from "../../assets/images/gallery/7.jpg";
import img8 from "../../assets/images/gallery/8.jpg";
import img9 from "../../assets/images/gallery/9.jpg";

import "./Gallery.scss";

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery__container">
        <img src={img1} alt="galley_img" className="gallery__container--img" />
      </div>
      <div className="gallery__container">
        <img src={img2} alt="galley_img" className="gallery__container--img" />
      </div>
      <div className="gallery__container">
        <img src={img3} alt="galley_img" className="gallery__container--img" />
      </div>
      <div className="gallery__container">
        <img src={img4} alt="galley_img" className="gallery__container--img" />
      </div>
      <div className="gallery__container">
        <img src={img5} alt="galley_img" className="gallery__container--img" />
      </div>
      <div className="gallery__container">
        <img src={img6} alt="galley_img" className="gallery__container--img" />
      </div>
      <div className="gallery__container">
        <img src={img7} alt="galley_img" className="gallery__container--img" />
      </div>
      <div className="gallery__container">
        <img src={img8} alt="galley_img" className="gallery__container--img" />
      </div>
      <div className="gallery__container">
        <img src={img9} alt="galley_img" className="gallery__container--img" />
      </div>
    </div>
  );
}
