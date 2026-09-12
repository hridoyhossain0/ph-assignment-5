import { RxCross2 } from 'react-icons/rx';
import type TechType from '../Types/TechType';

interface AddSteckProps {
    addStack : TechType[];
    handleRemoveStack: (tech: TechType) => void;
}

const AddSteck = ({addStack,   handleRemoveStack } : AddSteckProps ) => {
    return (
        <div>
            {
                addStack.map(Stack => (
                    <div className='flex justify-between items-center border-gray-300 border-1  rounded-2xl my-2.5 p-5 hover:shadow-md hover:border-none' key={Stack.id}>
                        <div className='w-10 h-10'>
                            <img className='w-full h-full object-contain' src={Stack.icon} alt={Stack.icon} />
                        </div>
                        <div className='text-center'>
                            <p>{Stack.name}</p>
                            <p>{Stack.category}</p>
                        </div>
                        <div >
                            <button className='cursor-pointer' onClick={() =>  handleRemoveStack (Stack)}><RxCross2 /></button>
                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default AddSteck;