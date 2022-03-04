import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-container">
      <a href="https://www.instagram.com/riaachakravarty/" target="_blank" rel="noreferrer noopener" id="name">
        Ria Chakravarty
      </a>
      <Component {...pageProps} />
      <a
        href="https://www.instagram.com/tilldeathwedoart2020/"
        target="_blank"
        rel="noreferrer noopener"
        id="instagram-link"
      >
        Follow me
        <img src="/instagram.svg" alt="instagram_link" />
      </a>
    </div>
  );
}

export default MyApp
