import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';

import logoImg from '@/assets/logo.png';

import { Container, Logo } from './styles';

export const NotFound = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Container>
            <Logo src={logoImg} />
            <h1>404</h1>
            <p>A página solicitada não existe</p>

            <Button onClick={handleBack}>Voltar para o Início</Button>
        </Container>
    );
};
