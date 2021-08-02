import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Loader from "react-loader-spinner";
import ApiService from "./services/ApiService";
import ImageGallery from "./components/ImageGallery";
import Searchbar from "./components/Searchbar";
import Button from "./components/Button";
import Modal from "./components/Modal";

import S from "./App.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [pictures, setPictures] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    fetchImages();
  }, [searchQuery]);

  const onChangeQuery = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    setPictures([]);
  };

  const onModal = ({ largeImageURL, tags }) => {
    setLargeImageURL(largeImageURL);
    setTags(tags);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const fetchImages = () => {
    setIsLoading(true);

    const options = { searchQuery, currentPage };

    ApiService.fetchImages(options)
      .then((images) => {
        if (images.length === 0) {
          toast.info("Try again!", {
            className: S.toaster,
          });
        }
        setPictures([...pictures, ...images]);
        setCurrentPage(currentPage + 1);
      })
      .then(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch(() => {
        toast.info("Try again!", {
          className: S.toaster,
        });
      })
      .finally(() => setIsLoading(false));
  };

  const shouldRenderLoadMoreButton = pictures.length > 0 && !isLoading;

  return (
    <div className={S.App}>
      <Searchbar onSubmit={onChangeQuery} />
      <ImageGallery pictures={pictures} onClick={onModal} />

      {shouldRenderLoadMoreButton && <Button onClick={fetchImages} />}

      {isLoading && (
        <Loader
          type="BallTriangle"
          color="#00BFFF"
          height={200}
          width={200}
          className={S.Loader}
        />
      )}

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
      <ToastContainer autoClose={3000} />
    </div>
  );
}
