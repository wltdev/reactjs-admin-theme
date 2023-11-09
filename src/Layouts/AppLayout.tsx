import React from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar2 } from '@/components/layouts/global/Siderbar2';
import { Topbar } from '@/components/layouts/global/Topbar';
import { LoadingComponent } from '@/components/LoadingComponent';

export const AppLayout = () => {
    return (
        <div className="app">
            <Sidebar2 />
            <main className="content">
                <Topbar />
                <div className="page">
                    <React.Suspense fallback={<LoadingComponent />}>
                        <Outlet />
                    </React.Suspense>
                </div>
            </main>
        </div>
    );
};
