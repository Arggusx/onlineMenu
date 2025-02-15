import React from "react";
import MenuItem from "../src/components/MenuItem";
import menuItems from "../src/itensData";
import { useState } from "react";

const Menu: React.FC = () => {

    const [selectedJuiceType, setSelectedJuiceType] = useState<string | null>(null);

  return (
    <section>
        

      {/* BURGERS ARTESANAIS */}

      <h2 id="artesanal" className="text-3xl md:text-4xl mb-10 mx-auto max-w-7xl px-2 pt-24">
        Burgers Artesanais
      </h2>
      <main id="burger-container" className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2">
        {menuItems
          .filter(item => item.type === "artesanal")
          .map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
        ))}
      </main>

      {/* BURGERS TRADICIONAIS */}

      <h2 id="tradicional" className="text-3xl md:text-4xl mt-30 mb-10 mx-auto max-w-7xl px-2 pt-24">
        Burgers Tradicionais
      </h2>
      <main id="burger-container2" className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2">
        {menuItems
          .filter(item => item.type === "tradicional")
          .map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
        ))}
      </main>

      {/* REFRIGERANTES*/ }

      <h2 id="tradicional" className="text-3xl md:text-4xl mt-30 mb-10 mx-auto max-w-7xl px-2 pt-24">
        Refrigerantes
      </h2>
      <main id="burger-container2" className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2">
        {menuItems
          .filter(item => item.type === "refrigerante")
          .map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
        ))}
      </main>

      {/* SUCOS */}

    

      {/* SUCOS */}
      <h2 id="suco" className="text-3xl md:text-4xl mt-30 mb-10 mx-auto max-w-7xl px-2 pt-24">
        Sucos
      </h2>

      {/* Exibição das duas opções iniciais */}
      {!selectedJuiceType && (
        <div className="grid grid-cols-1 md:grid-cols-2 mb-40 gap-7 mx-auto max-w-7xl px-2">
          {/* Suco com Água */}
          <div className="border p-5 border-orange-300 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold">Suco com Água</h3>
            <p className="text-gray-600">Refrescante e natural</p>
            <button 
              className="mt-3 px-5 py-2 bg-green-500 text-white rounded"
              onClick={() => setSelectedJuiceType("agua")}
            >
              Buy
            </button>
          </div>

          {/* Suco com Leite */}
          <div className=" border border-orange-300 p-5 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold">Suco com Leite</h3>
            <p className="text-gray-600">Cremoso e nutritivo</p>
            <button 
              className="mt-3 px-5 py-2 bg-green-500 text-white rounded"
              onClick={() => setSelectedJuiceType("leite")}
            >
              Buy
            </button>
          </div>
        </div>
      )}

      {/* Exibição das polpas disponíveis */}
      {selectedJuiceType && (
        <>
          <button 
            className="mt-5 ml-30 px-4 py-2 mb-[-50px] bg-red-500 text-white rounded"
            onClick={() => setSelectedJuiceType(null)}
          >
            Voltar
          </button>

          <h3 className="text-2xl font-bold mt-[-2  0px] mb-20 text-center">
            {selectedJuiceType === "agua" ? "Polpas disponíveis para Suco com Água" : "Polpas disponíveis para Suco com Leite"}
          </h3>

          <main className="grid grid-cols-1 border-3 border-orange-300 rounded-md mb-30 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mt-5">
            {menuItems
              .filter(item => item.type === "suco" && item.juiceType === selectedJuiceType)
              .map((item, index) => (
                <MenuItem key={index} {...item} />
            ))}
          </main>
        </>
      )}
    </section>
  );
};

export default Menu;
