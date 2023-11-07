"use client"
import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { Poppins, Exo } from "@next/font/google";

import CreateEmotionCache from "../src/utils/createEmotionCache";
import { theme } from "../src/theme/theme";
import "../styles/globals.css";

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

const poppins = Poppins({ weight: ["400", "700"] });
const exo = Poppins({ weight: ["600"] });

const clientSideEmotionCache = CreateEmotionCache();

const lightTheme = createTheme(theme);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	return (
		<React.Fragment>
			<style jsx global>{`
        :root {
          --poppins-font: ${poppins.style.fontFamily};
          --exo-font: ${exo.style.fontFamily};
        }
      `}</style>
			<CacheProvider value={emotionCache}>
				<ThemeProvider theme={lightTheme}>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</CacheProvider>
		</React.Fragment>
	);
};

export default MyApp;
