import React, { useState } from "react";
import MenuItem from "../src/components/MenuItem";
import menuItems from "../src/itensData";

const Menu: React.FC = () => {
  const [selectedJuiceType, setSelectedJuiceType] = useState<string | null>(null);

  return (
    <section>
      {/* BURGERS ARTESANAIS */}
      <h2 id="artesanal" className="text-3xl md:text-4xl mb-10 mx-auto max-w-7xl px-2 pt-24">
        Burgers Artesanais
      </h2>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2">
        {menuItems.filter(item => item.type === "artesanal").map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </main>

      {/* BURGERS TRADICIONAIS */}
      <h2 id="tradicional" className="text-3xl md:text-4xl mb-10 mx-auto max-w-7xl px-2 pt-24">
        Burgers Tradicionais
      </h2>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2">
        {menuItems.filter(item => item.type === "tradicional").map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </main>

      {/* SOBREMESAS */}

      <h2 id="sobremesa" className="text-3xl md:text-4xl mb-10 mx-auto max-w-7xl px-2 pt-24">
        Sobremesas
      </h2>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2">
        {menuItems.filter(item => item.type === "sobremesa").map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </main>

      {/* BEBIDAS */}
      <h2 id="bebida" className="text-3xl md:text-4xl mb-10 mx-auto max-w-7xl px-2 pt-24">
        Bebidas
      </h2>
      
        {/* REFRIGERANTES */}
        <h3 className=" text-2xl md:text-3xl mb-5 md:text-left md:ml-10 lg:ml-20">Refrigerantes</h3>
        <main className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          {menuItems.filter(item => item.type === "refrigerante").map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </main>

        {/* SUCOS */}
        <h3 className="text-2xl md:text-3xl mb-5 md:text-left md:ml-10 lg:ml-20 mt-[40px]">Sucos</h3>
        {!selectedJuiceType ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mx-auto max-w-7xl px-2">
            <div className="border-3 p-5 border-orange-300 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold">Sucos com Água</h3>
              <button className="hover:scale-125 duration-200 mt-3 px-5 py-2 bg-green-500 text-white rounded" onClick={() => setSelectedJuiceType("agua")}>
                Selecionar
              </button>
            </div>
            <div className="border-3 p-5 border-orange-300 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold">Sucos com Leite</h3>
              <button className="hover:scale-125 duration-200 mt-3 px-5 py-2 bg-green-500 text-white rounded" onClick={() => setSelectedJuiceType("leite")}>
                Selecionar
              </button>
            </div>
          </div>
        ) : (
          <>
            <button className="ml-[120px] mt-5 px-4 py-2 bg-red-500 text-white rounded-md" onClick={() => setSelectedJuiceType(null)}>
              Voltar
            </button>
            <h3 className=" text-2xl font-bold mt-5 mb-5 text-center">
              {selectedJuiceType === "agua" ? "Polpas disponíveis para Suco com Água" : "Polpas disponíveis para Suco com Leite"}
            </h3>
            <main className="border-3 border-orange-300 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-7 mx-auto max-w-7xl px-2">
              {menuItems.filter(item => item.type === "suco" && item.juiceType === selectedJuiceType).map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </main>
          </>
        )}

        {/* ÁGUA */}
        <h3 className="text-2xl md:text-3xl mb-5 md:text-left md:ml-10 lg:ml-20 mt-[40px]">Água</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mx-auto max-w-7xl px-2">
          <div className="border-3 p-5 border-blue-500 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold">Água mineral (Sem gás)</h3>
            <p className="text-white text-2xl">R$ 3,00</p>
            <button className="hover:scale-125 duration-200 mt-3 px-5 py-2 bg-green-500 text-white rounded">Pedir</button>
          </div>
          <div className="border-3 p-5 border-blue-500 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold">Água Com gás</h3>
            <p className="text-white text-2xl">R$ 5,00</p>
            <button className="hover:scale-125 duration-200 mt-3 px-5 py-2 bg-green-500 text-white rounded">Pedir</button>
          </div>
        </div>
    </section>
  );
};

export default Menu;
