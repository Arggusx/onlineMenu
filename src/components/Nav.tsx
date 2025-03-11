import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <>        
        <nav className="flex mx-auto max-w-7xl mt-10 gap-3 justify-between md:justify-evenly items-center sticky top-2 p-1 bg-[#f6f7f8] rounded border-2 border-gray-400 border-solid overflow-x-auto overflow-hidden ">
            <Link
                to="artesanal"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ cursor: 'pointer' }} 
                className='duration-200 p-2 text-center'>
                      Burgers Artesanal
            </Link>
            <div className="cursor-default">|</div>
            <Link
                to="tradicional"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ cursor: 'pointer' }} 
                className='duration-200 p-2 text-center'>
                      Burgers Tradicionais
            </Link>
            <div className="cursor-default">|</div>
            <Link
                to="sobremesa"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ cursor: 'pointer' }} 
                className='duration-200 p-2 text-center'>
                      Sobremesas
            </Link>
            <div className="cursor-default">|</div>
            <Link
                to="bebida"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ cursor: 'pointer' }} 
                className='duration-200 p-2 text-center'>
                      Bebidas
            </Link>
        </nav>
    </>
   )
 }

export default Nav
