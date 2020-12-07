import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 12px;
`;

export const SuggestionText = styled.p`
  margin: 0px;
  margin-right: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: min(25px, calc(7px + 2vmin));
  color: #4e80f2;
`;

export const SuggestionAddButton = styled.button`
  position: absolute;
  right: 15px;
  font-size: min(30px, calc(7px + 2vmin));
  font-weight: bold;
  color: #5aff5a;
  background-color: white;
  border-radius: 20px;
  border-style: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #5aff5a;
    color: white;
  }

  &:active {
    background-color: white;
    color: #5aff5a;
  }

  &:disabled {
    background-color: #a6a6a6;
    color: white;
  }
`;
