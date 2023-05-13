import Products from "./commponent/Products";
import CategorySlider from "./commponent/CategorySlider";
import Carasoul from "./commponent/Carasoul";
import { productsItem } from "../../../data/db";
import Brands from "./commponent/Brands"
import Clothes from "./commponent/Clothes";
import BabyClothes from "./commponent/BabyClothes";
import FoodProducts from "./commponent/FoodProducts";


const Home = () => {

  return (
    <main>
      <Carasoul />
      <CategorySlider />
      <div className="container  mt-5 ">
        <div className="row g-3 py-3 ">
          <h2>Clothes</h2>
          {productsItem.map((item) => (
            <Products
              key={item.id}
              src={item.src}
              alt={item.alt}
              title={item.title}
              text={item.text}
              rate={item.rate}
              money={item.money}
              currency={item.currency}
            />
          ))}
        </div>
      </div>
      <Clothes />
      <BabyClothes />
      <FoodProducts/>
      <Brands />
    </main>
  );
};

export default Home;