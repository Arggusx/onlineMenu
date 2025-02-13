const Main = () => {
  return (
    <div>
        <h2 className='text-2xl md:text-4xl font-bold text-center mt-10 mb-10'>Conheça nosso cardápio</h2>
        <nav className="flex mx-auto max-w-7xl gap-3 justify-between md:justify-evenly items-center sticky top-2 p-1 bg-[#f6f7f8] rounded border-2 border-gray-400 border-solid overflow-x-auto overflow-hidden ">
            <a className="p-2 text-center" href="#artesanal">Burgers Artesanal</a>
            <div className="cursor-default">|</div>
            <a className="p-2 text-center" href="#tradicional">Burgers Tradicional</a>
            <div className="cursor-default">|</div>
            <a className="p-2 text-center" href="#refrigerante">Refrigerantes</a>
            <div className="cursor-default">|</div>
            <a className="p-2 text-center" href="#suco">Sucos</a>
            <div className="cursor-default">|</div>
            <a className="p-2 text-center" href="#sobremesa">Sobremesas</a>
            <div className="cursor-default">|</div>
        </nav>

        <div id="menu">

            {/*--- GRID Burgers Artesanais ---*/}

            <h2 id="artesanal" className="text-3xl md:text-4xl mb-10 mx-auto max-w-7xl px-2 pt-24">Burgers Artesanais</h2>
            <main id="burger-container" className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 ">
                <div className="p-2 flex gap-2 items-center">
                    <img className="w-28 h-28 rounded-md" src="src/assets/logo/logo.png" alt="Simples"/>
                    <div className="w-full">
                        <p className="font-bold">Let's Go Simples</p>
                        <p className="text-sm">Burger artezanal 150g, queijo cheddar, presunto e salada.</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 16,49</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Let's Go Simples" data-price="16.49" data-valor="16,49">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex gap-2 items-center">
                    <img src="src/assets/logo/logo.png" alt="Let's Go Eggs" className="w-28 h-28 rounded-md" />
                    <div className="w-full">
                        <p className="font-bold">Let's Go Eggs</p>
                        <p className="text-sm">Burger artezanal 150g, ovo, queijo cheddar, presunto e salada.</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 24,49</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Let's Go Bacon" data-price="24.49" data-valor="24,49">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex gap-2 items-center">
                    <img src="src/assets/logo/logo.png" alt="Let's Go Bacon" className="w-28 h-28 rounded-md" />
                    <div className="w-full">
                        <p className="font-bold">Let's Go Bacon</p>
                        <p className="text-sm">Burger artezanal 150g, chips de bacon, queijo cheddar, presunto e salada.</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 24,49</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Let's Go Bacon" data-price="24.49" data-valor="24,49">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex gap-2 items-center">
                    <img src="src/assets/logo/logo.png" alt="Let's Go Bacon" className="w-28 h-28 rounded-md" />
                    <div className="w-full">
                        <p className="font-bold">Let's Go Duplo</p>
                        <p className="text-sm">Burger artesanal 150g (2), queijo cheddar (2), presunto (2), cebola caramelizada e salada.</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 28,99</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Let's Go Bacon" data-price="28.99" data-valor="28,99">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>

        {/*--- GRID Burgers Tradicionais ---*/}

        <h2 id="tradicional" className="text-3xl md:text-4xl mb-10 mx-auto max-w-7xl px-2 pt-24">Burgers Tradicionais</h2>
            <main id="burger-container2" className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2">
                <div className="p-2 flex gap-2 items-center">
                    <img className="w-28 h-28 rounded-md" src="src/assets/logo/logo.png" alt="Let's Go Calabresa"/>
                    <div className="w-full">
                        <p className="font-bold">Let's Go Calabresa</p>
                        <p className="text-sm">Calabresa fatiada 170g, ovo, queijo cheddar, presunto e salada.</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 16,49</p>
                            <button className="bg-green-600 px-5 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Let's Go Calabresa" data-price="16.49" data-valor="16,49">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex gap-2 items-center">
                    <img src="src/assets/logo/logo.png" alt="Let's Go Frango" className="w-28 h-28 rounded-md" />
                    <div className="w-full">
                        <p className="font-bold">Let's Go Frango</p>
                        <p className="text-sm">Frango em cubos 170g, ovo, queijo cheddar, presunto e salada.</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 16,49</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Let's Go Frango" data-price="16.49" data-valor="16,49">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex gap-2 items-center">
                    <img src="src/assets/logo/logo.png" alt="Let's Go Calafrango" className="w-28 h-28 rounded-md" />
                    <div className="w-full">
                        <p className="font-bold">Let's Go Calafrango</p>
                        <p className="text-sm">Calabresa fatiada 85g, frango em cubos 85g, ovo, queijo cheddar, presunto e salada.</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 17,49</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Let's Go Calafrango" data-price="17.49" data-valor="24,49">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex gap-2 items-center">
                    <img src="src/assets/logo/logo.png" alt="Let's Go Carne do Sol" className="w-28 h-28 rounded-md" />
                    <div className="w-full">
                        <p className="font-bold">Let's Go Carne do Sol</p>
                        <p className="text-sm">Carne do sol em cubos 190g, ovo, queijo cheddar, cebola caramelizada, presunto e salada.</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 23,99</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Let's Go Carne do Sol" data-price="23.99" data-valor="23,99">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex gap-2 items-center">
                    <img className="w-28 h-28 rounded-md" src="src/assets/logo/logo.png" alt="Let's Go Calabresa"/>
                    <div className="w-full">
                        <p className="font-bold">Let's Go Alcatra</p>
                        <p className="text-sm">Carne de alcatra em cubos 190g, ovo, queijo cheddar, cebola caramelizada, presunto e salada.</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 26,49</p>
                            <button className="bg-green-600 px-5 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Let's Go Alcatra" data-price="26.49" data-valor="26,49">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/*--- GRID Refrigerantes ---*/}

            <h2 id="refrigerante" className="text-3xl md:text-4xl mb-10 mx-auto max-w-7xl px-2 pt-24">Refrigerantes</h2>
            <main id="bebidas-container" className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 ">
                <div className="p-2 flex gap-2 items-center">
                    <img className="w-28 h-28 rounded-md" src="src/assets/logo/logo.png" alt="Coca-Cola 1L"/>
                    <div className="w-full">
                        <p className="font-bold">Coca-Cola 1L</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 7,50</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Coca-Cola 1L" data-price="7.50" data-valor="7,50">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex gap-2 items-center">
                    <img src="src/assets/logo/logo.png" alt="Guaraná 1L" className="w-28 h-28 rounded-md" />
                    <div className="w-full">
                        <p className="font-bold">Guaraná 1L</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 6,00</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Guaraná 1L" data-price="6.00" data-valor="6,00">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex gap-2 items-center">
                    <img src="src/assets/logo/logo.png" alt="Coca-Cola 350ml" className="w-28 h-28 rounded-md" />
                    <div className="w-full">
                        <p className="font-bold">Coca-Cola 350ml</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 5,00</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Coca-Cola 350ml" data-price="5.00" data-valor="5,00">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex gap-2 items-center">
                    <img className="w-28 h-28 rounded-md" src="src/assets/logo/logo.png" alt="Guaraná 350ml"/>
                    <div className="w-full">
                        <p className="font-bold">Guaraná 350ml</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 6,00</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Guaraná 350ml" data-price="6.00" data-valor="6,00">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/*--- GRID Sucos ---*/}

            <h2 id="suco" className="text-3xl md:text-4xl mb-10 mx-auto max-w-7xl px-2 pt-24">Sucos</h2>
            <main id="bebidas-container2" className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 ">
                <div className="p-2 flex gap-2 items-center">
                    <img className="w-28 h-28 rounded-md" src="src/assets/logo/logo.png" alt="Acelora 400ml C/Água"/>
                    <div className="w-full">
                        <p className="font-bold">Acelora 400ml C/Água</p>
                        <p className="text-sm">Polpa da Fruta</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 5,00</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Acelora 400ml C/Água" data-price="5.00" data-valor="5,00">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex gap-2 items-center">
                    <img className="w-28 h-28 rounded-md" src="src/assets/logo/logo.png" alt="Acelora 400ml C/Leite"/>
                    <div className="w-full">
                        <p className="font-bold">Acelora 400ml C/Leite</p>
                        <p className="text-sm">Polpa da Fruta</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 6,00</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Acelora 400ml C/Leite" data-price="6.00" data-valor="6,00">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex gap-2 items-center">
                    <img className="w-28 h-28 rounded-md" src="src/assets/logo/logo.png" alt="Goiaba 400ml C/Água"/>
                    <div className="w-full">
                        <p className="font-bold">Goiaba 400ml C/Água</p>
                        <p className="text-sm">Polpa da Fruta</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 5,00</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Goiaba 400ml C/Água" data-price="5.00" data-valor="5,00">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex gap-2 items-center">
                    <img className="w-28 h-28 rounded-md" src="src/assets/logo/logo.png" alt="Goiaba 400ml C/Leite"/>
                    <div className="w-full">
                        <p className="font-bold">Goiaba 400ml C/Leite</p>
                        <p className="text-sm">Polpa da Fruta</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 6,00</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Goiaba 400ml C/Leite" data-price="6.00" data-valor="6,00">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex gap-2 items-center">
                    <img className="w-28 h-28 rounded-md" src="src/assets/logo/logo.png" alt="Graviola 400ml C/Água"/>
                    <div className="w-full">
                        <p className="font-bold">Graviola 400ml C/Água</p>
                        <p className="text-sm">Polpa da Fruta</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 5,00</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Graviola 400ml C/Água" data-price="5.00" data-valor="5,00">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex gap-2 items-center">
                    <img className="w-28 h-28 rounded-md" src="src/assets/logo/logo.png" alt="Graviola 400ml C/Leite"/>
                    <div className="w-full">
                        <p className="font-bold">Graviola 400ml C/Leite</p>
                        <p className="text-sm">Polpa da Fruta</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 6,00</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Graviola 400ml C/Leite" data-price="7.00" data-valor="7,00">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex gap-2 items-center">
                    <img className="w-28 h-28 rounded-md" src="src/assets/logo/logo.png" alt="Maracujá 400ml C/Água"/>
                    <div className="w-full">
                        <p className="font-bold">Maracujá 400ml C/Água</p>
                        <p className="text-sm">Polpa da Fruta</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 5,00</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Maracujá 400ml C/Água" data-price="5.00" data-valor="5,00">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex gap-2 items-center">
                    <img className="w-28 h-28 rounded-md" src="src/assets/logo/logo.png" alt="Maracujá 400ml C/Leite"/>
                    <div className="w-full">
                        <p className="font-bold">Maracujá 400ml C/Leite</p>
                        <p className="text-sm">Polpa da Fruta</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 6,00</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Maracujá 400ml C/Leite" data-price="6.00" data-valor="6,00">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex gap-2 items-center">
                    <img className="w-28 h-28 rounded-md" src="src/assets/logo/logo.png" alt="Cajú 400ml C/Água"/>
                    <div className="w-full">
                        <p className="font-bold">Cajú 400ml C/Água</p>
                        <p className="text-sm">Polpa da Fruta</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 5,00</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Cajú 400ml C/Água" data-price="5.00" data-valor="5,00">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex gap-2 items-center">
                    <img className="w-28 h-28 rounded-md" src="src/assets/logo/logo.png" alt="Cajú 400ml C/Leite"/>
                    <div className="w-full">
                        <p className="font-bold">Cajú 400ml C/Leite</p>
                        <p className="text-sm">Polpa da Fruta</p>
                        <div className="flex items-center gap-2 justify-between mt-2">
                            <p className="font-bold text-lg">R$ 6,00</p>
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Cajú 400ml C/Leite" data-price="6.00" data-valor="6,00">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </main>

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
