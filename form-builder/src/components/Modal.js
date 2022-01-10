import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import Text from './Text';
import Multiline from './Multiline';
import Radiobutton from './Radiobutton';
import CheckboxOption from './CheckboxOption';
import { useDispatch } from 'react-redux';
import { formName, formDetails } from '../store/Slice';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalForm(props) {
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const [question, setQuestion] = useState('');
    const [ansType, setAnsType] = useState('');
    const [allValues, setAllValues] = useState([]);

    const handleClose = () => setOpen(false);
    const handleOpen = () => {
        setOpen(true)
        dispatch(formName(props.formName));
    };
    const handleChange = (e) => setQuestion(e.target.value);
    const submitHandler = (e) => {
        e.preventDefault();
        props.renderForm();
        setOpen(false);
    }
    const AnswerTypeHandler = (e) => {
        setAnsType(e.target.value);
        dispatch(formDetails({ question: question, ansType: ansType }))
    }

    return (
        <div>
            <Button variant="contained"
                sx={{ mt: 2 }}
                onClick={handleOpen}>
                Add Question
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style} component="form">
                    <TextField
                        value={question}
                        label="Question"
                        variant="outlined"
                        fullWidth={true}
                        color="primary"
                        size="medium"
                        focused
                        required={true}
                        onChange={handleChange}
                    />
                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel id="ans-type">Answer Type</InputLabel>
                        <Select
                            labelId="ans-type"
                            id="ans-type"
                            value={ansType}
                            label="Answer Type"
                            onChange={AnswerTypeHandler}
                        >
                            <MenuItem value="text">Text</MenuItem>
                            <MenuItem value="multiline">Multiline</MenuItem>
                            <MenuItem value="checkbox">Checkbox</MenuItem>
                            <MenuItem value="radio">RadioButton</MenuItem>
                        </Select>
                    </FormControl>
                    {ansType === "text" ? <Text /> : null}
                    {ansType === "multiline" ? <Multiline /> : null}
                    {ansType === "checkbox" ? <CheckboxOption values={allValues} setAllValues={setAllValues} /> : null}
                    {ansType === "radio" ? <Radiobutton /> : null}
                    <Button variant="contained"
                        sx={{ mt: 2 }}
                        onClick={submitHandler}>
                        Add
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
