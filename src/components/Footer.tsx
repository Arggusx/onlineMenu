import { useState } from "react";


interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface FooterProps {
  cart: CartItem[];
  getCartItemCount: () => number;
  removeFromCart: (name: string) => void;
}

const Footer: React.FC<FooterProps> = ({ cart, getCartItemCount, removeFromCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <footer className="w-full bg-green-600 h-14 fixed bottom-0 z-40 flex items-center justify-center">
        <button 
          className="hover:cursor-pointer font-bold flex items-center justify-center gap-2 h-full w-full"
          onClick={() => setIsCartOpen(true)}
        >
          <span className="ml-2 text-black">({getCartItemCount()})</span>
          Veja seu carrinho <i className="fa fa-shopping-cart text-lg text-white"></i>
        </button>
      </footer>

      {/* Modal do Carrinho */}
      {isCartOpen && (
        <div className="bg-black/60 w-full h-full fixed top-0 left-0 z-[99] flex items-center justify-center">
          <div className="bg-white p-6 rounded-md min-w-[90%] h-[60%] md:min-w-[600px] overflow-auto">
            <h2 className="text-2xl text-center font-bold mb-2">Seu Carrinho</h2>

            {cart.length === 0 ? (
              <p className="text-center text-lg">Seu carrinho está vazio!</p>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className="flex justify-between items-center border-b py-2">
                    <div>
                      <span className="font-bold">{item.name}</span>
                      <p className="text-sm">Quantidade: {item.quantity}</p>
                    </div>
                    <span className="font-bold">R$ {item.price * item.quantity}</span>
                    <button
                      className="ml-2 bg-red-500 hover:cursor-pointer text-white px-2 py-1 rounded text-sm"
                      onClick={() => removeFromCart(item.name)}
                    >
                      Remover
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4">
              <h3 className="text-md font-bold mb-2">
                Total: R$ {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
              </h3>
              <span className="font-bold">Observações:</span>
              <textarea 
                name="observacoes" 
                id="obs" 
                className="pl-2 pt-2 border border-black-400 w-full rounded-md bg-gray-50 pb-10"
                placeholder="Sem cebola, tomate, etc..."
              />
            </div>

            <div className="flex justify-between mt-5">
              <button 
                className="bg-red-500 px-4 py-2 rounded font-bold hover:cursor-pointer"
                onClick={() => setIsCartOpen(false)}
              >
                Fechar
              </button>
              <button className="bg-green-500 px-4 py-2 rounded font-bold hover:cursor-pointer">
                Pedir
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
