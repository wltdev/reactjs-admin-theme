import React from 'react';
import { Outlet } from 'react-router-dom';

import { LoadingComponent } from '@/components/LoadingComponent';

export const AuthLayout = () => {
    return (
        <div>
            <React.Suspense fallback={<LoadingComponent fullSize />}>
                <Outlet />
            </React.Suspense>
        </div>
    );
};
