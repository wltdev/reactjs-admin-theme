import { Route, Routes } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { Sidebar } from './components/layouts/global/Sidebar';
import { Sidebar2 } from './components/layouts/global/Siderbar2';
import { Topbar } from './components/layouts/global/Topbar';
import { AppContextProvider } from './context/AppContext';
import { Bar } from './pages/Bar';
import { Calendar } from './pages/Calendar';
import { Contacts } from './pages/Contacts';
import { Dashboard } from './pages/Dashboard';
import { FAQ } from './pages/FAQ';
import { Form } from './pages/Form';
import { Geography } from './pages/Geography';
import { Invoices } from './pages/Invoices';
import { Line } from './pages/Line';
import { Pie } from './pages/Pie';
import { Team } from './pages/Team';
import { ColorModeContext, useMode } from './theme';

function App() {
    const [theme, colorMode] = useMode();

    return (
        <AppContextProvider>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className="app">
                        {/* <Sidebar /> */}
                        <Sidebar2 />
                        <main className="content">
                            <Topbar />
                            <div className="page">
                                <Routes>
                                    <Route path="/" element={<Dashboard />} />
                                    <Route path="/team" element={<Team />} />
                                    <Route path="/invoices" element={<Invoices />} />
                                    <Route path="/contacts" element={<Contacts />} />
                                    <Route path="/bar" element={<Bar />} />
                                    <Route path="/form" element={<Form />} />
                                    <Route path="/line" element={<Line />} />
                                    <Route path="/pie" element={<Pie />} />
                                    <Route path="/faq" element={<FAQ />} />
                                    <Route path="/geography" element={<Geography />} />
                                    <Route path="/calendar" element={<Calendar />} />
                                </Routes>
                            </div>
                        </main>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </AppContextProvider>
    );
}

export default App;
