import React from "react"
import { FaTimes } from "react-icons/fa"
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
} from "./styles/card"

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

const RepoCard = () => {
    const renderInfoHeader = () => {
        return (
            <Card.InfoHeaderContainer>
                <Card.InfoHeaderText style={{maxWidth: '55%', minWidth: '55%'}}>
                    ryukinix/lisp-chat
                </Card.InfoHeaderText>
                <Card.InfoHeaderText style={{ maxWidth: '20%', minWidth: '20%'}}>
                    v0.2.0
                </Card.InfoHeaderText>
                <Card.InfoHeaderText 
                    style={{
                        maxWidth: '20%', 
                        minWidth: '20%',
                        marginRight: '0px'}}>
                    2019-03-11
                </Card.InfoHeaderText>
            </Card.InfoHeaderContainer>
        )
    }

    const renderInfoBody = () => {
        return (
            <Card.InfoBodyContainer>
                <Card.InfoBodyText>
                    An experimental minimal chat written in Common Lisp
                </Card.InfoBodyText>
            </Card.InfoBodyContainer>
        )
    }

    const renderInfoFooter = () => {
        return (
            <Card.InfoFooterContainer>
                <Card.InfoFooterText>Common Lisp</Card.InfoFooterText>
                <Card.InfoFooterText>Watchers: 156</Card.InfoFooterText>
                <Card.InfoFooterText>Forks: 13</Card.InfoFooterText>
                <Card.InfoFooterText>Star Gazers: 156</Card.InfoFooterText>
            </Card.InfoFooterContainer>
        )
    }

    const renderRemoveButton = () => {
        return (
            <RemoveButtonContainer>
                <Card.RemoveButton><FaTimes/></Card.RemoveButton>
            </RemoveButtonContainer>
        )
    }

    return (
        <Card>
            <Card.Info>
                {renderInfoHeader()}
                {renderInfoBody()}
                {renderInfoFooter()}
            </Card.Info>
            {renderRemoveButton()}
        </Card>
    )
}

export default RepoCard