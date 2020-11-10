import React from "react"
import { Container, SuggestionAddButton, SuggestionText } from "./styles/suggestion"

function Component({ children, ...otherProps}) {
    return <Container {...otherProps}>{children}</Container>
}

Component.Text = function Text({ children, ...otherProps}) {
    return <SuggestionText {...otherProps}>{children}</SuggestionText>
}

Component.Button = function Button({children, ...otherProps}) {
    return <SuggestionAddButton {...otherProps}>{children}</SuggestionAddButton>
}

export const Suggestion = ({repoName, version}) => {
    
    /* Need redux and custom hooks to grab data and create an 
    entry into the cache */

    const handleAdd = (e) => {
        e.preventDefault()
        console.log("Added:", repoName, version)
    }

    return ( 
        <Component>
            <Component.Text>
                {repoName}
            </Component.Text>
            <Component.Text>
                {version}
            </Component.Text>
            <Component.Button onClick={(e) => handleAdd(e)}>+</Component.Button>
        </Component>
    )
}

export default Suggestion