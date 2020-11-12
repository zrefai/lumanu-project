import { useState, useEffect } from "react"
import { Octokit } from "@octokit/core"
import { useDispatch } from "react-redux"
import { updateRepoRelease } from "../redux/actions"

function useRevalidate(owner, repoName, repoID, currentReleaseID) {
    const octokit = new Octokit()
    const dispatch = useDispatch()
    const [error, setError] = useState("")

    const fetchNewRepoVersionInfo = async () => {
        const promise = await octokit.request('GET /repos/{owner}/{repoName}/releases', {owner, repoName})
        try {
            if (promise.data.length && promise.data[0].id !== currentReleaseID) {
                dispatch(updateRepoRelease(repoID, promise.data[0]))
            }
        } catch (e) {
            setError(e)
        }
    }

    useEffect(() => {
        fetchNewRepoVersionInfo()
    }, [])

    return {error}
}

export default useRevalidate