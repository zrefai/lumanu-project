import styled from "styled-components/macro"

export const Container = styled.div`
    display: flex;
    margin-top: 25px;
    font-size: min(25px,calc(7px + 2vmin));
    line-height: 1.6;
    font-weight: bold;
    color: #666666;
    flex-direction: column;
    width: 100%;
`
export const RepoInfoTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const RepoInfoText = styled.p`
    flex: 1;
    margin: 0px;
    font-weight: bold;
    margin-top: 20px;
    font-size: min(25px,calc(7px + 2vmin));
`

export const ReleaseInfoContainer = styled.div`
    min-width: 80vmin;
    max-width: 80vmin;
    line-height: normal;
    overflow-y: scroll;
    font-weight: normal;
    font-size: min(20px,calc(7px + 2vmin));
    padding-left: 20px;
    padding-right: 20px;
`

export const ReleaseInfoText = styled.p`
    margin: 0px;
    font-size: min(20px,calc(7px + 2vmin));
    color: #4E80F2;
`