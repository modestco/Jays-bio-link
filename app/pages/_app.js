import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-black">
      <Component {...pageProps} />
    </div>
  );
}
