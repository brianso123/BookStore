import React, { useState } from "react";
import { useAppSelector } from "../stores/hooks";
import styled from "styled-components";
import BookItem from "../components/bookItem/BookItem";
import AddBookModal from "../components/modals/addBook/AddBookModal";

const Home = () => {
  const BookList = useAppSelector((state) => state.bookList);

  // control the open and close of the add book modal
  const [OpenAddBookModal, setOpenAddBookModal] = useState<boolean>(false);

  return (
    <Wrapper>
      {/* only open the add book modal when needed */}
      {OpenAddBookModal ? (
        <AddBookModal setOpen={setOpenAddBookModal} />
      ) : (
        <></>
      )}
      <Title>Book Store</Title>
      <AddBookButton setOpen={setOpenAddBookModal} />
      {BookList.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </Wrapper>
  );
};

export default Home;

interface AddBookButtonProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddBookButton: React.FC<AddBookButtonProps> = ({ setOpen }) => {
  return (
    <AddButton
      onClick={() => {
        setOpen(true);
      }}
    >
      Add New Book
    </AddButton>
  );
};

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
