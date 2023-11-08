import { useState } from 'react';

import { AppRoutes } from './AppRoutes';
import { AuthRoutes } from './AuthRoutes';

export const Routes = () => {
    const [isLogged, setIslogged] = useState(true);

    return <>{isLogged ? <AppRoutes /> : <AuthRoutes />}</>;
};
