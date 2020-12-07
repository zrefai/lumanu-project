import React, { useState } from "react";
import "./Home.css";
import { Octokit } from "@octokit/core";
import SearchBar from "../../components/Search";
import SuggestionsList from "../../components/SuggestionsList";
import useVisible from "../../hooks/useVisible";
import RepoList from "../../components/RepoList";

const Home = () => {
  const octokit = new Octokit();
  const { ref, isComponentVisible, setIsComponentVisible } = useVisible(false);
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState("");

  const handleInput = (e) => {
    setSearchText(e.target.value);
    if (isComponentVisible) setIsComponentVisible(false);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    const promise = await octokit.request("GET /search/repositories", {
      q: searchText,
    });
    try {
      setSuggestions(promise.data.items.splice(0, 5));
    } catch (e) {
      setSuggestions([]);
      setError(e);
    }
    setIsComponentVisible(true);
  };

  const renderSuggestions = () => {
    if (isComponentVisible) {
      return (
        <div ref={ref}>
          <SuggestionsList suggestions={suggestions} error={error} />
        </div>
      );
    }
    return null;
  };

  return (
    <div className="Home-Container">
      <SearchBar
        handleInput={handleInput}
        handleSearch={handleSearch}
        searchText={searchText}
      />
      {renderSuggestions()}
      <RepoList />
    </div>
  );
};

export default Home;
