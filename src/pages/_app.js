import { UserProvider } from "@/context";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window.gtag === "function") {
        window.gtag("config", "G-J0PM9W5MSQ", {
          page_path: url,
        });
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Head>
          {/* Google Analytics Global Site Tag */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-J0PM9W5MSQ"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-J0PM9W5MSQ');
              `,
            }}
          />
        </Head>
        <Component {...pageProps} />
        <Toaster />
      </UserProvider>
    </QueryClientProvider>
  );
}
