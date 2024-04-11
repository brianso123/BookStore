import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../store/hooks";
import { addBook } from "../../slice/BookListSlice";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddBookModal: React.FC<Props> = ({ setOpen }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState<any>("Biography");
  const [desc, setDesc] = useState("");

  const dispatch = useAppDispatch();

  return (
    <Bg onClick={() => setOpen(false)}>
      <InnerWrapper onClick={(e) => e.stopPropagation()}>
        <h2>Add New Book</h2>
        <DropDownList category={category} setCategory={setCategory} />
        <InputField label="Book Name:" value={name} setValue={setName} />
        <InputField label="Price:" value={price} setValue={setPrice} />
        <LongInputField label="Description:" value={desc} setValue={setDesc} />
        <AddButton onClick={addMyBook}>Add</AddButton>
      </InnerWrapper>
    </Bg>
  );

  function addMyBook() {
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
      addBook({
        name: name,
        desc: desc,
        price: price,
        category: category,
        id: Math.random().toString(),
      })
    );

    setPrice("");
    setDesc("");
    setName("");
    setCategory("Biography");
    setOpen(false);
  }
};

export default AddBookModal;

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
      <LongInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
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

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 95%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const LongInput = styled.textarea`
  width: 95%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  height: 40px;
  resize: none;
`;

const DropDown = styled.div`
  margin-bottom: 10px;
`;
