import React from "react"
import { Container, ErrorText } from "./styles/suggestionslist"

export default function SuggestionsList({ children, ...otherProps }) {
    return <Container {...otherProps}>{children}</Container>
}

SuggestionsList.Error = function SuggestionListError({children, ...otherProps}) {
    return <ErrorText {...otherProps}>{children}</ErrorText>
}