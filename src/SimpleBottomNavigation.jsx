import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';

export function SimpleBottomNavigation() {
    const [value, setValue] = useState(0);

    return (
        <Box sx={{ minwidth: 500, height: "auto" }} className="bottom-navigation">
            <BottomNavigation
                sx={{ padding: 2.3 }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <Typography className="copyright" variant="p">Copyright © Your Website 2021</Typography>
            </BottomNavigation>
        </Box>
    );
}
