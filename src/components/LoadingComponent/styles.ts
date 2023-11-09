import styled from 'styled-components';

type ContainerProps = {
    fullSize: boolean;
};
export const Container = styled.div<ContainerProps>`
    width: ${(props) => (props.fullSize ? '100vw' : '100%')};
    height: ${(props) => (props.fullSize ? '100vh' : '100%')};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

export const Logo = styled.img`
    width: 100px;
    height: 100px;
`;
