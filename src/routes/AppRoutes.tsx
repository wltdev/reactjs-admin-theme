import { Route, Routes } from 'react-router-dom';

import { Bar } from '@/pages/Bar';
import { Calendar } from '@/pages/Calendar';
import { Contacts } from '@/pages/Contacts';
import { Dashboard } from '@/pages/Dashboard';
import { FAQ } from '@/pages/FAQ';
import { Form } from '@/pages/Form';
import { Geography } from '@/pages/Geography';
import { Invoices } from '@/pages/Invoices';
import { Line } from '@/pages/Line';
import { Pie } from '@/pages/Pie';
import { Team } from '@/pages/Team';

export const AppRoutes = () => {
    return (
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
    );
};
