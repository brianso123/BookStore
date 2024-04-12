import React, { ReactNode } from "react";
import styled from "styled-components";

interface ModalWrapperProps {
  children: ReactNode;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// the wrapper for modals, shared by all the modals
const ModalWrapper: React.FC<ModalWrapperProps> = ({ children, setOpen }) => {
  return (
    // when the dark surrounding is clicked, exit the modal
    <Bg
      onClick={(e) => {
        e.stopPropagation();
        setOpen(false);
      }}
    >
      {/* stop propagation when the inner modal is clicked so that it doesnt close */}
      <InnerWrapper onClick={(e) => e.stopPropagation()}>
        {children}
      </InnerWrapper>
    </Bg>
  );
};

export default ModalWrapper;

const Bg = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: default;
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
