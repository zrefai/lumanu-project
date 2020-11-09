import styled from "styled-components/macro"

export const Container = styled.div`
    margin-top: 50px;
    justify-content: center;
`

export const Form = styled.form``

export const Input = styled.input`
    justify-content: center;
    font-size: min(25px,calc(7px + 2vmin));
    width: 50vw;
    max-width: 750px;
    padding: 12px 12px 12px 22px;
    border-radius: 20px;
    border-width: 1px;
    border-color: #707070;
    outline: none;
    box-shadow: 0px 3px 6px #cccccc;

    &::placeholder {
        font-style: italic;
    }
`