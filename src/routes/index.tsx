import { useRoutes } from 'react-router-dom';

import config from '@/utils/application';

import { AppRoutes } from './AppRoutes';
import { AuthRoutes } from './AuthRoutes';

export const Routes = () => {
    let routes = [AppRoutes, AuthRoutes];

    return useRoutes(routes, config.basename);
};
