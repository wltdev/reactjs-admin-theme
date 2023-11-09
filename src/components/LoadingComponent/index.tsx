import { FC } from 'react';

import { CircularProgress } from '@mui/material';

import logoImg from '@/assets/logo.png';

import { Container, Logo } from './styles';

type Props = {
    fullSize?: boolean;
    hideLogo?: boolean;
};
export const LoadingComponent: FC<Props> = ({ fullSize = false, hideLogo }) => {
    return (
        <Container fullSize={fullSize}>
            {!hideLogo && <Logo src={logoImg} />}
            <CircularProgress />
        </Container>
    );
};
