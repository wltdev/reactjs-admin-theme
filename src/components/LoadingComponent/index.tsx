import { FC } from 'react';
import { FingerprintSpinner } from 'react-epic-spinners';

import logoImg from '@/assets/logo.png';

import { Container, Logo } from './styles';

type Props = {
    fullSize?: boolean;
    hideLogo?: boolean;
};
export const LoadingComponent: FC<Props> = ({ fullSize = false, hideLogo }) => {
    return (
        <>
            <Container fullSize={fullSize}>
                {/* {!hideLogo && <Logo src={logoImg} />} */}
                <FingerprintSpinner color={'#6261E5'} size={150} />
                <span>Loading...</span>
            </Container>
        </>
    );
};
