import logoBurger from "../assets/logo/logo.png"
import imageMaps from "../assets/logo/google-maps.png"
import logoInsta from "../assets/logo/instagram-2.png"
import logoNumber from "../assets/logo/whatsapp-2.png"

const Header = () => {
  return (
    <header className=" w-full h-[420px] bg-home bg-cover bg-center">
      <div className='w-full h-full flex flex-col justify-center items-center    bg-[url(/src/assets/logo/bg-1.0.png)]'>
            <img className="w-32 transition-transform duration-300 pt-12 pb-5 hover:scale-110" src={logoBurger} alt="Logo" />          
            <h1 className="pb-5 text-4x1 font-bold font-[Poppins, sans-serif] text-4xl"><strong>LET's GO BURGER</strong></h1>
            <div className="px-4 py-1 rounded-lg bg-red-500">
                <span className="font-medium">Ter a Dom - 18:00 às 23:00</span>
            </div>
                <ul className="mt-6">
                    <a className="flex gap-1 justify-center items-center text-white font-bold font-[Poppins, sans-serif]" href="https://www.google.com/maps/place/R.+Gilberto+Vieira+Leite,+423+-+Tabuleiro+do+Martins,+Macei%C3%B3+-+AL,+57060-175/@-9.5981522,-35.7691366,17z/data=!3m1!4b1!4m6!3m5!1s0x70148e9990ec9cd:0x585376631de4e2ce!8m2!3d-9.5981522!4d-35.7691366!16s%2Fg%2F11hb6st2lc?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoASAFQAw%3D%3D">
                        <img className="w-5 h-5"src={imageMaps} alt="Maps" />
                        Trav. Rio da Silva, 423, Santa Amélia
                    </a>
                </ul>
            <div className="flex mt-2 flex-col md:flex-row md:gap-4 font-bold font-[Poppins, sans-serif]">
                <a href="https://wa.me/82999889814" className="flex gap-1 justify-center items-center text-white font-bold font-[Poppins, sans-serif]">
                    <img className="w-5 h-5" src={logoNumber} alt="Whatsapp" />
                    (82) 9 9988-9814
                </a>
                <a className="flex gap-1 justify-center items-center  text-white font-bold font-[Poppins, sans-serif]" href=" https://www.instagram.com/letsgoburgermaceio/">
                    <img className="w-5 h-5" src={logoInsta} alt="Instagram" />
                    @letsgoburgermaceio
                </a> 
            </div>    
        </div> 
    </header>           
  )
}

export default Header
