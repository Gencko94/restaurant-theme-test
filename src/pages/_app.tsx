import { AppProps } from "next/app";
import "@/styles/global.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { Hydrate } from "react-query/hydration";
import ThemeContext from "@/context/ThemeContext";
import "swiper/swiper.scss";
import GeneralContext from "@/context/GeneralContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeContext>
          <GeneralContext>
            <Component {...pageProps} />
          </GeneralContext>
        </ThemeContext>
      </Hydrate>
    </QueryClientProvider>
  );
}
