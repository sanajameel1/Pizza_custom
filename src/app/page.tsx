import Banner from "./Components/Banner";
import Card from "../app/Components/Card";
import Carousel from "./Components/Carsoul";
import Footer from "./Components/Footer";
import Menuitems from "./Components/Menuitems";
import Offer from "./Components/Offer";
import Pizza from "./Components/Pizza";
import ProductList from "./Components/Pizza";                
import Progressor from "./Components/Progressor";
import Reservation from "./Components/Reservation";
import Testimonals from "./Components/Testimonals";
import Header from "./Components/Header";

export default function page() {
  return (
    <div>
      <Header/>
      <Carousel/>
      <Progressor/>
      <Banner/>
<Card/>
<Menuitems/>
<Offer/>
<Pizza/>
<ProductList/>
<Reservation/>
<Testimonals/>
<Footer/>
    </div>
  )
}







