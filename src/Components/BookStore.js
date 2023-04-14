import React from "react";
import { useState, useMemo } from "react";
import PopUpModel from "./PopUpModel";

const BookStore = ({ booksData }) => {
  const [isPopUp, setPopUp] = useState(false);
  const [bookOption, setBookOption] = useState({});

  const bookCards = useMemo(() => {
    return booksData.map((book) => {
      const formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      });
      const thumbnail =
        book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
      const title = book.volumeInfo.title;
      const subtitle = book.volumeInfo.subtitle;
      const price = book.saleInfo.listPrice && book.saleInfo.listPrice.amount;
      return (
        <div
          name="book-card"
          className=" w-[200px] h-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-800 m-5 cursor-pointer"
        >
          <div
            onClick={() => {
              setPopUp(true);
              setBookOption(book);
            }}
          >
            <img
              alt=""
              src={thumbnail}
              className="absolute h-[300px] w-[200px] rounded-lg opacity-10 hover:transition-opacity hover:opacity-100 "
            />
            <div className=" p-5 h-[300px] w-[200px]">
              <label className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </label>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <strong>Subtitle: </strong>
                {subtitle}
              </p>
              <div className="text-red-500 flex flex-row w-[50px] ">
                {price ? (
                  <label>
                    <strong>Price: </strong>
                    {formatter.format(price)}
                  </label>
                ) : (
                  <label>
                    <strong>Price:</strong> unvaliable
                  </label>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }, [booksData]);

  return (
    <div className="mt-10">
      <div className="grid grid-cols-6 h-fit">{bookCards}</div>
      {isPopUp && (
        <PopUpModel book={bookOption} onClose={() => setPopUp(false)} />
      )}
    </div>
  );
};

export default BookStore;
