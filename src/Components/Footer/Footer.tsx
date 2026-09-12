import Logo from '../../assets/logo-text.png';

const Footer = () => {
    return (
        <>
            <div className='divider mt-20'></div>

            <div className='container mx-auto px-5'>
                <div className='flex flex-col justify-between gap-10 py-12 text-base sm:text-lg lg:flex-row lg:items-start lg:pr-10'>

                    <div className='space-y-4'>
                        <img
                            src={Logo}
                            alt="Dev Stack"
                            className='w-40'
                        />

                        <p className='max-w-md leading-7 text-gray-500'>
                            Curated tools, technologies, and resources for developers building
                            <br className='hidden sm:block' />
                            modern software.
                        </p>

                        <ul className='flex gap-5 lg:flex-col lg:gap-3'>
                            <li className='cursor-pointer transition hover:text-pink-400'>
                                GitHub
                            </li>
                            <li className='cursor-pointer transition hover:text-pink-400'>
                                Twitter
                            </li>
                            <li className='cursor-pointer transition hover:text-pink-400'>
                                Linkedin
                            </li>
                        </ul>
                    </div>


                    <div className='flex flex-col gap-4'>
                        <p className='font-bold'>
                            PRODUCT
                        </p>

                        <ul className='flex gap-5 text-gray-500 lg:flex-col lg:gap-3'>
                            <li className='cursor-pointer transition hover:text-pink-400'>
                                Home
                            </li>
                            <li className='cursor-pointer transition hover:text-pink-400'>
                                Technologies
                            </li>
                            <li className='cursor-pointer transition hover:text-pink-400'>
                                Projects
                            </li>
                        </ul>
                    </div>


                    <div className='flex flex-col gap-4'>
                        <p className='font-bold'>
                            COMPANY
                        </p>

                        <ul className='flex gap-5 text-gray-500 lg:flex-col lg:gap-3'>
                            <li className='cursor-pointer transition hover:text-pink-400'>
                                About
                            </li>
                            <li className='cursor-pointer transition hover:text-pink-400'>
                                Contact
                            </li>
                            <li className='cursor-pointer transition hover:text-pink-400'>
                                Careers
                            </li>
                        </ul>
                    </div>


                    <div className='flex flex-col gap-4'>
                        <p className='font-bold'>
                            LEGAL
                        </p>

                        <ul className='flex gap-5 text-gray-500 lg:flex-col lg:gap-3'>
                            <li className='cursor-pointer transition hover:text-pink-400'>
                                Privacy Policy
                            </li>
                            <li className='cursor-pointer transition hover:text-pink-400'>
                                Terms of Service
                            </li>
                        </ul>
                    </div>

                </div>


                <div className='divider'></div>


                <div className='flex flex-col gap-4 py-5 text-sm text-gray-500 sm:text-base md:flex-row md:items-center md:justify-between'>

                    <div>
                        <p>
                            &copy; 2026 Dev Stack. All rights reserved.
                        </p>
                    </div>

                    <div className='flex gap-5'>
                        <p className='cursor-pointer transition hover:text-pink-400'>
                            Privacy
                        </p>

                        <p className='cursor-pointer transition hover:text-pink-400'>
                            Terms
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Footer;