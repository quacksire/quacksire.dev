// 1. import `NextUIProvider` component
import {createTheme, NextUIProvider} from '@nextui-org/react';

const lightTheme = createTheme({
    type: 'light',
})

const darkTheme = createTheme({
    type: 'dark',
})



function MyApp({ Component, pageProps }) {
    return (
        // 2. Use at the root of your app
        <NextUIProvider theme={darkTheme}>
            <Component {...pageProps} />
        </NextUIProvider>
    );
}

export default MyApp;
