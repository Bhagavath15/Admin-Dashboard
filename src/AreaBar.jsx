import { useState } from 'react';
import Chart from 'react-apexCharts';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

export function AreaBar() {
    const [state, setState] = useState({
        series: [{
            name: 'series',
            data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'month',
                categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
            }
        }
    });
    return (
        <Card sx={{ minWidth: "600px" }}>
            <CardHeader
                title="Earnings Overview"
                color="primary"
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }>

            </CardHeader>
            <CardContent>
                <div className="areabar">

                    <div className="col">
                        <Chart options={state.options} series={state.series} type="area" height={400} width={550} />
                    </div>
                </div>
            </CardContent>

        </Card>

    );
}


