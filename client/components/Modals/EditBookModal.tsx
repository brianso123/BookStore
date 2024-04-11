import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../store/hooks";
import { updateBook, Book } from "../../slice/BookListSlice";

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
    <Bg
      onClick={(e) => {
        e.stopPropagation();
        setOpen(false);
      }}
    >
      <InnerWrapper onClick={(e) => e.stopPropagation()}>
        <h2>Edit Book</h2>
        <DropDownList category={category} setCategory={setCategory} />
        <InputField label="Book Name:" value={name} setValue={setName} />
        <InputField label="Price:" value={price} setValue={setPrice} />
        <LongInputField label="Description:" value={desc} setValue={setDesc} />
        <SaveButton onClick={UpdateMyBook}>Save</SaveButton>
      </InnerWrapper>
    </Bg>
  );

  function UpdateMyBook() {
    if (name == "") {
      alert("please enter all the information first");
      return;
    }
    if (price == "") {
      alert("please enter all the information first");
      return;
    }
    if (desc == "") {
      alert("please enter all the information first");
      return;
    }

    dispatch(
      updateBook({
        name: name,
        desc: desc,
        price: price,
        category: category,
        id: book!.id,
      })
    );

    setOpen(false);
  }
};

export default EditBookModal;

interface DropDownProps {
  category: any;
  setCategory: React.Dispatch<React.SetStateAction<any>>;
}

function DropDownList({ category, setCategory }: DropDownProps) {
  return (
    <DropDown>
      <Label>Category</Label>
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value="Biography">Biography</option>
        <option value="Classics">Classics</option>
        <option value="Philosophy">Philosophy</option>
        <option value="Fiction">Fiction</option>
      </select>
    </DropDown>
  );
}

interface InputFieldProps {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

function InputField({ label, value, setValue }: InputFieldProps) {
  return (
    <Label>
      {label}
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Label>
  );
}

function LongInputField({ label, value, setValue }: InputFieldProps) {
  return (
    <Label>
      {label}
      <LongInput value={value} onChange={(e) => setValue(e.target.value)} />
    </Label>
  );
}

const Bg = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const InnerWrapper = styled.div`
  background-color: white;
  z-index: 20;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 5px;
  width: 40%;
`;

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
const Label = styled.label`
  display: block;
  font-family: sans-serif;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 95%;
  padding: 5px;
  font-family: sans-serif;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const LongInput = styled.textarea`
  width: 95%;
  padding: 5px;
  font-family: sans-serif;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  height: 40px;
  resize: none;
`;

const DropDown = styled.div`
  margin-bottom: 10px;
`;
