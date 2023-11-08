import ExpeandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, useTheme, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

import { Header } from '@/components/Header';
import { tokens } from '@/theme';

export const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="50px 20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
            <Box m="40px 0 0 0" display={'flex'} flexDirection="column" gap={1}>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpeandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            An Important Question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                            lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpeandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            Another Important Question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                            lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpeandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            Your Favorite Question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                            lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpeandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            Some Random Question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                            lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpeandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            The Final Question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                            lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    );
};
