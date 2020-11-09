import React, { useState } from 'react'

import { Bar } from 'react-chartjs-2'

import MoodFilter from './MoodFilter'
import MoodDateFilter from './MoodDateFilter'

function MoodData(props) {

    const [moods, setMoods] = useState(props.moods)
    const [userMoods, setUserMoods] = useState(props.userMoods)
    const [uniqMoods, setUniqMoods] = useState(props.uniqMoods)
    const [allDates, setAllDates] = useState([...new Set(props.userMoods.map(moods => moods.created_at))])

    const dates = [...userMoods.filter(mood => uniqMoods.includes(mood.mood)).map(mood => {

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

    console.log(userMoods)

    const startDateEndDate = (start, end) => {
        const newMoodsArray = [...props.userMoods.map(mood => {

            const d = new Date(mood.created_at);
            const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
            const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
            const date = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
            return [date, mo, ye];

        })]

        const startIndex = newMoodsArray.findIndex(date => (start.getDate() == date[0] && (start.getMonth() + 1) == date[1] && start.getFullYear() == date[2]))
        const endIndex = () => {
            for (let i = 0; i < newMoodsArray.length; i++) {
                if (end.getDate() == newMoodsArray[i][0] && (end.getMonth() + 1) == newMoodsArray[i][1] && end.getFullYear() == newMoodsArray[i][2]) {
                    if (newMoodsArray[i + 1] && end.getDate() == newMoodsArray[i + 1][0] && (end.getMonth() + 1) == newMoodsArray[i + 1][1] && end.getFullYear() == newMoodsArray[i + 1][2]) {
                        continue
                    } else {
                        return i
                    }
                }
            }
        }
        console.log(startIndex, endIndex())
        setUserMoods(props.userMoods.slice(startIndex, endIndex()))
    }

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
    return (
        <div>
            <Bar data={data} width={100} height={30} />
            <MoodFilter userMoods={userMoods} updateMood={updateMood} />
            <MoodDateFilter dates={allDates} updateUserMoods={startDateEndDate} />
        </div>
    )

}



export default MoodData
