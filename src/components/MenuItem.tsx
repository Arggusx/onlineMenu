import React from "react";

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
  addToCart: (name: string, price: number) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price, image, addToCart }) => {
  return (
    <div className="p-4 flex gap-4 items-center bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <img
      className="w-28 h-28 rounded-lg object-cover"
      src={image}
      alt={name}
    />
    <div className="w-full flex flex-col justify-between">
      <div>
        <p className="font-semibold text-lg text-gray-800">{name}</p>
        <p className="text-sm text-gray-600 mt-1 leading-relaxed">{description}</p>
      </div>
      <div className="flex items-center justify-between mt-3">
        <p className="font-bold text-xl text-gray-900">R$ {price.toFixed(2)}</p>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 hover:scale-105 transform transition-all duration-200 flex items-center gap-2"
          onClick={() => addToCart(name, price)}
        >
          <i className="fa fa-cart-plus text-lg"></i>
          <span className="text-sm font-medium">Adicionar</span>
        </button>
      </div>
    </div>
</div>
  );
};

export default MenuItem;
