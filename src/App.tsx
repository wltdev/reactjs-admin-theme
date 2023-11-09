import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { LoadingComponent } from './components/LoadingComponent';
import { AppContextProvider } from './context/AppContext';
import { Routes } from './routes';
import { ColorModeContext, useMode } from './theme';

function App() {
    const navigate = useNavigate();
    const [theme, colorMode] = useMode();
    const [isLoading, setIsLoading] = useState(true);
    const [isLogged, setIslogged] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            if (!isLogged) {
                navigate('/login');
            } else {
                navigate('/');
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
