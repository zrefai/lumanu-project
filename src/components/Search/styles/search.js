import styled from "styled-components/macro"

export const Container = styled.div`
    margin-top: 50px;
    justify-content: center;
`

export const Form = styled.form``

export const Input = styled.input`
    justify-content: center;
    font-size: min(20px,calc(7px + 2vmin));
    max-width: 65vmin;
    min-width: 65vmin;
    padding: 12px 12px 12px 22px;
    border-radius: 20px;
    border-width: 2px;
    border-style: solid;
    border-color: #707070;
    outline: none;
    box-shadow: 0px 3px 6px #cccccc;

    &::placeholder {
        font-style: italic;
    }
`