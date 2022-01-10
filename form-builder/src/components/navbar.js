import * as React from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import Form from './Form';
import Listing from './Listing';

function Navbar() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Typography variant="h3" align='center'>
                    Form Builder App
                </Typography>;
                <Tabs value={value} onChange={handleChange} aria-label="navBar" centered>
                    <Tab label="Create Form" value={0} />
                    <Tab label="Listing" value={1} />
                </Tabs>
                <Box sx={{ mt: 4 }}>
                    {value === 0 ? <Form /> : <Listing />}
                </Box>
            </Box>
        </>
    );
}

export default Navbar;
