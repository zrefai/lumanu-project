import React from "react"
import { FaTimes } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { removeFromRepoList, updateRepoSeen } from "../../redux/actions"
import { 
    Container, 
    InfoContainer,
    InfoHeaderContainer,
    InfoHeaderText,
    InfoBodyContainer,
    InfoBodyText,
    InfoFooterContainer,
    InfoFooterText,
    RemoveButtonContainer, 
    RemoveButton
} from "./styles/repocard"

function Card({ children, ...otherProps }) {
    return <Container {...otherProps}>{children}</Container>
}

Card.Info = function CardInfo({ children, ...otherProps}) {
    return <InfoContainer {...otherProps}>{children}</InfoContainer>
}

Card.InfoHeaderContainer = function CardInfoHeaderContainer({ children, ...otherProps}) {
    return <InfoHeaderContainer {...otherProps}>{children}</InfoHeaderContainer>
}

Card.InfoHeaderText = function CardInfoHeaderText({ children, ...otherProps}) {
    return <InfoHeaderText {...otherProps}>{children}</InfoHeaderText>
}

Card.InfoBodyContainer = function CardInfoBodyContainer({ children, ...otherProps}) {
    return <InfoBodyContainer {...otherProps}>{children}</InfoBodyContainer>
}

Card.InfoBodyText = function CardInfoBodyText({ children, ...otherProps}) {
    return <InfoBodyText {...otherProps}>{children}</InfoBodyText>
}

Card.InfoFooterContainer = function CardInfoFoorterContainer({ children, ...otherProps }) {
    return <InfoFooterContainer {...otherProps}>{children}</InfoFooterContainer>
}

Card.InfoFooterText = function CardInfoFoorterText({ children, ...otherProps }) {
    return <InfoFooterText {...otherProps}>{children}</InfoFooterText>
}

Card.RemoveButtonContainer = function CardRemoveButtonContainer({ children, ...otherProps}) {
    return <RemoveButtonContainer {...otherProps}>{children}</RemoveButtonContainer>
}

Card.RemoveButton = function CardRemoveButton({ children, ...otherProps}) {
    return <RemoveButton {...otherProps}>{children}</RemoveButton>
}

const RepoCard = ({ repo }) => {
    const dispatch = useDispatch()

    const handleRemoveCard = (e) => {
        e.preventDefault()
        console.log("Remove:", repo.full_name)
        dispatch(removeFromRepoList(repo.id))
    }

    const handleCardOnClick = (e) => {
        e.preventDefault()
        console.log("Navigate to:", repo.full_name, "page")
        dispatch(updateRepoSeen(repo.id))
    }

    const renderInfoHeader = () => {
        const release_data = repo.latest_release

        return (
            <Card.InfoHeaderContainer>
                <Card.InfoHeaderText style={{maxWidth: '55%', minWidth: '55%'}}>
                    {repo.full_name}
                </Card.InfoHeaderText>
                <Card.InfoHeaderText style={{ maxWidth: '20%', minWidth: '20%'}}>
                    {release_data ? release_data.tag_name : "N/A"}
                </Card.InfoHeaderText>
                <Card.InfoHeaderText 
                    style={{
                        maxWidth: '20%', 
                        minWidth: '20%',
                        marginRight: '0px'}}>
                    {release_data ? release_data.created_at: "N/A"}
                </Card.InfoHeaderText>
            </Card.InfoHeaderContainer>
        )
    }

    const renderInfoBody = () => {
        return (
            <Card.InfoBodyContainer>
                <Card.InfoBodyText>
                    {repo.description}
                </Card.InfoBodyText>
            </Card.InfoBodyContainer>
        )
    }

    const renderInfoFooter = () => {
        return (
            <Card.InfoFooterContainer>
                <Card.InfoFooterText>{repo.language}</Card.InfoFooterText>
                <Card.InfoFooterText>Watchers: {repo.watchers_count}</Card.InfoFooterText>
                <Card.InfoFooterText>Forks: {repo.forks_count}</Card.InfoFooterText>
                <Card.InfoFooterText>Star Gazers: {repo.stargazers_count}</Card.InfoFooterText>
            </Card.InfoFooterContainer>
        )
    }

    const renderRemoveButton = () => {
        return (
            <RemoveButtonContainer>
                <Card.RemoveButton onClick={(e) => handleRemoveCard(e)}><FaTimes/></Card.RemoveButton>
            </RemoveButtonContainer>
        )
    }

    return (
        <Card>
            <Card.Info onClick={(e) => handleCardOnClick(e)}>
                {renderInfoHeader()}
                {renderInfoBody()}
                {renderInfoFooter()}
            </Card.Info>
            {renderRemoveButton()}
        </Card>
    )
}

export default RepoCard