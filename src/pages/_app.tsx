import DarkModeProvider from '@/context/darkMode';
import GlobalStyle from '@/theme/GlobalStyle';
import ThemeProvider from '@/theme/ThemeProvider';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <DarkModeProvider>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </DarkModeProvider>
  )
}
