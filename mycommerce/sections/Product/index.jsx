
import { useGetProductQuery } from '@/store/services/webcommerceApi'
import Rating from '@/components/Rating'
const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      brand: 'Apple',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    }
    // More products...
  ]

  export const Product = () => {
    const { data , error, isLoading } = useGetProductQuery();
    return (
      <div className="bg-white">
        {
        isLoading ? (
          <div> </div> ) : (        
        
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data?.data?.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={`assets/images/${product?.images[0]?.url}`}
                    alt={product?.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h2>{product.brand}</h2>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <Rating rating={4.5} />
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
        )}
      </div>
    )
  }

  export default Product;