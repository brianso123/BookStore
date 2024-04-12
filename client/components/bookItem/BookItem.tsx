import React, { useState } from "react";
import styled from "styled-components";
import EditBookModal from "../modals/editBook/EditBookModal";
import { useAppDispatch } from "../../stores/hooks";
import { deleteBook, Book } from "../../stores/BookListSlice";

interface BookItemProps {
  book: Book;
}

export default function BookItem({ book }: BookItemProps) {
  // for controlling the opening and closing of the edit modal
  const [openEditBookModal, setOpenEditBookModal] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  return (
    <BookContainer>
      {/* if the book item is clicked, open the modal  */}
      <BookInnerContainer onClick={() => setOpenEditBookModal(true)}>
        {/* only render the modal when needed */}
        {openEditBookModal ? (
          <EditBookModal book={book} setOpen={setOpenEditBookModal} />
        ) : (
          <></>
        )}
        <BookLeftContainer>
          <BookTitle>{book.name}</BookTitle>
          <BookCategory>{book.category}</BookCategory>
          <BookDesc>{book.desc}</BookDesc>
        </BookLeftContainer>
        <BookRightContainer>
          <PriceText>{"$" + book.price}</PriceText>
        </BookRightContainer>
      </BookInnerContainer>
      <DeleteButton onClick={DeleteBook}>Delete</DeleteButton>
    </BookContainer>
  );

  function DeleteBook() {
    dispatch(deleteBook(book));
  }
}

const BookContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
`;

const BookInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
`;

const BookLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  justify-content: center;
  align-items: flex-start;
`;

const BookRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  justify-content: center;
  align-items: center;
`;

const BookTitle = styled.p`
  font-size: 30px;
  font-family: sans-serif;
  margin: 0;
`;

const PriceText = styled.p`
  font-size: 30px;
  font-family: sans-serif;
  margin: 0;
`;

const BookCategory = styled.p`
  font-size: 15px;
  font-family: sans-serif;
  color: #555555;
  margin: 1px 0 10px 0;
`;

const BookDesc = styled.p`
  font-size: 15px;
  font-family: sans-serif;
  color: gray;
  margin: 0;
`;

const DeleteButton = styled.button`
  background-color: #e52b50;
  color: white;
  border: none;
  padding: 35px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 7px;
`;
