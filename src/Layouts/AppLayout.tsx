import { Sidebar2 } from '@/components/layouts/global/Siderbar2';
import { Topbar } from '@/components/layouts/global/Topbar';
import { AppRoutes } from '@/routes/AppRoutes';

export const AppLayout = () => {
    return (
        <div className="app">
            <Sidebar2 />
            <main className="content">
                <Topbar />
                <div className="page">
                    <AppRoutes />
                </div>
            </main>
        </div>
    );
};
