import  { use, useState } from 'react';
import type TechType from '../Types/TechType';
import TechCard from './TechCard';

export interface  TechProps {
    PromiseTech : Promise<TechType[]>
}

const Tech = ({PromiseTech}: TechProps) => {

    const techs = use(PromiseTech);

    const [addStack, setAddStack] = useState<TechType[]>([])
    
    const handleAddStack = (tech: TechType): void => {
        if(addStack.includes(tech)) {
            const remaningStack = addStack.filter(f => f !== tech)
            setAddStack(remaningStack)
            
        }
        else {
            const addNewStack = [...addStack, tech];
            setAddStack(addNewStack)
        }
    }

    const yourSteck = addStack.length === 0 ?  'No technologies selected yet' :  `${addStack.length} Technology Selected`   ;
        
    return (
        <div className='container mx-auto'>
            <div className='my-20 space-y-4'>
                <p className='text-5xl font-bold'>Explore the <span className='text-pink-400'>Technologies</span></p>
                <p className='text-2xl'>Pick one technology per category to build your ideal stack.</p>

            </div>
            <div className='grid gap-7 grid-cols-3 w-full md:grid-cols-3 lg:grid-cols-4'>
                <div className='col-span-2 md:col-span-2 lg:col-span-3'>
                    <div className='grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                        {techs.map(tech => <TechCard
                        key={tech.id}
                        tech={tech}
                        handleAddStack={handleAddStack}

                        /> )}
                    </div>

                </div>
                    
                <div className='  rounded-2xl space-y-3 border-gray-500 col-span-1 self-start shadow-sm p-5'>
                    <h1 className='text-2xl font-bold'>Your Stack</h1>
                    <p className='text-lg'>{yourSteck}</p>
                    <button className='btn btn-dash btn-accent text-xl py-12 rounded-2xl w-full'>Your stack is empty</button>
                </div>
            </div>
        </div>
    );
};

export default Tech;