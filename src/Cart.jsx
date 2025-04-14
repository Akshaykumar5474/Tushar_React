import React from 'react';

const CartItem = ({ product }) => {
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    thumbnail,
    minimumOrderQuantity,
    shippingInformation,
  } = product;

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-md flex flex-col sm:flex-row items-start sm:items-center gap-4">
      {/* Product Image */}
      <img
        src={thumbnail}
        alt={title}
        className="w-24 h-24 object-contain rounded-md border"
      />

      {/* Product Info */}
      <div className="flex-1 space-y-1">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex items-center text-sm text-yellow-500">
          <span className="font-medium">Rating:</span>
          <span className="ml-1 text-gray-700">{rating}</span>
        </div>
        <div className="text-sm text-red-600 font-medium">
          Only <span className="font-bold">{stock} left</span> in stock!
        </div>
      </div>

      {/* Pricing & Actions */}
      <div className="text-right space-y-2">
        <div className="text-gray-800 font-semibold text-lg">${price.toFixed(2)}</div>
        <div className="text-sm text-green-600">{discountPercentage}% off</div>
        <button
          className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition disabled:opacity-50"
          disabled
        >
          Min Qty: {minimumOrderQuantity}
        </button>
        <p className="text-xs text-gray-400 italic">{shippingInformation}</p>
      </div>
    </div>
  );
};

export default CartItem;