import Logo from '../../assets/logo-text.png';

const Nav = () => {
    return (
        <>
            <div className='fixed w-full top-0 shadow-md  left-0 z-50 bg-white'>
                <div className='container mx-auto h-30 items-center flex justify-between  text-2xl '>
                    <div className="navIcon">
                        <img className='scale-[1.5] w-auto object-contain' src={Logo} alt="" />
                    </div>
                    <div className="">
                        <ul className='flex gap-7'>
                            <li>Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="flex gap-5 ">
                        <button>Sign In</button>
                        <button className='btn btn-secondary rounded-full py-7 text-2xl px-8'>Sign Up</button>
                    </div>
                </div>

            </div>
                
        </>
    );
};

export default Nav;