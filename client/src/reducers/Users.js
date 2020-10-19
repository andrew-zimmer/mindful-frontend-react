
export default function Users(state = { loading: false, loggedIn: false, username: '', email: '', id: '', userMoods: [] }, action) {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, loading: false, loggedIn: true, username: action.payload.username, email: action.payload.email, id: action.payload.id, userMoods: [...action.payload.moods] }
        case 'SIGN_UP':

            return { ...state, loading: false, loddedIn: true, username: action.payload.username, email: action.payload.email, id: action.payload.id }
        case 'ERRORS':
            console.log('in the errors case statement')
            return { ...state, loading: false }
        case 'LOADING':
            return { ...state, loading: true }
        default:
            return state
    }
}
