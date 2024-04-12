import React from "react";
import styled from "styled-components";

interface DropDownListProps {
  category: any;
  setCategory: React.Dispatch<React.SetStateAction<any>>;
}

const DropDownList: React.FC<DropDownListProps> = ({
  category,
  setCategory,
}) => {
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
};

export default DropDownList;

const Label = styled.label`
  display: block;
  font-family: sans-serif;
  margin: 0;
`;

const DropDown = styled.div`
  margin-bottom: 20px;
`;
