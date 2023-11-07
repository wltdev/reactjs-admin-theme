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
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import { useGlobal } from '@/context/GlobalContext';
import { tokens } from '@/theme';

import { MenuItem } from './MenuItem';
import { Container, EnterpriseLogo, EnterpriseName, LogoWrapper, Overlay, PlatformName } from './styles';

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
    const isNonMobile = useMediaQuery('(min-width:600px)');

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

    useEffect(() => {
        if (!isNonMobile) {
            dispatch({
                type: 'SET_SIDEBAR_COLLAPSED',
                payload: true
            });
        }
    }, [isNonMobile]);

    return (
        <>
            <Overlay bgcolor={colors.primary[400]} color={colors.grey[100]} collapsed={state.sidebarCollapsed} onClick={handleCollapse} />
            <Container bgcolor={colors.primary[400]} color={colors.grey[100]} collapsed={state.sidebarCollapsed}>
                <nav>
                    <LogoWrapper>
                        <PlatformName color={colors.grey[100]} collapsed={state.sidebarCollapsed}>
                            WLTDEV
                        </PlatformName>

                        {/* <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ minHeight: 100 }}>
                            <EnterpriseLogo
                                src="https://www.strunkmedia.com/wp-content/uploads/2018/05/bigstock-Print-163213010.png"
                                alt="Logo"
                                collapsed={state.sidebarCollapsed}
                            />
                            <EnterpriseName color={colors.grey[100]} collapsed={state.sidebarCollapsed}>
                                Strunk Media
                            </EnterpriseName>
                        </Box> */}
                        {/* {} */}
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
                                            title={String(item.title)}
                                            icon={item.icon ?? <></>}
                                            path={String(item.path)}
                                            collapsed={state.sidebarCollapsed}
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
        </>
    );
};
