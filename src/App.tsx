import { CssBaseline, ThemeProvider } from '@mui/material';

import { AppContextProvider } from './context/AppContext';
import { Layouts } from './Layouts';
import { ColorModeContext, useMode } from './theme';

function App() {
    const [theme, colorMode] = useMode();

    return (
        <AppContextProvider>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Layouts />
                </ThemeProvider>
            </ColorModeContext.Provider>
        </AppContextProvider>
    );
}

export default App;
