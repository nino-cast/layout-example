import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import 'tailwindcss/tailwind.css';
import { ReactElement, ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { red } from '@mui/material/colors';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
