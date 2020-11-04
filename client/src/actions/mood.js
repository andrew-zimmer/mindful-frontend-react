export const createMood = (userData) => {
    console.log('in create mood action 1')

    let formData = {
        mood: {
            mood: userData.mood,
            comment: userData.comment,
            user_id: userData.id
        }

    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    }

    return (dispatch) => {
        console.log('in the return statement')
        fetch('/api/v1/moods', configObj)
            .then(res => res.json())
            .then(json => {
                if (json.errors) {
                    dispatch({ type: 'ERRORS', payload: json })
                } else {
                    dispatch({ type: 'CREATE_MOOD', payload: json.data })
                }
                // dispatch({ type: 'CREATE_MOOD', payload: json.data })
            })
            .catch(err => console.log(err))
    }
}
