import React from 'react';

import { Button, useTheme } from '@mui/material';

import { tokens } from '@/theme';

type Props = {
    title: string;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
};
export const CButton: React.FC<Props> = ({ title, leftIcon, rightIcon }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Button
            sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                widows: '100%',
                fontSize: '14px',
                fontWeight: 'bold',
                padding: '10px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                alignItems: 'center',
                '&:hover': {
                    backgroundColor: colors.blueAccent[800]
                }
            }}
        >
            {leftIcon && leftIcon}

            <span>{title}</span>

            {rightIcon && rightIcon}
        </Button>
    );
};
