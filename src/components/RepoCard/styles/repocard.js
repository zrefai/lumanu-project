import styled from "styled-components/macro"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    margin-bottom: 50px;
    max-width: 75vmin;
    min-width: 75vmin;
    padding: 15px;
    border-radius: 20px;
    border-width: 2px;
    border-color: #707070;
    border-style: solid;
    outline: none;
    cursor: pointer;
    box-shadow: 0px 3px 6px #cccccc;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 94%;
    min-width: 94%;
`

export const InfoHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 100%;
    min-width: 100%;
`

export const InfoHeaderText = styled.p`
    margin: 0px;
    margin-right: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
    overflow: hidden;
    font-size: min(20px,calc(7px + 2vh));
    color: #4E80F2;
    font-weight: bold;
`

export const InfoBodyContainer = styled.div`
    display: flex;
    margin-top: 10px;
    max-width: 100%;
    min-width: 100%;
`

export const InfoBodyText = styled.p`
    max-width: 100%;
    min-width: 100%;
    color: #707070;
    font-size: min(20px,calc(7px + 2vh));
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
    overflow: hidden;
    margin: 0px;
`

export const InfoFooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    max-width: 100%;
    min-width: 100%;
`

export const InfoFooterText = styled.p`
    margin: 0px;
    margin-right: 20px;
    color: #4E80F2;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
    overflow: hidden;
    font-size: min(20px,calc(7px + 2vh));
`

export const RemoveButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    max-width: 6%;
    min-width: 6%;
`
export const RemoveButton = styled.button`
    display: flex;
    font-size: min(15px,calc(7px + 2vh));
    font-weight: bold;
    color: red;
    background-color: white;
    border-radius: 30px;
    border-style: none;
    outline: none;
    cursor: pointer;

    &:hover {
        background-color: red;
        color: white;
    }

    &:active {
        background-color: #a6a6a6;
        color: white;
    }
`