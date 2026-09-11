import  { use } from 'react';
import type TechType from '../Types/TechType';
import TechCard from './TechCard';

export interface  TechProps {
    PromiseTech : Promise<TechType[]>
}

const Tech = ({PromiseTech}: TechProps) => {

    const techs = use(PromiseTech);
    
    return (
        <div className='container mx-auto'>
            <div className='my-20 space-y-4'>
                <p className='text-5xl font-bold'>Explore the <span className='text-pink-400'>Technologies</span></p>
                <p className='text-2xl'>Pick one technology per category to build your ideal stack.</p>

            </div>
            <div className='flex gap-7 grid-cols-3 w-full md:grid-cols-5 lg:grid-cols-7'>
                <div className='grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                    {techs.map(tech => <TechCard key={tech.id} tech={tech}/> )}
                </div>
                {/* <div className='grid h-60 grid-cols-1 w-full shadow'>
                    <h1 className='text-2xl font-bold'>Your Stack</h1>
                    <p>No technologies selected yet</p>
                    <button className='btn btn-dash btn-accent w-full'>Your stack is empty</button>
                </div> */}
            </div>
        </div>
    );
};

export default Tech;