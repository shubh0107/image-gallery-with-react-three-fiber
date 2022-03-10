import Image from "next/image";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-container">
      <p id="title">
        Please Scroll to View Gallery ➡️
      </p>
      <Component {...pageProps} />
      <div className="social-links">
        <span>Shubham Singh</span>
        <a
          href="https://github.com/shubh0107/"
          target="_blank"
          rel="noreferrer noopener"
          id="github-link"
        >
          <Image src="/github.svg" alt="github_link" width={30} height={30} id="github-icon" />
        </a>
        <a
          href="https://twitter.com/shoe_bam"
          target="_blank"
          rel="noreferrer noopener"
          id="twitter-link"
        >
          <Image src="/twitter.svg" alt="twitter_link" width={30} height={30} id="twitter-icon" />
        </a>
      </div>
    </div>
  );
}

export default MyApp
