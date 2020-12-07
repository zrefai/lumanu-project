import React from "react";
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
  RemoveButton,
} from "./styles/repocard";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeFromRepoList, updateRepoSeen } from "../../redux/actions";
import useRevalidate from "../../hooks/useRevalidate";

function Card({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}

Card.Info = function CardInfo({ children, ...otherProps }) {
  return <InfoContainer {...otherProps}>{children}</InfoContainer>;
};

Card.IHContainer = function CardInfoHeaderContainer({
  children,
  ...otherProps
}) {
  return <InfoHeaderContainer {...otherProps}>{children}</InfoHeaderContainer>;
};

Card.IHText = function CardInfoHeaderText({ children, ...otherProps }) {
  return <InfoHeaderText {...otherProps}>{children}</InfoHeaderText>;
};

Card.IBContainer = function CardInfoBodyContainer({ children, ...otherProps }) {
  return <InfoBodyContainer {...otherProps}>{children}</InfoBodyContainer>;
};

Card.IBText = function CardInfoBodyText({ children, ...otherProps }) {
  return <InfoBodyText {...otherProps}>{children}</InfoBodyText>;
};

Card.IFContainer = function CardInfoFoorterContainer({
  children,
  ...otherProps
}) {
  return <InfoFooterContainer {...otherProps}>{children}</InfoFooterContainer>;
};

Card.IFText = function CardInfoFoorterText({ children, ...otherProps }) {
  return <InfoFooterText {...otherProps}>{children}</InfoFooterText>;
};

Card.RBContainer = function CardRemoveButtonContainer({
  children,
  ...otherProps
}) {
  return (
    <RemoveButtonContainer {...otherProps}>{children}</RemoveButtonContainer>
  );
};

Card.RButton = function CardRemoveButton({ children, ...otherProps }) {
  return <RemoveButton {...otherProps}>{children}</RemoveButton>;
};

const RepoCard = ({ repo }) => {
  const release_data = repo.latest_release;
  const currentReleaseID = release_data ? release_data.id : "00000000";
  const { error } = useRevalidate(
    repo.owner.login,
    repo.name,
    repo.id,
    currentReleaseID
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRemoveCard = (e) => {
    e.preventDefault();
    dispatch(removeFromRepoList(repo.id));
  };

  const handleCardOnClick = (e) => {
    e.preventDefault();
    if (!repo.seen) dispatch(updateRepoSeen(repo.id));
    history.push(`/details`, { repoId: repo.id });
  };

  const renderInfoHeader = () => {
    return (
      <Card.IHContainer>
        <Card.IHText style={{ maxWidth: "55%", minWidth: "55%" }}>
          {repo.full_name}
        </Card.IHText>
        <Card.IHText style={{ maxWidth: "20%", minWidth: "20%" }}>
          {release_data ? release_data.tag_name : "N/A"}
        </Card.IHText>
        <Card.IHText
          style={{
            maxWidth: "20%",
            minWidth: "20%",
            marginRight: "0px",
          }}
        >
          {release_data ? release_data.created_at.split("T")[0] : "N/A"}
        </Card.IHText>
      </Card.IHContainer>
    );
  };

  const renderInfoBody = () => {
    return (
      <Card.IBContainer>
        <Card.IBText>{repo.description}</Card.IBText>
      </Card.IBContainer>
    );
  };

  const renderInfoFooter = () => {
    return (
      <Card.IFContainer>
        <Card.IFText>{repo.language}</Card.IFText>
        <Card.IFText>Watchers: {repo.watchers_count}</Card.IFText>
        <Card.IFText>Forks: {repo.forks_count}</Card.IFText>
        <Card.IFText>Star Gazers: {repo.stargazers_count}</Card.IFText>
      </Card.IFContainer>
    );
  };

  const renderRemoveButton = () => {
    return (
      <RemoveButtonContainer>
        <Card.RButton onClick={(e) => handleRemoveCard(e)}>
          <FaTimes />
        </Card.RButton>
      </RemoveButtonContainer>
    );
  };

  return (
    <Card style={{ borderColor: repo.seen ? "#707070" : "#5AFF5A" }}>
      <Card.Info onClick={(e) => handleCardOnClick(e)}>
        {renderInfoHeader()}
        {renderInfoBody()}
        {renderInfoFooter()}
      </Card.Info>
      {renderRemoveButton()}
    </Card>
  );
};

export default RepoCard;
