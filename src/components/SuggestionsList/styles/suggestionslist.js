import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 55vmin;
  min-width: 55vmin;
  background-color: white;
  padding: 0px 12px 12px 12px;
  border-radius: 0px 0px 20px 20px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0px 3px 6px #cccccc;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: min(25px, calc(7px + 2vmin));
  margin-top: 15px;
  margin-bottom: 0px;
`;
