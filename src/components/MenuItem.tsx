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
    <div className="p-2 flex gap-2 items-center">
      <img className="w-28 h-28 rounded-md" src={image} alt={name} />
      <div className="w-full">
        <p className="font-bold">{name}</p>
        <p className="text-sm">{description}</p>
        <div className="flex items-center gap-2 justify-between mt-2">
          <p className="font-bold text-lg">R$ {price.toFixed(2)}</p>
          <button
            className="hover:cursor-pointer px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200"
            onClick={() => addToCart(name, price)}
          >
            <i className="fa fa-cart-plus text-lg text-white"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
