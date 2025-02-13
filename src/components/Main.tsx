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
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Let's Go Bacon" data-price="24.49" data-valor="24,49">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>

        <div id="menu">
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
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Let's Go Bacon" data-price="24.49" data-valor="24,49">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>

        <div id="menu">
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
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Let's Go Bacon" data-price="24.49" data-valor="24,49">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>

        <div id="menu">
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
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Let's Go Bacon" data-price="24.49" data-valor="24,49">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>

        <div id="menu">
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
                            <button className="px-5 bg-green-600 rounded add-to-cart-btn hover:scale-125 duration-200" data-name="Let's Go Bacon" data-price="24.49" data-valor="24,49">
                                <i className="fa fa-cart-plus text-lg text-white">
                                    ::before
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Main
