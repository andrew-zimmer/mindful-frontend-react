import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    DatePicker,

} from "@material-ui/pickers";
import { Typography } from "@material-ui/core";

function MoodDateFilter({ dates, updateUserMoods }) {
    const [selectedStartDate, handleStartDateChange] = useState(new Date(dates[0]));
    const [selectedEndDate, handleEndDateChange] = useState(new Date(dates[dates.length - 1]))


    const formatedDates = [...new Set(dates.map(mood => {

        const d = new Date(mood);
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
        const da = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(d);
        const date = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        return [date, mo, ye];

    }))]

    const handleStartDate = (date) => {
        handleStartDateChange(date)
        updateUserMoods(date, selectedEndDate)
    }

    const handleEndDate = (date) => {
        handleEndDateChange(date)
        updateUserMoods(selectedStartDate, date)
    }

    // updateUserMoods(selectedStartDate, selectedEndDate)


    const matchDates = (date) => {
        for (let i = 0; i < formatedDates.length; i++) {
            if (date.getDate() == formatedDates[i][0] && (date.getMonth() + 1) == formatedDates[i][1] && date.getFullYear() == formatedDates[i][2]) {
                return false
            }
        }
        return true
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className="pickers" style={{ verticalAlign: 'text-bottom' }}>
                <DatePicker label='Start Date' onAccept={(date) => console.log(date)} value={selectedStartDate} onChange={handleStartDate} shouldDisableDate={(date) => matchDates(date)} />
                <Typography display='inline' style={{ marginLeft: 20, marginRight: 20 }}>
                    To
                </Typography>
                <DatePicker label='End Date' variant='outlined' helperText='You can only choose specific dates' value={selectedEndDate} onChange={handleEndDate} shouldDisableDate={(date) => matchDates(date)} />
            </div>
        </MuiPickersUtilsProvider>
    );
}

export default MoodDateFilter;
