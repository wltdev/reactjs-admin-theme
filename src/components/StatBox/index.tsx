import { FC } from 'react';

import { Box, Typography, useTheme } from '@mui/material';

import { tokens } from '@/theme';

import { ProgressCircle } from '../ProgressCircle';

type Props = {
    title: string;
    subtitle: string;
    icon: any;
    progress: number;
    increase?: string;
};
export const StatBox: FC<Props> = ({ title, subtitle, icon, progress, increase }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width={'100%'} m="0 30px">
            <Box display="flex" justifyContent={'space-between'}>
                <Box>
                    {icon}
                    <Typography variant="h4" fontWeight={'bold'} sx={{ color: colors.grey[100] }}>
                        {title}
                    </Typography>
                </Box>
                <Box>
                    <ProgressCircle progress={progress} />
                </Box>
            </Box>

            <Box display={'flex'} justifyContent="space-between">
                <Typography variant="h5" sx={{ color: colors.grey[200] }}>
                    {subtitle}
                </Typography>
                <Typography variant="h5" fontStyle={'italic'} sx={{ color: colors.blueAccent[400] }}>
                    {increase}
                </Typography>
            </Box>
        </Box>
    );
};
