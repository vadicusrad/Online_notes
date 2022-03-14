import React from 'react';
import styled from 'styled-components';

const MessageBody = styled.div`
  width: 300px;
  height: 70px;
  background: #b8efb8;
  position: absolute;
  bottom: 50px;
  left: 20px;
  display: flex;
  align-items: center;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  // &:after {
  //   content: '';
  //   width: 2px;
  //   height: 12px;
  //   background: grey;
  //   top: 5px;
  //   right: 10px;
  //   transform: rotate(45deg);
  //   position: absolute;
  // }
  // &:before {
  //   content: '';
  //   width: 2px;
  //   height: 12px;
  //   background: grey;
  //   top: 5px;
  //   right: 10px;
  //   transform: rotate(-45deg);
  //   position: absolute;
  // }
`;

function PopUpMessage({ handleEditPopUp, messageText }) {
  return (
    <MessageBody
      onClick={() => handleEditPopUp({ active: false, message: '' })}
    >
      {messageText}
    </MessageBody>
  );
}

export default PopUpMessage;
