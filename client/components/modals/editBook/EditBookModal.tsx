import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../../stores/hooks";
import { updateBook, Book } from "../../../stores/BookListSlice";
import ModalWrapper from "../ModalWrapper";
import DropDownList from "../DropDownList";
import InputField from "../InputField";
import LongInputField from "../LongInputField";
import { isNumber } from "../../../utils/isNumber";

interface Props {
  book: Book | undefined;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditBookModal: React.FC<Props> = ({ setOpen, book }) => {
  const [name, setName] = useState(book?.name ?? "");
  const [price, setPrice] = useState(book?.price ?? "");
  const [category, setCategory] = useState<any>(book?.category ?? "Biography");
  const [desc, setDesc] = useState(book?.desc ?? "");

  const dispatch = useAppDispatch();

  return (
    <ModalWrapper setOpen={setOpen}>
      <Title>Edit Book</Title>
      <DropDownList category={category} setCategory={setCategory} />
      <InputField label="Book Name:" value={name} setValue={setName} />
      <InputField label="Price:" value={price} setValue={setPrice} />
      <LongInputField label="Description:" value={desc} setValue={setDesc} />
      <SaveButton onClick={UpdateMyBook}>Save</SaveButton>
    </ModalWrapper>
  );

  function UpdateMyBook() {

    // check if all the fields are correctly entered
    if (name == "") {
      alert("please enter a name for the book");
      return;
    }
    if (price == "") {
      alert("please enter a price");
      return;
    }
    if (desc == "") {
      alert("please enter a description");
      return;
    }

    // check if the price is a valid positve number
    if (!isNumber(price)){
      alert("please enter a positive number for price");
      return;
    }

    // update all the fields of the book
    dispatch(
      updateBook({
        name: name,
        desc: desc,
        price: price,
        category: category,
        // id is always the same
        id: book!.id,
      })
    );

    setOpen(false);
  }
};

export default EditBookModal;

const SaveButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 5px;
`;

const Title = styled.h2`
  font-family: sans-serif;
`;
