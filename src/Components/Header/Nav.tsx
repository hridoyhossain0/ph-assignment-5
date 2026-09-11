import Logo from '../../assets/logo-text.png';

const Nav = () => {
    return (
        <>
            <div className='container mx-auto flex justify-between my-7 text-2xl items-center'>
                <div className="navIcon">
                    <img className='scale-[1.5] origin-center' src={Logo} alt="" />
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
            <div className='divider'></div>
        </>
    );
};

export default Nav;