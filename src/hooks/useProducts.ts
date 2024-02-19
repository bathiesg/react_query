import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../services/products';
import { ProductWithID } from '../../types';

export const useProducts = () => {
    const {isLoading, error, data} = useQuery<ProductWithID[]>(
        {
            queryKey: ['product'], queryFn: getProduct
        }
    )
   
  return {isLoading, error, products: data?.record ?? []}
}