import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

import AccessibleIcon from '@mui/icons-material/Accessible';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import SaveIcon from '@mui/icons-material/Save';
import AddTaskIcon from '@mui/icons-material/AddTask';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import SettingsIcon from '@mui/icons-material/Settings';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import ReportIcon from '@mui/icons-material/Report';
import Person3Icon from '@mui/icons-material/Person3';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import ShortTextIcon from '@mui/icons-material/ShortText';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
const drawerWidth = 220;

const Employersidenav = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <Box sx={{ display: "flex", width: { xs: "20px" } }}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        sx={{
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "rgb(15, 80, 155)",
            color: "White",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <Link to="/home" style={{ color: "white", textDecoration: "none" }}>
              <ListItemButton>
                <ListItemIcon style={{ color: "white" }}>
                  <Person3Icon />
                </ListItemIcon>
                <ListItemText
                  primary="Profile"
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                />
              </ListItemButton>
            </Link>

            
            <Link
              to="/create-user"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: "white" }}>
                  <ModeEditOutlineIcon />
                </ListItemIcon>
                <ListItemText
                  primary="EditProfile"
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                />
              </ListItemButton>
              
            </Link>
            <Link
              to="/create-user"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: "white" }}>
                  < SaveIcon />
                </ListItemIcon>
                <ListItemText
                  primary="CandidateSaved"
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                />
              </ListItemButton>
              
            </Link>
           
            <Link
              to="/create-user"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: "white" }}>
                  <ShortTextIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Shortlisted"
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                />
              </ListItemButton>
              
            </Link>
            <Link
              to="/create-user"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: "white" }}>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText
                  primary="selected"
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                />
              </ListItemButton>
              
            </Link>
          
           
          
          </List>
          <Divider style={{ backgroundColor: "white", color: "white" }} />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Employersidenav;
