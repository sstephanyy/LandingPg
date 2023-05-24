import Advantages from "../Landing/advantages/standard";
import Footer from "../Landing/footer/standard";
import Header from "../Landing/header/standard";
import Testimonials from "../Landing/testimonials/standard";
import Trending from "../Landing/trending/standard";
import { Page } from "../Template/Page";

export default function Landing() {
  return (
  <Page>
    <Advantages/>
    <Footer/>
    <Header/>
    <Testimonials/>
    <Trending/>
  </Page>
  );
}
