import { ProductWithID } from '../../types';
import './styles/product.css'

interface ProductDetailsProps {
    data: ProductWithID;
}
export const ProductDetails = ({ data }: ProductDetailsProps) => {
    // function Product({ data }: { data: ProductWithID }) {
    //     return (
    //         <div className="product">
    //             <h2>{data.name}</h2>
    //             <p>Brand: {data.brand}</p>
    //             <p>Model: {data.model}</p>
    //             <p>Price: {data.price}</p>
    //             <p>Manufacturer: {data.manufacturer}</p>
    //             <p>Features: {data.features.join(', ')}</p>
    //             <p>Dimensions: {data.dimensions.length} x {data.dimensions.width} x {data.dimensions.height}</p>
    //             <p>Weight: {data.weight}</p>
    //             <p>Availability: {data.availability}</p>
    //         </div>
    //     )
    // }
    return (
            <div className="product">
                <h2>{data.name}</h2>
                <p>Brand: {data.brand}</p>
                <p>Model: {data.model}</p>
                <p>Price: {data.price}</p>
                <p>Manufacturer: {data.manufacturer}</p>
                <p>Features: {data.features.join(', ')}</p>
                <p>Dimensions: {data.dimensions.length} x {data.dimensions.width} x {data.dimensions.height}</p>
                <p>Weight: {data.weight}</p>
                <p>Availability: {data.availability}</p>
            </div>
        
    )
}