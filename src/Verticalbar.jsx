import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import FolderIcon from '@mui/icons-material/Folder';
import BarChartIcon from '@mui/icons-material/BarChart';
import TableChartIcon from '@mui/icons-material/TableChart';
import { useNavigate } from 'react-router-dom';

export function Verticalbar() {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false);
    const [show, setShow] = useState(false);
    const [page, setPage] = useState(false);
    // const style = {
    //   "backgroundColor": toggle ? "white" : "dodgerblue",
    //   "color": toggle ? "black" : "white"
    // }
    return (

        <div className="vertical-bar">
            <div className="admin">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <a href="#">SB ADMIN <span>2</span></a>
                </Typography>
            </div>

            <hr />
            <div className="dashboard">
                <Typography variant="p" component="div" sx={{ flexGrow: 1 }} onClick={() => navigate("/")}>
                    Dashboard
                </Typography>
                <Typography variant="p" component="div" sx={{ flexGrow: 1 }} onClick={() => navigate("/student")}>
                    Student
                </Typography>
                <Typography variant="p" component="div" sx={{ flexGrow: 1 }} onClick={() => navigate("/teacher")}>
                    Teacher
                </Typography>
            </div>

            <hr />
            <div className="interface ">
                <p className="interface opacity">INTERFACE</p>
                <div className="component">
                    <IconButton aria-label="component" size="small" onClick={() => setToggle(!toggle)}>
                        <SettingsIcon />Components
                    </IconButton>

                    <div className="component-content">
                        {toggle ? <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
                            <a href="#">Buttons</a>
                        </Typography> : null}
                        {toggle ? <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
                            <a href="#">Cards</a>
                        </Typography> : null}
                    </div>
                </div>
                <br />
                <div className="utilities">
                    <IconButton aria-label="utilities" size="small" onClick={() => setShow(!show)}>
                        <BuildIcon />Utilities
                    </IconButton>

                    <div className="utilities-content">
                        {show ? <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
                            <a href="#">Color</a>
                        </Typography> : null}
                        {show ? <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
                            <a href="#">Border</a>
                        </Typography> : null}
                        {show ? <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
                            <a href="#">Animations</a>
                        </Typography> : null}
                        {show ? <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
                            <a href="#">Others</a>
                        </Typography> : null}
                    </div>
                </div>
            </div>
            <hr />
            <p className="add opacity">ADDONS</p>
            <div className="pages">
                <IconButton aria-label="pages" size="small" onClick={() => setPage(!page)}>
                    <FolderIcon />Pages
                </IconButton>

                <div className="pages-content">
                    {page ? <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
                        <a href="#">Login</a>
                    </Typography> : null}
                    {page ? <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
                        <a href="#">Register</a>
                    </Typography> : null}
                    {page ? <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
                        <a href="#">Forget Password</a>
                    </Typography> : null}
                    {page ? <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
                        OTHER PAGES
                    </Typography> : null}
                    {page ? <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
                        <a href="#">404 Page</a>
                    </Typography> : null}
                    {page ? <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
                        <a href="#">Blank Page</a>
                    </Typography> : null}
                </div>
            </div>
            <IconButton aria-label="barchart" size="small">
                <BarChartIcon /><a href="#">Chart</a>
            </IconButton>
            <br />

            <IconButton aria-label="tablechart" size="small" >
                <TableChartIcon /> <a href="#">Tables</a>
            </IconButton>


        </div>


    );
}
