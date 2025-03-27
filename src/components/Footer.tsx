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

    {/* Botão do Carrinho */}
  <div className="bg-green-600 py-4 flex items-center sticky bottom-0 justify-center shadow-lg">
    <button
      className="hover:cursor-pointer font-bold flex items-center justify-center gap-2 w-full text-white"
      onClick={() => setIsCartOpen(true)}
    >
      <span className="ml-2">({getCartItemCount()})</span>
      Veja seu carrinho <i className="fa fa-shopping-cart text-lg"></i>
    </button>
  </div>
    <footer className="w-full bg-black text-white bottom-0 z-40">
  
  {/* Informações de Contato */}
  <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
    <div className="text-center md:text-left">
      <h4 className="text-lg font-semibold">Entre em Contato</h4>
      <p className="text-sm">Telefone: (82) 98765-4321</p>
      <p className="text-sm">E-mail: letsgohamburgueria@gmail.com</p>
    </div>
    <div className="text-center">
      <h4 className="text-lg font-semibold">Siga-nos</h4>
      <div className="flex gap-4 justify-center">
        <a href="#" className="text-sm hover:text-green-400 transition-colors"><i className="fab fa-instagram"></i> Instagram</a>
        <a href="#" className="text-sm hover:text-green-400 transition-colors"><i className="fab fa-whatsapp"></i> WhatsApp</a>
      </div>
    </div>
  </div>
</footer>

      {/* Modal do Carrinho */}
      {isCartOpen && (
  <div className="bg-black/70 w-full h-full fixed top-0 left-0 z-[99] flex items-center justify-center">
    <div className="bg-white p-6 rounded-xl shadow-2xl min-w-[90%] max-w-[600px] h-[70%] md:h-auto max-h-[90vh] overflow-y-auto">
      <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4 relative">
        Seu Carrinho
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Seu carrinho está vazio!</p>
      ) : (
        <ul className="space-y-3">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b border-gray-200 py-3"
            >
              <div>
                <span className="font-semibold text-gray-800">{item.name}</span>
                <p className="text-sm text-gray-600">Quantidade: {item.quantity}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-gray-900">
                  R$ {(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-colors duration-200 text-sm"
                  onClick={() => removeFromCart(item.name)}
                >
                  Remover
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          Total: R$ {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
        </h3>
        <div>
          <span className="font-semibold text-gray-800">Observações:</span>
          <textarea
            name="observacoes"
            id="obs"
            className="mt-2 p-3 border border-gray-300 w-full rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200 resize-none"
            placeholder="Sem cebola, tomate, etc..."
            rows={3}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-between gap-4">
        <button
          className="bg-gray-600 px-5 py-2 rounded-full text-white font-semibold hover:bg-gray-700 transition-colors duration-200"
          onClick={() => setIsCartOpen(false)}
        >
          Fechar
        </button>
        <button
          className="bg-green-500 px-5 py-2 rounded-full text-white font-semibold hover:bg-green-600 transition-colors duration-200"
        >
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
