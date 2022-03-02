import React from 'react';
import styled from 'styled-components';
import HeartIcon from '../icons/Heart';
import Edit from '../icons/Edit';
import Delete from '../icons/Delete';

const ButtonContainer = styled.div`
  height: 50px;
  width: 100%;
  border-top: solid 1px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
`;

const ButtonWrapper = styled.span`
  width: 100px;
  display: flex;
  justify-content: space-around;
`;

function PostButtons({ id, changeState, posts }) {
  return (
    <ButtonContainer>
      <ButtonWrapper>
        <Edit width='25' height='25' fill='black' />
        <Delete
          id={id}
          posts={posts}
          changeState={changeState}
          width='25'
          height='25'
          fill='black'
        />
      </ButtonWrapper>
      <HeartIcon width='25' height='25' fill='grey' />
    </ButtonContainer>
  );
}

export default PostButtons;
