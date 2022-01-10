import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Multiline() {
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="answer"
                    multiline
                    variant="standard"
                    placeholder="multiline answer"
                    disabled={true}
                    fullWidth={true}
                />
            </div>
        </Box>
    );
}
