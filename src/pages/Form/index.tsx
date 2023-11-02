import { useForm, SubmitHandler } from 'react-hook-form';

import * as yup from 'yup';

import { Box, Button, TextField } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { FormErrorMessage } from '@/components/Forms/FormErrorMessage';
import { Header } from '@/components/Header';
import { User } from '@/domain/interfaces/User';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
    .object({
        name: yup.string().required(),
        email: yup.string().email('invalid email').required()
    })
    .required();

export const Form = () => {
    const isNonMobile = useMediaQuery('(min-width:600px)');

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields }
    } = useForm<User & { password_confirmation?: string }>({
        mode: 'all',
        defaultValues: {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        },
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<User> = (data) => console.log(data);

    return (
        <Box m="20px">
            <Header title="Create User" subtitle="Create a new user profile" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                        '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' }
                    }}
                >
                    <TextField
                        fullWidth
                        variant="filled"
                        error={!!touchedFields.name && !!errors.name}
                        helperText={touchedFields.name && errors.name && <FormErrorMessage error={String(errors.name?.message)} />}
                        type="text"
                        label="Name"
                        {...register('name')}
                        sx={{ gridColumn: 'span 2' }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        error={!!touchedFields.email && !!errors.email}
                        helperText={touchedFields.email && errors.email && <FormErrorMessage error={String(errors.email?.message)} />}
                        type="email"
                        label="Email"
                        {...register('email')}
                        sx={{ gridColumn: 'span 2' }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        error={!!touchedFields.password && !!errors.password}
                        helperText={touchedFields.email && errors.password && <FormErrorMessage error={String(errors.password?.message)} />}
                        type="password"
                        label="Password"
                        {...register('password')}
                        sx={{ gridColumn: 'span 2' }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        error={!!touchedFields.password_confirmation && !!errors.password_confirmation}
                        helperText={
                            touchedFields.password_confirmation &&
                            errors.password_confirmation && <FormErrorMessage error={String(errors.password_confirmation?.message)} />
                        }
                        type="password_confirmation"
                        label="Password Confirmation"
                        {...register('password_confirmation')}
                        sx={{ gridColumn: 'span 2' }}
                    />
                </Box>
                <Box display={'flex'} justifyContent={'end'} mt="20px">
                    <Button type="submit" color="secondary" variant="contained">
                        Create new User
                    </Button>
                </Box>
            </form>
        </Box>
    );
};
