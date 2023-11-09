import { AuthContextProvider } from './AuthContext';
import { CombineComponents } from './CombineContexts';
import { GlobalContextProvider } from './GlobalContext';

const providers = [GlobalContextProvider, AuthContextProvider];
export const AppContextProvider = CombineComponents({ components: providers });
