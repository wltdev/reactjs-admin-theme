import { CombineComponents } from './CombineContexts';
import { GlobalContextProvider } from './GlobalContext';

const providers = [GlobalContextProvider];
export const AppContextProvider = CombineComponents({ components: providers });
