import reactLogo from './assets/react.svg'
import './App.css'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import Avatar from '@mui/material/Avatar';
import { Verticalbar } from './Verticalbar';
import DownloadIcon from '@mui/icons-material/Download';
import { AreaBar } from './AreaBar';
import { PieChart } from './PieChart';
import Badge from '@mui/material/Badge';
import { SimpleBottomNavigation } from './SimpleBottomNavigation';
import { Dev } from './Dev';
import { Colors, ContItem } from './Colors';
import { Dash, Container } from './Dash';
import { Routes, Route } from 'react-router-dom';
import { Student } from './Student';
import { Teacher } from './Teacher';
import { LibraryManagement } from './LibraryManagement';

export default function App() {


  return (
    <div className="App">

      <Verticalbar />
      <HorizontalBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/library" element={<LibraryManagement />} />
      </Routes>
      <SimpleBottomNavigation />
    </div>
  )
}

function HorizontalBar() {
  return (


    <div className="horizontalbar">
      <AppBar position="static" color="">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="#">Home</a>
          </Typography>
          <Badge badgeContent={3} color="error">
            <IconButton aria-label="notification" color="primary">
              <NotificationsIcon />
            </IconButton>
          </Badge>

          <Badge badgeContent={7} color="error">
            <IconButton aria-label="email" color="primary">
              <EmailIcon />
            </IconButton>
          </Badge>



          <div className="avatar">
            <IconButton aria-label="avatar">
              <span className="avatarName">Douglas Mc Ghee</span><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>


    </div>

  )
}

function Dashboard() {
  return (
    <div className="board">
      <div className="dashboard-content">
        <h2>Dashboard</h2>
        <Button variant="contained" size="small" startIcon={<DownloadIcon />}>Generate</Button>

      </div>
      <Dash />
      <div className="charts">
        <AreaBar />
        <PieChart />
      </div>
      {/* <div className="card-container ">
        <Container />
        <Colors />
        <div className="progressCont">

          <Dev />
        </div>
      </div> */}
      <div className="display">
        <div className="card-container">
          <Container />
          <Colors />
        </div>
        <div className="card-cont">
          <ContItem />
          <Dev />
        </div>
      </div>

    </div>

  )
}

