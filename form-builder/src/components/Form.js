import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ModalForm from './Modal';
import DisplayForm from './DisplayForm';
import { useDispatch, useSelector } from 'react-redux'


function Form() {
    const [input, setInput] = useState('');
    const [questionAdded, setQuestionAdded] = useState(false);
    const formValues = useSelector((state) => state.form.forms)

    const dispatch = useDispatch();
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const renderForm = () => {
        setQuestionAdded(true);
    }
    return (
        <Box component="form"
            sx={{
                width: '30vw',
                marginLeft: '35vw'
            }}
            noValidate
            autoComplete="off">
            <TextField
                value={input}
                label="Form Name"
                variant="outlined"
                fullWidth={true}
                color="primary"
                size="medium"
                focused
                required={true}
                onChange={handleChange}
            />
            {!!questionAdded && formValues.map((item, index) => (
                <DisplayForm
                    key={index}
                    formName={item.formName}
                    formQuestions={{
                        question: item.formDetails.question,
                        ansType: item.formDetails.ansType,
                        options: item.formDetails.options
                    }}
                />
            ))
            }
            <ModalForm formName={input} renderForm={renderForm} />
        </Box>
    );

}

export default Form;