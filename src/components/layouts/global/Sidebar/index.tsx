import { useEffect, useState } from 'react';
import { Sidebar as ProSidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
    icon: any;
    selected: string;
    path: string;
    // eslint-disable-next-line no-unused-vars
    navigate: (link: string) => void;
};

const Item = ({ title, icon, selected, path, navigate }: ItemType) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={selected === path}
            style={{
                color: colors.grey[100]
            }}
            onClick={() => navigate(path)}
            icon={icon}
        >
            <Typography>{title}</Typography>
        </MenuItem>
    );
};

export const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('/');
    const route = useLocation();
    const navigate = useNavigate();

    const handleNavigate = (link: string) => {
        navigate(link);
        setSelected(link);
    };

    useEffect(() => {
        setSelected(route.pathname);
    }, []);

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
                        <Item title="Dashboard" path="/" navigate={handleNavigate} icon={<HomeOutlinedIcon />} selected={selected} />

                        <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
                            Data
                        </Typography>
                        <Item
                            title="Manage Team"
                            navigate={handleNavigate}
                            path="/team"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                        />
                        <Item
                            title="Contacts Information"
                            path="/contacts"
                            navigate={handleNavigate}
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                        />
                        <Item
                            title="Invoices Balances"
                            path="/invoices"
                            navigate={handleNavigate}
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                        />

                        <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
                            Pages
                        </Typography>
                        <Item
                            title="Profile Form"
                            path="/form"
                            navigate={handleNavigate}
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                        />
                        <Item
                            title="Calendar"
                            path="/calendar"
                            navigate={handleNavigate}
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                        />
                        <Item
                            title="FAQ Page"
                            path="/faq"
                            navigate={handleNavigate}
                            icon={<HelpOutlineOutlinedIcon />}
                            selected={selected}
                        />

                        <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
                            Charts
                        </Typography>
                        <Item title="Bar Chart" path="/bar" navigate={handleNavigate} icon={<BarChartOutlinedIcon />} selected={selected} />
                        <Item
                            title="Pie Chart"
                            path="/pie"
                            navigate={handleNavigate}
                            icon={<PieChartOutlineOutlinedIcon />}
                            selected={selected}
                        />
                        <Item
                            title="Line Chart"
                            path="/line"
                            navigate={handleNavigate}
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                        />
                        <Item
                            title="Geography Chart"
                            path="/geography"
                            navigate={handleNavigate}
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};
