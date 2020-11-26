import React, { useState } from 'react'

import { Bar } from 'react-chartjs-2'

import MoodFilter from './MoodFilter'
import MoodDateFilter from './MoodDateFilter'
import MoodTableDisplay from './MoodTableDisplay'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

function MoodData(props) {

    const [moods, setMoods] = useState(props.moods)
    const [userMoods, setUserMoods] = useState(props.userMoods)
    const [uniqMoods, setUniqMoods] = useState(props.uniqMoods)
    const [allDates, setAllDates] = useState([...new Set(props.userMoods.map(moods => moods.created_at))])
    const [startIndexMain, setStartIndexMain] = useState(0);
    const [endIndexMain, setEndIndexMain] = useState(props.userMoods.length - 1)

    const dates = [...userMoods.filter(mood => uniqMoods.includes(mood.mood)).map(mood => {

        const d = new Date(mood.created_at);
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        return (`${da}-${mo}-${ye}`);

    })]

    const updateMood = (newMoods) => {
        setUniqMoods(newMoods)

        const newUserMoods = () => {
            let array = []
            for (let i = 0; i < newMoods.length; i++) {
                array = array.concat(props.userMoods.slice(startIndexMain, endIndexMain + 1).filter(mood => mood.mood === newMoods[i]))
            }
            for (let i = array.length - 1; i >= 0; i--) {
                for (let j = 0; j < i; j++) {
                    if (array[j].created_at > array[j + 1].created_at) {
                        const larger = array[j]

                        array[j] = array[j + 1]
                        array[j + 1] = larger
                    }
                }
            }
            setUserMoods(array)
        }
        newUserMoods()
    }

    const moodsArray = [...new Set([...userMoods.map(mood => mood.mood)])]


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
        setUserMoods(props.userMoods.slice(startIndex, endIndex() + 1))
        setStartIndexMain(startIndex)
        setEndIndexMain(endIndex())
    }
    const returnMoodsArray = () => {
        let array = []
        for (let i = 0; i < uniqMoods.length; i++) {
            array = array.concat(userMoods.filter(mood => mood.mood === uniqMoods[i]))
        }
        for (let i = array.length - 1; i >= 0; i--) {
            for (let j = 0; j < i; j++) {
                if (array[j].created_at > array[j + 1].created_at) {
                    const larger = array[j]

                    array[j] = array[j + 1]
                    array[j + 1] = larger
                }
            }
        }
        return array

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
    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    stepSize: 1
                }
            }]
        }
    };
    return (
        <Container>

            <Grid container spacing={2}>
                <Grid item xs={12} md={12} align='center'>
                    <Paper style={{ padding: 10 }} elevation={10}>
                        <MoodDateFilter dates={allDates} updateUserMoods={startDateEndDate} />
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper style={{ padding: 10 }} elevation={10}>
                        <Bar data={data} options={options} width={'100%'} height={30} />
                    </Paper>
                </Grid>
                <Grid item xs={4} md={4}>
                    <Paper style={{ padding: 10 }} elevation={10}>
                        <MoodFilter userMoods={props.userMoods} updateMood={updateMood} />
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={{ padding: 10 }} elevation={10}>
                        <MoodTableDisplay returnMoodsArray={returnMoodsArray} />
                    </Paper>
                </Grid>
            </Grid>

        </Container>
    )

}



export default MoodData
