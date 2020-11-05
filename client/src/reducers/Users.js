
export default function Users(state = { loading: false, loggedIn: false, username: '', email: '', id: '', userMoods: [] }, action) {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, loading: false, loggedIn: true, username: action.payload.username, email: action.payload.email, id: action.payload.id, userMoods: [...action.payload.moods] }
        case 'SIGN_UP':
            return { ...state, loading: false, loggedIn: true, username: action.payload.username, email: action.payload.email, id: action.payload.id }
        case 'SIGN_OUT':
            return { ...state, loggedIn: false, username: '', email: '', id: '', userMoods: [] }
        case 'CONFIRM_JWT':
            console.log('confirmed jwt', action.payload)
            return { ...state, loading: false, loggedIn: true, username: action.payload.user.username, email: action.payload.user.email, id: action.payload.user.id, userMoods: [...action.payload.moods] }
        case 'ERRORS':
            console.log(action.payload)
            return { ...state, loading: false }
        case 'CREATE_MOOD':
            return state
        case 'LOADING':
            return { ...state, loading: true }
        default:
            return state
    }
}
