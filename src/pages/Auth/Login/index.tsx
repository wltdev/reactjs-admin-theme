import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import * as yup from 'yup';

import { TextField } from '@mui/material';

import logoImg from '@/assets/logo.png';
import { FormErrorMessage } from '@/components/Forms/FormErrorMessage';
import { SET_LOGIN, useAuth } from '@/context/AuthContext';
import { yupResolver } from '@hookform/resolvers/yup';

import { CButton, Container, FormWrapper, ImageWrapper, Logo, LogoWrapper } from './styles';

const schema = yup
    .object({
        email: yup.string().email('invalid email').required(),
        password: yup.string().min(6).required()
    })
    .required();

export const Login = () => {
    const { dispatch } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields }
    } = useForm<{ email: string; password: string }>({
        mode: 'all',
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<{ email: string; password: string }> = (data) => {
        localStorage.setItem('user', JSON.stringify(data));

        dispatch({
            type: SET_LOGIN,
            payload: data
        });
        navigate('/');
    };

    return (
        <Container>
            <FormWrapper>
                <div className="content">
                    <LogoWrapper className="logo">
                        <Logo src={logoImg} />
                        <span>WLTDEV</span>
                    </LogoWrapper>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3>LogIn</h3>

                        <TextField
                            fullWidth
                            variant="outlined"
                            error={!!touchedFields.email && !!errors.email}
                            helperText={touchedFields.email && errors.email && <FormErrorMessage error={String(errors.email?.message)} />}
                            type="email"
                            label="Email"
                            {...register('email')}
                            autoComplete="off"
                            inputProps={{ style: { fontSize: 15, color: 'GrayText' } }}
                            InputLabelProps={{ style: { fontSize: 15, color: 'GrayText' } }}
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            error={!!touchedFields.password && !!errors.password}
                            helperText={
                                touchedFields.email && errors.password && <FormErrorMessage error={String(errors.password?.message)} />
                            }
                            type="password"
                            label="Password"
                            {...register('password')}
                            autoComplete="off"
                            inputProps={{ style: { fontSize: 15, color: 'GrayText' } }}
                            InputLabelProps={{ style: { fontSize: 15, color: 'GrayText' } }}
                        />
                        <CButton type="submit">Login</CButton>
                    </form>
                </div>
            </FormWrapper>
            <ImageWrapper>
                <img src="https://demo.bootstrapdash.com/login-template-free-1/assets/images/login.jpg" />
            </ImageWrapper>
        </Container>
    );
};
