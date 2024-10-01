import { useLocation } from 'react-router-dom';
const Product = () => {
    const location = useLocation();
    const { product } = location.state;
  
    return (
        <div className="product-detail-container mx-5 my-5 sm:mx-20 lg:mx-28">
        <div className="flex flex-col bg-gray-100 rounded lg:flex-row">
          <div className="product-image p-4">
            <img
              src={product.photoURL}
              alt={product.product}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          <div className="product-info w-full p-4 lg:pt-5 pt-1">
            <h1 className="text-2xl font-bold mb-1">{product.product}</h1>
            <p className="text-xl font-bold text-green-600 mb-1">
              ₹ {product.price.toLocaleString('en-IN')}
            </p>
            <p className="text-gray-600 mb-1">{product.place}</p>
            <p className="text-gray-500">Posted on {product.date}</p>
          </div>
        </div>
        <div className="product-description bg-gray-100 p-4 rounded-md my-4">
          <h2 className="text-xl font-bold mb-3">Description</h2>
          <p className="text-gray-700">{product.description}</p>
        </div>
        <div className="seller-info bg-white p-4 rounded-md shadow-lg my-4">
          <h2 className="text-xl font-bold mb-3">Seller Details</h2>
          <p className="text-lg text-gray-700"> <span className='font-semibold'>Seller:</span> {product.seller.name}</p>
          <p className="text-lg text-gray-700"><span className='font-semibold'>Contact:</span> {product.seller.contact}</p>
          <button className="mt-3 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
            Chat with Seller
          </button>
        </div>
        <div className="additional-options flex flex-col lg:flex-row gap-4 mt-6">
          <button className="w-full lg:w-auto border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition-all">
            View More Ads from {`"${product.seller.name}"`}
          </button>
          <button className="w-full lg:w-auto border border-red-500 text-red-500 font-semibold py-2 px-4 rounded hover:bg-red-100 transition-all">
            Report this Ad
          </button>
        </div>
      </div>
    );
}

export default Product