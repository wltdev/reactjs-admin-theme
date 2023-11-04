import { Sidebar as ProSidebar, Sidebar } from 'react-pro-sidebar';

import styled from 'styled-components';

import { Typography } from '@mui/material';

type AvatarProps = {
    isCollapsed?: boolean;
};

export const UserAvatar = styled.img<AvatarProps>`
    cursor: pointer;
    border-radius: 50%;
    object-fit: cover;

    width: ${({ isCollapsed }) => (isCollapsed ? 60 : 100)}px;
    height: ${({ isCollapsed }) => (isCollapsed ? 60 : 100)}px;
`;

export const UserName = styled(Typography)<AvatarProps>`
    font-size: ${({ isCollapsed }) => (isCollapsed ? '0.8rem' : '1.25rem')};
`;

type SidebarProps = {
    bgcolor: string;
};

export const SiderBarContainer = styled(ProSidebar)<SidebarProps>`
    & .ps-sidebar-container {
        background: ${({ bgcolor }) => bgcolor} !important;
    }

    & .ps-menu-button:hover {
        color: #868dfb !important;
        background-color: transparent !important;
    }

    & .ps-menuitem-root .ps-active {
        color: #6870fa !important;
        font-weight: 800;
    }

    border: none !important;
`;
