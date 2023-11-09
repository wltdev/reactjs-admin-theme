import styled from 'styled-components';

import { Button } from '@mui/material';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #fff;
    color: #2a3042;

    .MuiOutlinedInput-notchedOutline {
        border-color: #2a3042;
    }
`;

export const FormWrapper = styled.div`
    /* height: 100%; */
    width: 100%;

    padding: 68px 100px;

    @media (max-width: 600px) {
        padding: 20px;
    }

    .content {
        display: flex;
        flex-direction: column;
        width: 300px;
        max-width: 100%;

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media (max-width: 768px) {
            /* justify-content: flex-start; */
            /* margin-top: 40px; */
        }

        /* align-items: center; */
        color: blue;

        gap: 20px;

        h3 {
            font-size: 1.875rem;
            color: #2a3042;
        }
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;

    @media (max-width: 768px) {
        display: none;
    }

    img {
        width: 100%;
        height: 100vh;
        -o-object-fit: cover;
        object-fit: cover;
        -o-object-position: left;
        object-position: left;
        vertical-align: middle;
        border-style: none;
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    span {
        font-size: 24px;
        font-weight: 700;
    }
`;

export const Logo = styled.img`
    width: 60px;
    height: 60px;
`;

export const CButton = styled(Button)`
    margin-top: 10px;
    height: 54px;
    background-color: #2a3042 !important;
    font-weight: bold;

    color: #fff !important;

    &:hover {
        background-color: #2a3042cf !important;
    }
`;
