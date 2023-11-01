import { useState } from 'react';
import { Sidebar as ProSidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import { Box, IconButton, Typography, useTheme } from '@mui/material';

import avatarImg from '@/assets/avatar.jpg';
import { tokens } from '@/theme';

type ItemType = {
    title: string;
    to: string;
    icon: any;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
};

const Item = ({ title, to, icon, selected, setSelected }: ItemType) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100]
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

export const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');

    return (
        <Box
            sx={{
                '& .ps-sidebar-container': {
                    background: `${colors.primary[400]} !important`
                },
                '& .ps-menuitem-root': {
                    // padding: '5px 35px 5px 20px !important'
                },
                '& .ps-menu-button:hover': {
                    color: '#868dfb !important',
                    backgroundColor: 'transparent !important'
                },
                '& .ps-menuitem-root .ps-active': {
                    color: '#6870fa !important',
                    fontWeight: 800
                },
                '& .ps-sidebar-root': {
                    border: 'none !important'
                }
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu>
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: '10px 0 20px 0',
                            color: colors.grey[100]
                        }}
                    >
                        {!isCollapsed && (
                            <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                                <Typography variant="h3" color={colors.grey[100]}>
                                    WLTDEV
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={avatarImg}
                                    style={{ cursor: 'pointer', borderRadius: '50%', objectFit: 'cover' }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: '10px 0 0 0' }}>
                                    Frederico
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    Captain
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : '10%'}>
                        <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />

                        <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
                            Data
                        </Typography>
                        <Item title="Manage Team" to="/team" icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item
                            title="Contacts Information"
                            to="/contacts"
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Invoices Balances"
                            to="/invoices"
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
                            Pages
                        </Typography>
                        <Item title="Profile Form" to="/form" icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item title="FAQ Page" to="/faq" icon={<HelpOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />

                        <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
                            Charts
                        </Typography>
                        <Item title="Bar Chart" to="/bar" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item
                            title="Pie Chart"
                            to="/pie"
                            icon={<PieChartOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item title="Line Chart" to="/line" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item
                            title="Geography Chart"
                            to="/geography"
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};
