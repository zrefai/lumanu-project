import { omit } from "lodash"
import { ADD_TO_REPOLIST, REMOVE_FROM_REPOLIST, UPDATE_REPO_RELEASE, UPDATE_REPO_SEEN } from "../constants"

export const repoReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_REPOLIST:
            return {
                ...state, 
                [action.payload.id]: {
                    ...action.payload.repo,
                    latest_release: action.payload.release,
                    seen: false
                }
            }
        
        case REMOVE_FROM_REPOLIST:{
            return omit(state, action.payload.id)
        }
            
        //Currently using releaseID NOT repoID 
        case UPDATE_REPO_RELEASE:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    latest_release: action.payload.release,
                    seen : false
                }
            }
        
        case UPDATE_REPO_SEEN:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    seen: !state[action.payload.id].seen
                }
            }
        
        default:
            return state
    }
}