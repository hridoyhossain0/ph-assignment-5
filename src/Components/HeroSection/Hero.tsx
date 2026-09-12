// Import the banner image from the assets folder
import Banner from '../../assets/banner-stack.png';

const Hero = () => {
    return (
        <>
            {/* Hero section
                - mt-55: adds top margin
                - mb-24: adds bottom margin
                - flex-col: stacks content vertically on small screens
                - lg:flex-row: places content side-by-side on large screens
            */}
            <div className='mt-55 mb-24 flex flex-col lg:flex-row container mx-auto justify-between items-center'>

                {/* Left side: Hero text and buttons */}
                <div className='space-y-8'>

                    {/* Main heading */}
                    <h1 className='text-7xl font-extrabold'>
                        Build Your Ideal<br />

                        {/* Gradient text for "Development Stack" */}
                        <span className='bg-gradient-to-r from-orange-400 via-pink-400 to-violet-400 bg-clip-text text-transparent'>
                            Development Stack
                        </span>
                    </h1>

                    {/* Short description of the website */}
                    <p className='text-2xl'>
                        Explore frontend, backend, database, and tooling options,
                        <br />
                        compare them side by side, and put together the stack that fits your
                        <br />
                        next project.
                    </p>

                    {/* Action buttons */}
                    <div className='gap-5 flex'>

                        {/* Button to explore available technologies */}
                        <button className='btn px-7 py-6 text-white text-xl bg-gradient-to-r from-orange-400 to-violet-800 rounded-lg hover:from-red-400 hover:to-blue-400'>
                            Explore Technologies
                        </button>

                        {/* Button for additional information */}
                        <button className='btn btn-outline btn-accent py-6 rounded-lg px-7 text-xl'>
                            Learn More
                        </button>

                    </div>
                </div>

                {/* Right side: Hero banner image */}
                <div>
                    <img
                        src={Banner}
                        alt="Development Stack"
                    />
                </div>

            </div>
        </>
    );
};

export default Hero;