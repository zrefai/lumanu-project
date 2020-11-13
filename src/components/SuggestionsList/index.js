import React from "react"
import { Container, ErrorText } from "./styles/suggestionslist"
import Suggestion from "../Suggestion"

function List({ children, ...otherProps }) {
    return <Container {...otherProps}>{children}</Container>
}

List.Error = function SuggestionListError({children, ...otherProps}) {
    return <ErrorText {...otherProps}>{children}</ErrorText>
}

const SuggestionsList = ({suggestions, error}) => {
    return (
        suggestions.length && !error ? 
            <List>
                {suggestions.map((suggestion, i) => <Suggestion key={i} repo={suggestion}/>)}
            </List> : 
            <List>
                <List.Error>No repositories for this search or an error occured</List.Error>
            </List>
    )
}

export default SuggestionsList