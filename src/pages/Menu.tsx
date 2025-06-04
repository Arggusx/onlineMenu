import React, { useState } from "react";
import MenuItem from "../components/MenuItem";
import menuItems from "../itensData";
import Footer from "../components/Footer";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
const Menu: React.FC = () => {
  const [selectedJuiceType, setSelectedJuiceType] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (id: number, name: string, price: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { id, name, price, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (name: string) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <section>
      {/* BURGERS ARTESANAIS */}
      <h2
        id="artesanal"
        className="text-3xl md:text-4xl font-bold text-amber-800 mb-10 mx-auto max-w-6xl px-4 pt-20 relative after:content-[''] after:absolute after:left-4 after:bottom-[-8px] after:w-16 after:h-1 after:bg-amber-500 after:rounded-full"
      >
        Burgers Artesanais
      </h2>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-6xl px-4 py-6 bg-gradient-to-t to-amber-100 from-amber-50 border-2 border-amber-200 rounded-3xl">
        {menuItems
          .filter((item) => item.type === "artesanal")
          .map((item, index) => (
            <MenuItem key={index} {...item} addToCart={addToCart} />
          ))}
      </main>

      {/* BURGERS TRADICIONAIS */}
      <h2
        id="tradicional"
        className="text-3xl md:text-4xl font-bold text-amber-800 mb-10 mx-auto max-w-6xl px-4 pt-20 relative after:content-[''] after:absolute after:left-4 after:bottom-[-8px] after:w-16 after:h-1 after:bg-amber-500 after:rounded-full"
      >
        Burgers Tradicionais
      </h2>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-6xl px-4 py-6 bg-gradient-to-t to-amber-100 from-amber-50 border-2 border-amber-200 rounded-3xl">
        {menuItems
          .filter((item) => item.type === "tradicional")
          .map((item, index) => (
            <MenuItem key={index} {...item} addToCart={addToCart} />
          ))}
      </main>

      {/* SOBREMESAS */}
      <h2
        id="sobremesa"
        className="text-3xl md:text-4xl font-bold text-pink-700 mb-10 mx-auto max-w-6xl px-4 pt-20 relative after:content-[''] after:absolute after:left-4 after:bottom-[-8px] after:w-16 after:h-1 after:bg-pink-400 after:rounded-full"
      >
        Sobremesas
      </h2>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-6xl px-4 py-6 bg-gradient-to-t to-pink-100 from-pink-50 border-2 border-pink-200 rounded-3xl">
        {menuItems
          .filter((item) => item.type === "sobremesa")
          .map((item, index) => (
            <MenuItem key={index} {...item} addToCart={addToCart} />
          ))}
      </main>

      {/* BEBIDAS */}
      <h2
        id="bebida"
        className="text-3xl md:text-4xl font-bold text-blue-700 mb-10 mx-auto max-w-6xl px-4 pt-20 relative after:content-[''] after:absolute after:left-4 after:bottom-[-8px] after:w-16 after:h-1 after:bg-blue-400 after:rounded-full"
      >
        Bebidas
      </h2>

      {/* REFRIGERANTES */}
      <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-10 px-4 mx-auto max-w-6xl">
        Refrigerantes
      </h3>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-6xl px-4 py-6 bg-gradient-to-t to-blue-100 from-blue-50 border-2 mb-10 border-blue-200 rounded-3xl">
        {menuItems
          .filter((item) => item.type === "refrigerante")
          .map((item, index) => (
            <MenuItem key={index} {...item} addToCart={addToCart} />
          ))}
      </main>

      {/* SUCOS */}
      <h3 className="text-xl md:text-2xl font-semibold text-orange-600 mb-10 px-4 mx-auto max-w-6xl">
        Sucos
      </h3>
      {!selectedJuiceType ? (
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-6xl">
          <div className="border-2 border-orange-300 p-6 rounded-xl shadow-lg bg-gradient-to-t from-orange-100 to-orange-200 hover:shadow-xl transition-shadow duration-300 text-center">
            <h3 className="text-xl font-bold text-gray-800">Sucos com Água</h3>
            <button
              className="mt-4 px-6 py-2 bg-orange-400 text-white rounded-full hover:bg-orange-500 hover:scale-105 transform transition-all duration-200"
              onClick={() => setSelectedJuiceType("agua")}
            >
              Escolher
            </button>
          </div>
          <div className="border-2 border-orange-300 p-6 rounded-xl shadow-lg bg-gradient-to-t from-orange-100 to-orange-200 hover:shadow-xl transition-shadow duration-300 text-center">
            <h3 className="text-xl font-bold text-gray-800">Sucos com Leite</h3>
            <button
              className="mt-4 px-6 py-2 bg-orange-400 text-white rounded-full hover:bg-orange-500 hover:scale-105 transform transition-all duration-200"
              onClick={() => setSelectedJuiceType("leite")}
            >
              Escolher
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="mx-auto max-w-6xl">
            <button
            className=" px-5 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors duration-200"
            onClick={() => setSelectedJuiceType(null)}
            >
            ← Voltar
            </button>
          </div>
          <h3 className="text-2xl font-bold mt-6 mb-6 text-center text-gray-800">
            {selectedJuiceType === "agua" ? "Polpas para Suco com Água" : "Polpas para Suco com Leite"}
          </h3>
          <main className="border-2 border-orange-300 bg-gradient-to-t to-orange-200 from-orange-100 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-6xl px-4 py-6 bg-orange-50">
            {menuItems
              .filter((item) => item.type === "suco" && item.juiceType === selectedJuiceType)
              .map((item, index) => (
                <MenuItem key={index} {...item} addToCart={addToCart} />
              ))}
          </main>
        </>
      )}

      {/* ÁGUA */}
      <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-10 px-4 mt-10 mx-auto max-w-6xl">
        Água
      </h3>
      <div>
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-6xl px-4 py-6 bg-gradient-to-t to-blue-100 from-blue-50 border-2 mb-10 border-blue-200 rounded-3xl">
          {menuItems
            .filter((item) => item.type === "aguaSemGas")
            .map((item, index) => (
              <MenuItem key={index} {...item} addToCart={addToCart} />
            ))}

          {menuItems
            .filter((item) => item.type === "aguaComGas")
            .map((item, index) => (
              <MenuItem key={index} {...item} addToCart={addToCart} />
            ))}
        </main>
      </div>
      <Footer
        cart={cart}
        getCartItemCount={getCartItemCount}
        removeFromCart={removeFromCart}
      />
    </section>
  );
};

export default Menu;
