import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { Topbar } from './components/layouts/global/Topbar';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Team } from './pages/Team';
import { Invoices } from './pages/Invoices';
import { Contacts } from './pages/Contacts';
import { Bar } from './pages/Bar';
import { Form } from './pages/Form';
import { Line } from './pages/Line';
import { Pie } from './pages/Pie';
import { FAQ } from './pages/FAQ';
import { Geography } from './pages/Geography';
import { Calendar } from './pages/Calendar';
import { Sidebar } from './components/layouts/global/Sidebar';

function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar />
                    <main className="content">
                        <Topbar />
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
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
