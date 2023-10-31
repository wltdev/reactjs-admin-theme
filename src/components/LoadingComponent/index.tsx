import { CircularProgress } from '@mui/material';

import { Container } from './styles';

export const LoadingComponent = ({ fullSize = false }) => {
    return (
        <Container fullSize={fullSize}>
            <CircularProgress />
        </Container>
    );
};
