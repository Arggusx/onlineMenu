const Main = () => {
  return (
    <div>
        

        {/*--- GRID Burgers Artesanais ---*/}

        {/*--- GRID Burgers Tradicionais ---*/}

        {/*--- GRID Refrigerantes ---*/}

        {/*--- GRID Sucos ---*/}

        {/*--- GRID Sobremesas ---*/}

            <h2 id="sobremesa" className="text-3xl md:text-4xl mb-10 mx-auto max-w-7xl px-2 pt-24">Sobremesa/Outros</h2>
            <main id="bebidas-container3" className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 ">
                <div className="p-2 flex gap-2 items-center">
                    <img className="w-28 h-28 rounded-md" src="src/assets/logo/logo.png" alt="Simples"/>
                    <div className="w-full">
                        <p className="font-bold">Água mineral (Sem gás)</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 2,00</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Água mineral (Sem gás)" data-price="2.00" data-valor="2,00">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex gap-2 items-center">
                    <img src="src/assets/logo/logo.png" alt="Água com gás 500ml" className="w-28 h-28 rounded-md" />
                    <div className="w-full">
                        <p className="font-bold">Água com gás 500ml</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 3,00</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Água com gás 500ml" data-price="3.00" data-valor="3,00">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
    </div>
        
  )
}

export default Main
