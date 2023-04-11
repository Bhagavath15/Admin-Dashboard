import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

export function Dev() {
    return (
        <div>
            <Card
                sx={{ maxWidth: "600px" }}>
                <CardHeader

                    title="Development Approach"
                    color="primary">

                </CardHeader>
                <CardContent>
                    <Typography vriant="p">SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page
                        performance. Custom CSS classes are used to create custom components and custom utility classes.</Typography>
                    <br></br>
                    <Typography variant="p">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
