import React from "react"
import { Container, Form, Input } from "./styles/search"

export default function Search({ children, ...otherProps }) {
    return <Container {...otherProps}>{children}</Container>
}

Search.Form = function SearchForm({ children, ...otherProps }) {
    return <Form {...otherProps}>{children}</Form>
}

Search.Input = function SearchInput({ children, ...otherProps}) {
    return <Input {...otherProps}>{children}</Input>
}

