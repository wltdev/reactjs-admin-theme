import { useEffect, useState } from 'react';

import { AppLayout } from './AppLayout';
import { AuthLayout } from './AuthLayout';

export const Layouts = () => {
    const [isLogged, setIsLogged] = useState(true);

    return <>{isLogged ? <AppLayout /> : <AuthLayout />}</>;
};
