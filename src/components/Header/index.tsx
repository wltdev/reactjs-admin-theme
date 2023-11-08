import { Typography, Box, useTheme } from '@mui/material';

import { tokens } from '@/theme';

type HeaderProps = {
    title: string;
    subtitle: string;
};
export const Header = ({ title, subtitle }: HeaderProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box mb="30px">
            <Typography variant="h3" color={colors.grey[100]} fontWeight="bold" sx={{ m: '0 0 5px 0' }}>
                {title}
            </Typography>
            <Typography variant="h5" color={colors.grey[100]}>
                {subtitle}
            </Typography>
        </Box>
    );
};
