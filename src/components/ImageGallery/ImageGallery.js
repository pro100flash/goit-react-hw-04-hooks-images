import S from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from "prop-types";

const ImageGallery = ({ pictures, onClick }) => {
  return (
    <ul className={S.ImageGallery}>
      {pictures.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
