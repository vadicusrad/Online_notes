import React from 'react';
import styled from 'styled-components';

const MessageBody = styled.div`
  width: 300px;
  height: 70px;
  position: absolute;
  bottom: 50px;
  left: 20px;
  display: flex;
  align-items: center;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
`;

function PopUpMessage({ handleEditPopUp, messageText, color }) {
  return (
    <MessageBody
      style={{ background: color }}
      onClick={() => handleEditPopUp({ active: false, message: '' })}
    >
      {messageText}
    </MessageBody>
  );
}

export default PopUpMessage;
