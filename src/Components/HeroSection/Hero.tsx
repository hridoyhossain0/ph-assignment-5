import Banner from '../../assets/banner-stack.png';

const Hero = () => {
    return (
        <>
            <div className='mt-55 mb-24 flex flex-col   lg:flex-row container mx-auto justify-between  items-center'>
                <div className='space-y-8'>
                    <h1 className='text-7xl font-extrabold'>Build Your Ideal<br/> <span className='bg-gradient-to-r from-orange-400 via-pink-400 to-violet-400 bg-clip-text text-transparent'>Development Stack</span></h1>
                    <p className='text-2xl'>Explore frontend, backend, database, and tooling options,<br/> compare them side by side, and put together the stack that fits your<br/> next project.</p>
                    <div className='gap-5  flex'>
                        <button className='btn px-7 py-6 text-white text-xl bg-gradient-to-r from-orange-400 to-violet-300 rounded-lg'>Explore Technologies</button>
                        <button className='btn btn-outline btn-accent py-6 rounded-lg px-7 text-xl '>Learn More</button>
                    </div>    
                        
                </div>
                <div>
                    <img src={Banner} alt="" />
                </div>
            </div>
        </>
    );
};

export default Hero;