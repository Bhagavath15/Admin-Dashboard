import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export function ContItem() {
    return (
        <div>
            <Card sx={{ maxWidth: "600px" }}>
                <CardHeader
                    title="Illustrate">

                </CardHeader>
                <CardMedia
                    component="img"

                    image="https://labocare.org/assets/img/undraw_posting_photo.svg"
                    alt="Undraw" />
                <CardContent>
                    <Typography variant="p">Add some quality, svg illustrations to your project courtesy of <span color="primary"><a href="https://undraw.co/">unDraw</a></span>,
                        a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</Typography>
                </CardContent>
                <IconButton size="small" color="primary" endIcon={<TrendingFlatIcon />}>Browser Illustrations on undraw</IconButton>
            </Card>
        </div>
    );
}
export function Colors() {
    const color = [{
        name: "Primary",
        code: "#4e73df",
        styles: {
            backgroundColor: "#4e73df",
            color: "white",
            width: "200px",
            height: "70px"
        }
    },
    {
        name: "Success",
        code: "#1cc88a",
        styles: {
            backgroundColor: "#1cc88a",
            color: "white",
            width: "200px",
            height: "70px"
        }
    },
    {
        name: "Info",
        code: "#36b9cc",
        styles: {
            backgroundColor: "#36b9cc",
            color: "white",
            width: "200px",
            height: "70px"
        }
    },
    {
        name: "Warning",
        code: "#f6c23e",
        styles: {
            backgroundColor: "#f6c23e",
            color: "white",
            width: "200px",
            height: "70px"
        }
    },
    {
        name: "Danger",
        code: "#e74a3b",
        styles: {
            backgroundColor: "#e74a3b",
            color: "white",
            width: "200px",
            height: "70px"
        }
    },
    {
        name: "Secondary",
        code: "#858796",
        styles: {
            backgroundColor: "#858796",
            color: "white",
            width: "200px",
            height: "70px"
        }
    }, {
        name: "Light",
        code: "#f8f9fc",
        styles: {
            backgroundColor: "#f8f9fc",
            color: "#5a5c69",
            width: "200px",
            height: "70px"
        }
    },
    {
        name: "Dark",
        code: "#5a5c69",
        styles: {
            backgroundColor: "#5a5c69",
            color: "white",
            width: "200px",
            height: "70px"
        }
    }];

    return (
        <div className="colors">
            {color.map((clr, id) => <ColorList key={id} color={clr} />)}

        </div>

    );
}
function ColorList({ color, id }) {
    return (
        <div className="colorCont" style={color.styles}>
            <h4>{color.name}</h4>
            <h5>{color.code}</h5>
        </div>
    );
}
