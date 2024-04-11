import React, { useState } from "react";
import { useAppSelector } from "./store/hooks";
import styled from "styled-components";
import BookDisplay from "./components/Book";
import AddBookModal from "./components/Modals/AddBookModal";

function Home() {
  const BookList = useAppSelector((state) => state.bookList);

  const [isOpenAdd, setIsOpenAdd] = useState<boolean>(false);

  return (
    <Wrapper>
      {isOpenAdd ? <AddBookModal setOpen={setIsOpenAdd} /> : <></>}
      <Title>Book Store</Title>
      <AddButton
        onClick={() => {
          setIsOpenAdd(true);
        }}
      >
        Add New Book
      </AddButton>
      {BookList.map((book) => (
        <BookDisplay key={book.id} book={book} />
      ))}
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  margin: 5%;
  overflow: scroll;
`;

const Title = styled.p`
  font-size: 40px;
  font-family: sans-serif;
  margin: 0 0 45px 0;
`;

const AddButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 15px 80px;
  margin-bottom: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 7px;
`;
