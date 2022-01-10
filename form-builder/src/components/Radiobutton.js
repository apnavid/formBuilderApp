import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';

export default function Radiobutton() {
    const [firstvalue, setFirstvalue] = useState('');
    const [secondvalue, setSecondvalue] = useState('');

    const optionOneHandler = (e) => {
        setFirstvalue(e.target.value)
    }
    const optionTwoHandler = (e) => {
        setSecondvalue(e.target.value)
    }
    let labelOne = <TextField
        value={firstvalue}
        variant="standard"
        fullWidth={true}
        color="primary"
        size="medium"
        focused
        onChange={optionOneHandler}
    />
    let labelTwo = <TextField
        value={secondvalue}
        variant="standard"
        fullWidth={true}
        color="primary"
        size="medium"
        focused
        onChange={optionTwoHandler}
    />
    return (
        <FormControl fullWidth={true} sx={{ mt: 2 }}>
            <RadioGroup>
                <FormControlLabel disabled value="firstvalue" control={<Radio />} label={labelOne} />
                <FormControlLabel disabled value="secondvalue" control={<Radio />} label={labelTwo} />
            </RadioGroup>
        </FormControl>
    );
}
