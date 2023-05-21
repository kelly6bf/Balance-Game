import Layout from "@/components/layout/Layout";
import Loading from "@/components/loading/Loading";
import GlobalStyles from "@/styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "jotai";
import type { AppProps } from "next/app";

const queryClient = new QueryClient();

// if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
//   import("../mocks");
// }

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
          <Loading />
        </Layout>
      </Provider>
    </QueryClientProvider>
  );
}
