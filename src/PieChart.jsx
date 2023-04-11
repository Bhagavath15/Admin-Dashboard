import { useState } from 'react';
import Chart from 'react-apexCharts';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

export function PieChart() {
    const [states, setStates] = useState({
        series: [89, 77, 45],
        options: {
            chart: {
                type: 'donut',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    });
    return (
        <Card sx={{ minWidth: "450px" }}>
            <CardHeader
                title="Revenue Sources"
                color="Primary"
                action={<IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>}>
            </CardHeader>
            <CardContent>
                <div id="chart">
                    <Chart options={states.options} series={states.series} height={400} width={450} type="donut" />
                </div>
            </CardContent>
        </Card>
    );
}
