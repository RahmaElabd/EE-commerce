import { AiFillStar } from "react-icons/ai";
import cloimg from "../../../assets/clothes.jpg"
const Products = ({  alt, title, text, rate, money, currency, id }) => {
  
  return (
    <>
      <div className="col-sm-6 col-lg-4 col-xl-3 col-xxl-2  " key={id}>
        <div className="card card-products ">
          <img src={cloimg} alt={alt}></img>
          <div className="product-text">
            <span className="text-success">{title}</span>
            <h2 className="h6 fw-bold">{text}</h2>
            <div className="d-flex justify-content-between ">
              <p>
                {money}
                {currency}
              </p>
              <i>
                <AiFillStar className="icon-star" /> {rate}
              </i>
            </div>
            <button className="btn text-white w-100"> + ADD </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
