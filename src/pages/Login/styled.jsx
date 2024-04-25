import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.backgroundImg});
  background-position: center;
  background-size: cover;
  overflow: hidden;
`;

export const TitlewLine = styled.h3`
  font-family: '';
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  justify-content: center;

  /* &::after {
    content: '';
    height: 1px;
    width: 100%;
    background: #fff;
    max-width: 222px;
  } */
`;
