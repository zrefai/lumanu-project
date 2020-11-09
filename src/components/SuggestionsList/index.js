import React from "react"
import { Container } from "./styles/suggestions"

export default function SuggestionsList({ children, ...otherProps }) {
    return <Container {...otherProps}>{children}</Container>
}

