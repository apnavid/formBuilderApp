import React, { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { options } from '../store/Slice';

export default function CheckboxOption() {
    const [firstvalue, setFirstvalue] = useState('');
    const [secondvalue, setSecondvalue] = useState('');
    const [thirdvalue, setThirdvalue] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if (!!firstvalue && !!secondvalue && !!thirdvalue) {
            dispatch(options([firstvalue, secondvalue, thirdvalue]))
        } else {
            setError('All options are required');
        }
    }, [firstvalue, secondvalue, thirdvalue])

    const optionOneHandler = (e) => {
        setFirstvalue(e.target.value);
    }
    const optionTwoHandler = (e) => {
        setSecondvalue(e.target.value)
    }
    const optionThreeHandler = (e) => {
        setThirdvalue(e.target.value)
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
    let labelThree = <TextField
        value={thirdvalue}
        variant="standard"
        fullWidth={true}
        color="primary"
        size="medium"
        focused
        onChange={optionThreeHandler}
    />
    return (
        <FormGroup fullWidth={true}>
            <FormControlLabel control={<Checkbox />} disabled value="firstvalue" label={labelOne} />
            <FormControlLabel control={<Checkbox />} disabled value="secondvalue" label={labelTwo} />
            <FormControlLabel control={<Checkbox />} disabled value="thirdvalue" label={labelThree} />
            {!!error ? <p color="red">error</p> : ''}
        </FormGroup>
    );
}
