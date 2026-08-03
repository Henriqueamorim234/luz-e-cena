import Banner from "./components/Banner";
import Link from "./components/Link";

function App() {
  return (
    <>
      <Banner
        src={"./banners/BannerPrincipalDesktop.png"}
        alt={"banner principal"}
      />
      <Link href="/">Link</Link>
    </>
  );
}

export default App;
