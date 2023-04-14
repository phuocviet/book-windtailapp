import React from "react";
import { AiOutlineClose } from "react-icons/ai";
const PopUpModel = ({ book, onClose }) => {
  const link = book.volumeInfo.canonicalVolumeLink;
  const thumbnail =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
  const title = book.volumeInfo.title;
  const subtitle = book.volumeInfo.subtitle;
  const readbook = () => {
    window.location.href = link;
  };
  return (
    <div
      name="info-container"
      className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm 
    flex justify-center items-center cursor-default"
    >
      <div
        name="book-info"
        className="bg-white rounded w-[400px] max-h-[400px] grid grid-cols-2 grid-rows-1"
      >
        <button onClick={onClose} className="cursor-pointer p-3 w-9 h-9">
          <AiOutlineClose />
        </button>
        <img alt="" src={thumbnail} className="relative h-[400px] " />
        <div className="top-0 l-0">
          <h3 className="font-bold">{title}</h3>
          <h4>{subtitle}</h4>
          <button className="bg-green-700 " onClick={readbook}>
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpModel;
