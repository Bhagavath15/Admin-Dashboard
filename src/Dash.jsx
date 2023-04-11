import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import LinearProgress from '@mui/material/LinearProgress';

export function Dash() {
    const data = [{
        earn: "EARNNG(MONTHLY)",
        dollar: "$40,000",
        icon: <CalendarMonthIcon />,
        styles: {
            color: "#4e73df"
        },
        style: {
            borderLeft: "5px solid #4e73df"
        }
    }, {
        earn: "EARNING(ANNUAL)",
        dollar: "$215,000",
        icon: <AttachMoneyIcon />,
        styles: {
            color: "#1cc88a"
        },
        style: {
            borderLeft: "5px solid #1cc88a"
        }
    }, {
        earn: "TASKS",
        dollar: "50%",
        icon: <ContentPasteIcon />,
        icons: <LinearProgress variant="determinate" color="info" value={50} />,
        styles: {
            color: "#36b9cc"
        },
        style: {
            borderLeft: "5px solid #36b9cc"
        }
    }, {
        earn: "PENDING REQUEST",
        dollar: "18",
        icon: <QuestionAnswerIcon />,
        styles: {
            color: "#f6c23e"
        },
        style: {
            borderLeft: "5px solid #f6c23e"
        }
    }];
    return (
        <div className="container-list">
            {data.map((dt) => <Cont data={dt} />)}
        </div>
    );
}
function Cont({ data }) {
    return (
        <div style={data.style} className="container">
            <div className="container-content">
                <h5 style={data.styles}>{data.earn}</h5>
                <h3>{data.dollar}</h3>
            </div>
            <p>{data.icons}</p>
            <div className="icon">
                {data.icon}

            </div>

        </div>
    );
}
export function Container() {
    return (

        <div className="progress">
            <Card sx={{ maxWidth: 500, fontFamily: "Arial" }}>
                <CardHeader
                    title="Project"
                    color="primary"
                >

                </CardHeader>
                <CardContent>
                    <Typography variant="p" color="error">server migration</Typography>
                    <Box sx={{ width: '100%' }}>
                        <br />
                        <LinearProgress variant="determinate" color="error" value={20} />

                    </Box>
                    <br />
                    <Typography variant="p" color="warning">Sales Tracking</Typography>
                    <Box sx={{ width: '100%' }}>
                        <br />
                        <LinearProgress variant="determinate" color="warning" value={40} />
                    </Box>
                    <br />
                    <Typography variant="p" color="primary">Customer Database</Typography>
                    <Box sx={{ width: '100%' }}>
                        <br />
                        <LinearProgress variant="determinate" color="primary" value={60} />
                    </Box>
                    <br />
                    <Typography variant="p" color="info">Payout Detail</Typography>
                    <Box sx={{ width: '100%' }}>
                        <br />
                        <LinearProgress variant="determinate" color="info" value={80} />
                    </Box>
                    <br />
                    <Typography variant="p" color="success">Account Setup</Typography>
                    <Box sx={{ width: '100%' }}>
                        <br />
                        <LinearProgress variant="determinate" color="success" value={100} />
                    </Box>


                </CardContent>
            </Card>

        </div>


    );
}
