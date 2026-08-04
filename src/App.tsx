import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection/Index";

function App() {
  return (
    <>
      <Header />
      <Banner
        src={"./banners/BannerPrincipalDesktop.png"}
        alt={"banner principal"}
      />
      <MovieSection />
    </>
  );
}

export default App;
