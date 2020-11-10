import React from "react"
import { Container, SuggestionAddButton, SuggestionText } from "./styles/suggestion"
import useRepoVersion from "../../hooks/useRepoVersion"

function Component({ children, ...otherProps}) {
    return <Container {...otherProps}>{children}</Container>
}

Component.Text = function Text({ children, ...otherProps}) {
    return <SuggestionText {...otherProps}>{children}</SuggestionText>
}

Component.Button = function Button({children, ...otherProps}) {
    return <SuggestionAddButton {...otherProps}>{children}</SuggestionAddButton>
}

export const Suggestion = ({repo}) => {
    const {repoVersionInfo, error} = useRepoVersion(repo.owner.login, repo.name)

    const handleAdd = (e) => {
        e.preventDefault()
        console.log("Added:", repo.name, repoVersionInfo[0])
    }

    const renderSuggestion = () => {
        return (
            <Component>
                <Component.Text style={{width: '60%'}}>
                    {repo.full_name}
                </Component.Text>
                {repoVersionInfo.length ? 
                    <Component.Text style={{width: '25%'}}>
                        {repoVersionInfo[0].tag_name}
                    </Component.Text> :
                    <Component.Text style={{width: '25%'}}>
                        N/A
                    </Component.Text>}
                <Component.Button onClick={(e) => handleAdd(e)}>+</Component.Button>
            </Component>
        )
    }

    return renderSuggestion()
}

export default Suggestion