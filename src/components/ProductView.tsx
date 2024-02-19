import './styles/product.css'; 
import { useProducts } from '../hooks/useProducts';
import { ProductDetails } from './ProductDetails';

const ProductView = () => {

const {isLoading, error, products} = useProducts()
   console.log(products)
  return (
    <div className="product-container">
        {isLoading && <strong>Loading...</strong>}
        {error && <p>There was an error</p>}
        {products && <ProductDetails data={products} />}      
    </div>
  );
};

export default ProductView;
