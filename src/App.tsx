import { ErrorBoundary, Header, PageLayout } from '@components/Layout';
import { Routes } from '@routes';
import { store } from '@store';
import { theme } from '@theme';
import { ThemeProvider } from '@utils';
import i18n from 'i18n';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <I18nextProvider i18n={i18n}>
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
        </I18nextProvider>
    );
}

export default App;
