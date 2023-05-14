import { ErrorBoundary, Header, PageLayout } from '@components/Layout';
import { Routes } from '@routes';
import { store } from '@store';
import { theme } from '@theme';
import { ThemeProvider } from '@utils';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <BrowserRouter>
                    <ErrorBoundary>
                        <PageLayout>
                            <Header />
                            <Routes />
                        </PageLayout>
                    </ErrorBoundary>
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
