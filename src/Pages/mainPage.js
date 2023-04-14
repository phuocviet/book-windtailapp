import React from "react";
import { useState } from "react";
import BookStore from "../Components/BookStore";
import SearchInput from "../Components/SearchInput";
import axios from "axios";

const MainPage = () => {
  const [booksData, setData] = useState([]);
  const searchBooks = async (response) => {
    const onSearch = response;
    const api = `https://www.googleapis.com/books/v1/volumes?q=${onSearch}&key=AIzaSyAIy3IA554n_L1Gn27mJj05Xm--1bisZ8A&maxResults=20`;
    await axios
      .get(api)
      // .then(res => console.log(res.data.items))
      .then((res) => setData(res.data.items))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>
        <div className="">
          <img
            className="absolute w-full h-[600px] -z-1"
            src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8M
            HxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="bg-img"
          />
        </div>
        <div className="absolute w-full h-[600px] bg-black opacity-80 z-0 "></div>
        <div className="relative items-center z-1 text-white w-full text-center ">
          <h1 className="pt-[200px] pb-[50px] font-bold">
            Knownlege is key to success
          </h1>
        </div>
        <SearchInput searchValue={searchBooks} />
        <div className="relative h-[300px]"></div>
      </div>
      <div className=" w-full  z-2">
        {booksData && <BookStore booksData={booksData} />}
      </div>
    </div>
  );
};
export default MainPage;
