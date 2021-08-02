import PropTypes from "prop-types";
import S from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onClick }) => (
  <li className={S.ImageGalleryItem}>
    <img
      src={webformatURL}
      alt={tags}
      className={S.ImageGalleryItemImage}
      onClick={() => onClick({ largeImageURL, tags })}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
