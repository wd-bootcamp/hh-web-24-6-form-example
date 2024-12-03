import { SWRConfig } from "swr";

function fetcher(url) {
  return fetch(url).then((response) => response.json());
}

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}
