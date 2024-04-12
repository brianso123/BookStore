import React from "react";
import styled from "styled-components";

interface LongInputFieldProps {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const LongInputField: React.FC<LongInputFieldProps> = ({
  label,
  value,
  setValue,
}) => {
  return (
    <Label>
      {label}
      <LongInput value={value} onChange={(e) => setValue(e.target.value)} />
    </Label>
  );
};

export default LongInputField;

const Label = styled.label`
  display: block;
  font-family: sans-serif;
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
