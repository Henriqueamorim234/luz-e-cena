import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection/Index";
import NewLetter from "./components/NewsLetter";

function App() {
  return (
    <>
      <Header />
      <Banner
        src={"./banners/BannerPrincipalDesktop.png"}
        alt={"banner principal"}
      />
      <MovieSection />
      <Banner src="./banners/Combo-Desktop.png" alt="banner Combo" />
      <NewLetter />
    </>
  );
}

export default App;
