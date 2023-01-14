import { CSSProperties } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 13px;

  width: 875px;
  height: 498px;

  background: #d9cdf7;
  border-radius: 10px;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 449px;
  height: 222.96px;
`;

export const IconButton = styled.button`
  position: absolute;
  top: 0;
  right: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;
`;

export const icon360: CSSProperties = {
  width: 33,
  height: 22.47,
};

export const iconCancel: CSSProperties = {
  width: 16,
  height: 16,
};

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  h1 {
    font-family: 'Crimson Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 100%;
    color: #271a45;
  }

  h2 {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #271a45;
  }

  h3 {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 100%;
    color: #271a45;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  border: 0.5px solid #271a45;
  border-radius: 999px;

  background-color: transparent;

  span {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: #271a45;
  }
`;
