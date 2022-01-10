import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
);

export default function DisplayForm(props) {
    const { question, ansType, options } = props.formQuestions;
    return (
        <Box>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {props.formName}
            </Typography>
            <Typography variant="h5" component="div">
                {question}
            </Typography>
            <Typography variant="h5" component="div">
                {ansType}
            </Typography>
            {options && <Typography variant="h5" component="div">
                {options.map(i => {
                    return i
                })}
            </Typography>}
        </Box>
    );
}
