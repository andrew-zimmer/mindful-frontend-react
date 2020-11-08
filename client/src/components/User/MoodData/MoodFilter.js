import React, { Component } from 'react'

import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';


export default class MoodFilter extends Component {

    icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    checkedIcon = <CheckBoxIcon fontSize="small" />;

    handleChange = (e, newValue) => {
        // console.log(e.target.innerText, e.target.ariaSelected, e.options, newValue)
        this.props.updateMood(newValue)
    }

    handleInputChange = (e) => {
    }

    handleHighlightChange = (e) => {
    }

    handleClose = (e) => {
    }

    render() {
        return (
            <div>
                <Autocomplete
                    multiple
                    id="checkboxes-tags-demo"
                    options={[...new Set(this.props.userMoods.map(mood => mood.mood))]}
                    disableCloseOnSelect
                    onChange={this.handleChange}
                    onInputChange={this.handleInputChange}
                    onHighlightChange={this.handleHighlightChange}
                    onClose={this.handleClose}
                    // getOptionSelected={(option, value) => option === value && console.log(option)}
                    getOptionLabel={(option) => option}
                    defaultValue={[...new Set(this.props.userMoods.map(mood => mood.mood))]}
                    renderOption={(option, { selected }) => (
                        <React.Fragment>
                            <Checkbox
                                icon={this.icon}
                                checkedIcon={this.checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option}
                        </React.Fragment>
                    )}
                    style={{ width: 500 }}
                    renderInput={(params) => (
                        <TextField {...params} variant="outlined" label="Mood Filter" placeholder="Your Past Moods" />
                    )}
                />
            </div>
        )
    }
}
