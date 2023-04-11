import { AreaChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

export function Barchart() {
    const data = [
        { name: 'Jan', sales: 1000 },
        { name: 'Feb', sales: 2000 },
        { name: 'Mar', sales: 1500 },
        { name: 'Apr', sales: 3000 },
        { name: 'May', sales: 2500 },
        { name: 'Jun', sales: 4000 },
    ];
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
            <CardActions>
                <AreaChart width={600} height={400} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </CardActions>
        </Card >
    );
}
