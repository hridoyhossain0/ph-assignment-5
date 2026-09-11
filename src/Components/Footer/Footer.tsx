import Logo from '../../assets/logo-text.png';

const Footer = () => {
    return (
        <>  
            <div className='divider mt-20'></div>
            <div className='container mx-auto'>
                <div className='flex  justify-between  text-xl  items-center pr-30'>
                    <div className='space-y-4'>
                        <img src={Logo} alt="" />
                        <p>Curated tools, technologies, and resources for developers building<br/> modern software.</p>
                        <ul className='flex gap-4'>
                            <li>GitHub</li>
                            <li>Twitter</li>
                            <li>Linkedin</li>
                        </ul>
                    </div>
                
                    <div className='space-y-4'>
                        <p>Product</p>
                        <ul className='space-y-4'>
                            <li>Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <p>COMPANY</p>
                        <ul className='space-y-4'>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Careers</li>
                        </ul>

                    </div>
                    <div className='space-y-4'>
                        <p>LEGAL</p>
                        <ul className='space-y-4'>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    
                </div>

                <div className='divider container'></div>
                <div className='flex justify-between'>
                    <div>
                        <p>&copy; 2026 Dev Stack All rights reserved.</p>
                    </div>
                    <div className='flex gap-5'>
                        <p>Privacy</p>
                        <p>Terms</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;