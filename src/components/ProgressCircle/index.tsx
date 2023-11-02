import { FC } from 'react';

import { Box, useTheme } from '@mui/material';

import { tokens } from '@/theme';

type Props = {
    progress?: number;
    size?: number;
};
export const ProgressCircle: FC<Props> = ({ progress = 0.75, size = 40 }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const angles = progress * 360;

    return (
        <Box
            sx={{
                background: `
                    radial-gradient(${colors.primary[400]} 55%, transparent 56%), 
                    conic-gradient(transparent 0deg ${angles}deg, ${colors.blueAccent[500]} ${angles}deg 360deg), 
                    ${colors.greenAccent[500]}
                `,
                borderRadius: '50%',
                width: `${size}px`,
                height: `${size}px`
            }}
        />
    );
};
