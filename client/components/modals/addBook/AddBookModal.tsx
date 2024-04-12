import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../../stores/hooks";
import { addBook } from "../../../stores/BookListSlice";
import InputField from "../InputField";
import LongInputField from "../LongInputField";
import DropDownList from "../DropDownList";
import ModalWrapper from "../ModalWrapper";
import { isNumber } from "../../../utils/isNumber";

interface AddBookModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddBookModal: React.FC<AddBookModalProps> = ({ setOpen }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState<any>("Biography");
  const [desc, setDesc] = useState("");

  const dispatch = useAppDispatch();

  return (
    <ModalWrapper setOpen={setOpen}>
      <Title>Add New Book</Title>
      <DropDownList category={category} setCategory={setCategory} />
      <InputField label="Book Name:" value={name} setValue={setName} />
      <InputField label="Price:" value={price} setValue={setPrice} />
      <LongInputField label="Description:" value={desc} setValue={setDesc} />
      <AddButton onClick={addNewBook}>Add</AddButton>
    </ModalWrapper>
  );

  function addNewBook() {
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
    if (!isNumber(price)) {
      alert("please enter a positive number for price");
      return;
    }

    // add the book to our store
    dispatch(
      addBook({
        name: name,
        desc: desc,
        price: price,
        category: category,
        id: Math.random().toString(),
      })
    );

    // reset all the states for next use
    setPrice("");
    setDesc("");
    setName("");
    setCategory("Biography");
    setOpen(false);
  }
};

export default AddBookModal;

const AddButton = styled.button`
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
