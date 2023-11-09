import React from 'react';
import { Outlet } from 'react-router-dom';

import { LoadingComponent } from '@/components/LoadingComponent';

export const AuthLayout = () => {
    return (
        <React.Suspense fallback={<LoadingComponent fullSize />}>
            <Outlet />
        </React.Suspense>
    );
};
