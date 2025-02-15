import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <>        
        <nav className="flex mx-auto max-w-7xl gap-3 justify-between md:justify-evenly items-center sticky top-2 p-1 bg-[#f6f7f8] rounded border-2 border-gray-400 border-solid overflow-x-auto overflow-hidden ">
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
            <a className="p-2 text-center" href="#tradicional">Burgers Tradicional</a>
            <div className="cursor-default">|</div>
            <a className="p-2 text-center" href="#refrigerante">Refrigerantes</a>
            <div className="cursor-default">|</div>
            <Link
                to="suco"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ cursor: 'pointer' }} 
                className='duration-200 p-2 text-center'>
                      Sucos
            </Link>
            <div className="cursor-default">|</div>
            <a className="p-2 text-center" href="#sobremesa">Sobremesas</a>
        </nav>
    </>
   )
 }

export default Nav
