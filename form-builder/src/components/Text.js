import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Text() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="answer"
                variant="standard"
                disabled={true}
                placeholder="singleline answer"
                fullWidth={true} />
        </Box>
    );
}
