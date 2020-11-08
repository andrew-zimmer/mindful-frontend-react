import React, { useState } from 'react'

import { Bar } from 'react-chartjs-2'
import MoodFilter from './MoodFilter'

function MoodData(props) {

    const [moods, setMoods] = useState(props.moods)
    const [userMoods, setUserMoods] = useState(props.userMoods)
    const [uniqMoods, setUniqMoods] = useState(props.uniqMoods)

    const dates = [...userMoods.map(mood => {

        const d = new Date(mood.created_at);
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        return (`${da}-${mo}-${ye}`);

    })]

    const updateMood = (newMoods) => {
        setUniqMoods(newMoods)
    }

    const moodsArray = [...new Set([...userMoods.map(mood => mood.mood)])]

    const moodData = () => {
        const dataArray = []
        for (let i = 0; i < uniqMoods.length; i++) {
            const bgColor = moods.filter(mood => mood.mood === uniqMoods[i])[0].backgroundColor
            const dataset = { label: uniqMoods[i], backgroundColor: bgColor }
            const dataPerDate = []
            for (let j = 0; j < [...new Set(dates)].length; j++) {
                const currentMood = userMoods.filter(mood => mood.mood === uniqMoods[i])
                const currentDateMood = currentMood.filter(mood => {
                    const d = new Date(mood.created_at);
                    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
                    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
                    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
                    return `${da}-${mo}-${ye}` === [...new Set(dates)][j]
                })
                dataPerDate.push(currentDateMood.length)
            }

            dataset['data'] = dataPerDate
            dataArray.push(dataset)
        }
        return dataArray
    }

    const data = {
        labels: [...new Set(dates)],
        datasets: moodData()
    }
    console.log(uniqMoods)
    return (
        <div>
            <Bar data={data} width={100} height={30} />
            <MoodFilter userMoods={userMoods} updateMood={updateMood} />
        </div>
    )

}



export default MoodData
