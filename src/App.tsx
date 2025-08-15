import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import Main from './components/Main';

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    });

    return (
        <div className='app flex min-h-screen flex-col bg-gradient-to-r from-teal-900 to-sky-900'>
            <QueryClientProvider client={queryClient}>
                <Header />
                <Main />
            </QueryClientProvider>
        </div>
    );
}

export default App;
