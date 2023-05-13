import {useParams} from 'react'
import ProductsDetalis from './commponent/productsDetalis';


const ProductsPage = () => {
  // const { id } = useParams();

  return (
    
    <div>
      <div className="container">
        <div className="row g-3 py-3  align-items-center ">
          <ProductsDetalis        
            alt="grocery"
            text1=" It was popularised in the 196Maker including versions of Lorem Ipsum."
            text2=" Lorem Ipsum has been the industry's ries."
            title=" Electrons"
            rate="4.8"
            money="50"
            currency="EGP"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage
