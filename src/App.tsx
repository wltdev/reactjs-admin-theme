import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { LoadingComponent } from './components/LoadingComponent';
import { AppContextProvider } from './context/AppContext';
import { SET_LOGIN, useAuth } from './context/AuthContext';
import { Routes } from './routes';
import { ColorModeContext, useMode } from './theme';

function App() {
    const navigate = useNavigate();
    const [theme, colorMode] = useMode() as any;
    const { state, dispatch } = useAuth();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const user = JSON.parse(localStorage.getItem('user') as any);
            if (!user) {
                navigate('/login');
            } else {
                dispatch({
                    type: SET_LOGIN,
                    payload: user
                });
            }
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        return <LoadingComponent fullSize />;
    }

    return (
        <AppContextProvider>
            <ColorModeContext.Provider value={colorMode as any}>
                <ThemeProvider theme={theme as any}>
                    <CssBaseline />
                    <Routes />
                </ThemeProvider>
            </ColorModeContext.Provider>
        </AppContextProvider>
    );
}

export default App;
