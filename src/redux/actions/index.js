import {
  ADD_TO_REPOLIST,
  REMOVE_FROM_REPOLIST,
  UPDATE_REPO_RELEASE,
  UPDATE_REPO_SEEN,
} from "../constants";

export function addToRepoList(id, repo, release) {
  return {
    type: ADD_TO_REPOLIST,
    payload: {
      id,
      repo,
      release,
    },
  };
}

export function removeFromRepoList(id) {
  return {
    type: REMOVE_FROM_REPOLIST,
    payload: { id },
  };
}

export function updateRepoRelease(id, release) {
  return {
    type: UPDATE_REPO_RELEASE,
    payload: {
      id,
      release,
    },
  };
}

export function updateRepoSeen(id) {
  return {
    type: UPDATE_REPO_SEEN,
    payload: { id },
  };
}
