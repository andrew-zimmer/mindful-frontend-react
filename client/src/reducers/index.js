import { combineReducers } from 'redux'
import Moods from './Moods'
import Users from './Users'

export default combineReducers({
    moods: Moods,
    users: Users
})
