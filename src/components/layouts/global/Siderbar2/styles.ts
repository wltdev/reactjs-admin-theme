import styled from 'styled-components';

type ContainerProps = {
    bgcolor: string;
    color: string;
    collapsed: boolean;
};

export const Overlay = styled.div<ContainerProps>`
    display: none;

    @media (max-width: 600px) {
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        position: fixed;
        display: ${({ collapsed }) => (collapsed ? 'none' : 'block')};
        /* overflow-y: hidden; */
        z-index: 0;
        background-color: #1818199e;
    }
`;

export const Container = styled.aside<ContainerProps>`
    display: flex;
    z-index: 1;

    height: 100vh;
    flex-grow: 1;
    width: ${({ collapsed }) => (collapsed ? '80px' : '300px')};

    @media (max-width: 600px) {
        width: 250px;
    }

    z-index: 90;
    padding: 23px 20px;
    transition: all 0.3s ease-in-out;
    background-color: ${({ bgcolor }) => bgcolor};
    overflow-y: auto;
    overflow-x: hidden;

    @media (max-width: 600px) {
        position: fixed;
        /* display: ${({ collapsed }) => (collapsed ? 'none' : 'block')}; */
        margin-left: ${({ collapsed }) => (collapsed ? 'calc(0px + -100%)' : '0')};
    }

    nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;

        /* padding-left: 10px; */
    }

    ul {
        margin: 40px 0 0 0;
        padding: 0;
        width: 100%;
    }
`;

type ItemProps = {
    color?: string;
    activeColor?: string;
    collapsed: boolean;
};

export const Item = styled.li<ItemProps>`
    margin-top: 1rem;
    padding: 0.4rem;
    position: relative;
    list-style: none;
    font-size: 14px;

    cursor: pointer;
    color: ${({ color }) => color};

    a {
        display: flex;
        gap: 1rem;
        align-items: center;
        width: 100%;
        text-decoration: none;
        position: relative;
        transition: all 0.2s ease;
        z-index: 12;

        &.active {
            .icon {
                color: yellow !important;
            }
        }

        &:hover {
            &::after {
                transform: scaleX(1);
            }
        }

        .icon {
            cursor: pointer;
            text-align: center;

            svg {
                width: 1.25rem;
                height: 1.25rem;
            }
        }

        .title {
            display: ${({ collapsed }) => (collapsed ? 'none' : 'block')};

            @media (max-width: 600px) {
                display: block !important;
            }

            white-space: nowrap;
            pointer-events: auto;
            transition: all 0.3s ease;

            &.active {
                color: ${({ activeColor }) => activeColor};
            }
        }
    }

    &.active {
        color: ${({ activeColor }) => activeColor};
    }

    &:hover {
        color: ${({ activeColor }) => activeColor};
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
`;

type PlatformNameProps = {
    collapsed: boolean;
    color?: string;
};

export const PlatformLogo = styled.img<{ collapsed: boolean }>`
    width: 40px;
    height: 40px;
`;

export const PlatformName = styled.span<PlatformNameProps>`
    font-size: ${({ collapsed }) => (collapsed ? '0.75rem' : '1.5rem')} !important;
    display: ${({ collapsed }) => (collapsed ? 'none' : 'block')};

    @media (max-width: 600px) {
        /* visibility: hidden; */
        display: block !important;
    }

    font-weight: 700;
    color: ${({ color }) => color};

    transition: all 0.4s ease;
`;

export const EnterpriseLogo = styled.img<PlatformNameProps>`
    width: ${({ collapsed }) => (collapsed ? '50px' : '100px')};

    @media (max-width: 600px) {
        width: 100px !important;
    }

    object-fit: contain;

    transition: all 0.3s ease;
`;

export const EnterpriseName = styled.span<PlatformNameProps>`
    font-size: ${({ collapsed }) => (collapsed ? '0.7rem' : '1.25rem')} !important;

    @media (max-width: 600px) {
        font-size: 1.25rem !important;
    }

    color: ${({ color }) => color};
    transition: all 0.3s ease;

    margin-top: 10px;
`;
