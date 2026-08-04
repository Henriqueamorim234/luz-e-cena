import Banner from "./components/Banner";
import Footer from "./components/Footer";
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
      <Footer />
    </>
  );
}

export default App;
