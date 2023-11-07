import styled from 'styled-components';

type ContainerProps = {
    bgcolor: string;
    color: string;
};

export const Container = styled.aside<ContainerProps>`
    display: flex;
    flex-direction: column;

    height: 100vh;
    flex-grow: 1;
    width: 300px;
    z-index: 90;
    padding: 23px 20px;
    transition: all 0.5s ease;
    background-color: ${({ bgcolor }) => bgcolor};
    overflow-y: auto;
    overflow-x: hidden;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        /* font-size: 1rem; */
    }
`;

export const LogoWrapper = styled.div`
    width: 100%;
    min-height: 172px;
    /* text-align: end; */

    img {
        object-fit: contain;
        width: 100px;
        height: 100px;
    }
`;

type ItemProps = {
    color?: string;
    activeColor?: string;
};

export const Item = styled.li<ItemProps>`
    margin-top: 1rem;
    padding: 0.4rem;

    cursor: pointer;
    color: ${({ color }) => color};

    &.active {
        color: ${({ activeColor }) => activeColor};
    }

    &:hover {
        color: ${({ activeColor }) => activeColor};
    }

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
            white-space: nowrap;
            pointer-events: auto;
            transform: all 0.4s ease;

            &.active {
                color: ${({ activeColor }) => activeColor};
            }
        }
    }
`;
