
export const signUp = (userData) => {
    let formData = {
        user: {
            email: userData.email,
            password: userData.password,
            password_confirmation: userData.passwordConfirmation,
            username: userData.username
        }

    };
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };
    return (dispatch) => {
        dispatch({ type: 'LOADING' })
        fetch('/api/v1/users', configObj)
            .then(res => res.json())
            .then(json => {
                if (json.errors) {
                    dispatch({ type: 'ERRORS', payload: json })
                } else {
                    dispatch({ type: 'SIGN_UP', payload: json.data.user })
                }

            })
            .catch(err => console.log(err))
    }
}

export const signIn = (userData) => {


    let formData = {
        email: userData.email,
        password: userData.password,
    };
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };
    return (dispatch) => {
        dispatch({ type: 'LOADING' })
        fetch('/api/v1/sessions', configObj)
            .then(res => res.json())
            .then(json => {

                if (json.errors) {
                    dispatch({ type: 'ERRORS', payload: json })
                } else {
                    dispatch({ type: 'SIGN_IN', payload: json.data.user })
                }

            })
            .catch(err => console.log(err))
    }
}

export const resetErrors = () => {
    return (dispatch) => {
        dispatch({ type: 'RESET_ERRORS' })
    }
}

export const signOut = (userData) => {
    return dispatch => {
        let formData = {
            id: userData,

        };
        let configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(formData),
        };
        fetch('/api/v1/sessions', configObj)
            .then(res => {
                if (res.ok) {
                    dispatch({ type: 'SIGN_OUT' })
                }
            })
    }
}

export const checkSessionForToken = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING' })
        fetch('/api/userlogin')
            .then(res => res.json())
            .then(json => {
                if (json.name === 'Error') {
                    dispatch({ type: 'NO_JWT' })
                } else {
                    dispatch({ type: 'CONFIRM_JWT', payload: json.data.mood })
                }
            })
            .catch(err => console.log(err))
    }
}

// export const test = () => {
//     return (dispatch) => (
//         fetch('/api/sayhello')
//             .then(res => console.log(res))
//     )
// }
