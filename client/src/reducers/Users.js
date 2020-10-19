
export default function Users(state = { loading: false, loggedIn: false, username: '', email: '', id: '', userMoods: [] }, action) {
    switch (action.type) {
        case 'SIGN_IN':
            console.log(action.payload)
            return state
        case 'SIGN_UP':

            return { ...state, loading: false, loddedIn: true, username: action.payload.username, email: action.payload.email, id: action.payload.id }
        case 'ERRORS':
            return state
        case 'LOADING':
            return { ...state, loading: true }
        default:
            return state
    }
}
