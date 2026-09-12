// Import the logo image from the assets folder
import Logo from '../../assets/logo-text.png';

const Footer = () => {
    return (
        <>
            {/* Top divider line */}
            <div className='divider mt-20'></div>

            {/* Main footer container */}
            <div className='container mx-auto px-5'>

                {/* Main footer content
                    - flex-col for mobile
                    - flex-row for large screens
                */}
                <div className='flex flex-col justify-between gap-10 py-12 text-base sm:text-lg lg:flex-row lg:items-start lg:pr-10'>

                    {/* Brand / Logo / Social Links section */}
                    <div className='space-y-4'>

                        {/* Website logo */}
                        <img
                            src={Logo}
                            alt="Dev Stack"
                            className='w-40'
                        />

                        {/* Short description */}
                        <p className='max-w-md leading-7 text-gray-500'>
                            Curated tools, technologies, and resources for developers building
                            <br className='hidden sm:block' />
                            modern software.
                        </p>

                        {/* Social media links */}
                        <ul className='flex gap-5 lg:flex-col lg:gap-3'>

                            {/* GitHub link */}
                            <li className='cursor-pointer transition hover:text-pink-400'>
                                GitHub
                            </li>

                            {/* Twitter link */}
                            <li className='cursor-pointer transition hover:text-pink-400'>
                                Twitter
                            </li>

                            {/* LinkedIn link */}
                            <li className='cursor-pointer transition hover:text-pink-400'>
                                Linkedin
                            </li>

                        </ul>
                    </div>


                    {/* Product navigation section */}
                    <div className='flex flex-col gap-4'>

                        {/* Section title */}
                        <p className='font-bold'>
                            PRODUCT
                        </p>

                        {/* Product links */}
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


                    {/* Company navigation section */}
                    <div className='flex flex-col gap-4'>

                        {/* Section title */}
                        <p className='font-bold'>
                            COMPANY
                        </p>

                        {/* Company links */}
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


                    {/* Legal navigation section */}
                    <div className='flex flex-col gap-4'>

                        {/* Section title */}
                        <p className='font-bold'>
                            LEGAL
                        </p>

                        {/* Legal links */}
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


                {/* Divider between main footer and copyright section */}
                <div className='divider'></div>


                {/* Bottom footer section */}
                <div className='flex flex-col gap-4 py-5 text-sm text-gray-500 sm:text-base md:flex-row md:items-center md:justify-between'>

                    {/* Copyright text */}
                    <div>
                        <p>
                            &copy; 2026 Dev Stack. All rights reserved.
                        </p>
                    </div>

                    {/* Bottom Privacy and Terms links */}
                    <div className='flex gap-5'>

                        {/* Privacy link */}
                        <p className='cursor-pointer transition hover:text-pink-400'>
                            Privacy
                        </p>

                        {/* Terms link */}
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