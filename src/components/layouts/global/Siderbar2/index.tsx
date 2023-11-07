import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
import { Box, Typography, useTheme } from '@mui/material';

import { useGlobal } from '@/context/GlobalContext';
import { tokens } from '@/theme';

import { MenuItem } from './MenuItem';
import { Container, LogoWrapper } from './styles';

const DATA = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <HomeOutlinedIcon />
    },
    {
        divider: 'Data'
    },
    {
        title: 'Manage Team',
        path: '/team',
        icon: <PeopleOutlinedIcon />
    },
    {
        title: 'Contacts',
        path: '/contacts',
        icon: <ContactsOutlinedIcon />
    },
    {
        title: 'Invoices Balances',
        path: '/invoices',
        icon: <ReceiptOutlinedIcon />
    },
    {
        divider: 'Pages'
    },
    {
        title: 'Profile Form',
        path: '/form',
        icon: <PersonOutlinedIcon />
    },

    {
        title: 'Calendar',
        path: '/calendar',
        icon: <CalendarTodayOutlinedIcon />
    },
    {
        title: 'FAQ Page',
        path: '/faq',
        icon: <HelpOutlineOutlinedIcon />
    },
    {
        divider: 'Charts'
    },
    {
        title: 'Bar Chart',
        path: '/bar',
        icon: <BarChartOutlinedIcon />
    },
    {
        title: 'Pie Chart',
        path: '/pie',
        icon: <PieChartOutlineOutlinedIcon />
    },
    {
        title: 'Line Chart',
        path: '/line',
        icon: <TimelineOutlinedIcon />
    },
    {
        title: 'Geography Chart',
        path: '/geography',
        icon: <MapOutlinedIcon />
    }
];
export const Sidebar2 = () => {
    const theme = useTheme();
    const { state, dispatch } = useGlobal();
    const colors = tokens(theme.palette.mode);
    // const isNonMobile = useMediaQuery('(min-width:600px)');

    const route = useLocation();
    const navigate = useNavigate();

    const [selected, setSelected] = useState('/');

    const handleNavigate = (link: string) => {
        navigate(link);
        setSelected(link);
    };

    const handleCollapse = () => {
        dispatch({
            type: 'SET_SIDEBAR_COLLAPSED',
            payload: !state.sidebarCollapsed
        });
    };

    useEffect(() => {
        setSelected(route.pathname);
    }, []);

    return (
        <Container bgcolor={colors.primary[400]} color={colors.grey[100]}>
            <nav>
                <LogoWrapper>
                    {/* <img src="https://www.strunkmedia.com/wp-content/uploads/2018/05/bigstock-Print-163213010.png" alt="Logo" /> */}
                    <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                        <Typography variant="h3" color={colors.grey[100]}>
                            WLTDEV
                        </Typography>
                    </Box>
                </LogoWrapper>
                <ul>
                    {DATA.map((item, index) => {
                        return (
                            <>
                                {item.divider ? (
                                    <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 0' }}>
                                        {item.divider}
                                    </Typography>
                                ) : (
                                    <MenuItem
                                        key={index}
                                        title={item.title}
                                        icon={item.icon}
                                        path={item.path}
                                        navigate={handleNavigate}
                                        selected={selected}
                                        color={colors.grey[100]}
                                        activeColor={colors.greenAccent[500]}
                                    />
                                )}
                            </>
                        );
                    })}
                </ul>
            </nav>
        </Container>
    );
};
