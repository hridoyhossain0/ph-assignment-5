// Import the cross/close icon from React Icons
import { RxCross2 } from 'react-icons/rx';

// Import the TechType type for TypeScript type checking
import type TechType from '../Types/TechType';

// Define the props that AddSteck component will receive
interface AddSteckProps {
    // Array containing the technologies added to the stack
    addStack : TechType[];

    // Function received from the parent to remove a technology from the stack
    handleRemoveStack: (tech: TechType) => void;
}

// AddSteck component receives the stack data and remove function
const AddSteck = ({addStack,   handleRemoveStack } : AddSteckProps ) => {
    return (
        <div>
            {
                // map() is used to display every technology in the stack
                addStack.map(Stack => (

                    // Create a card for each technology
                    // key helps React identify each item uniquely
                    <div className='flex justify-between items-center border-gray-300 border-1  rounded-2xl my-2.5 p-5 hover:shadow-md hover:border-none' key={Stack.id}>

                        {/* Technology icon container */}
                        <div className='w-10 h-10'>

                            {/* Display the technology icon */}
                            <img className='w-full h-full object-contain' src={Stack.icon} alt={Stack.icon} />
                        </div>

                        {/* Display technology name and category */}
                        <div className='text-center'>
                            <p>{Stack.name}</p>
                            <p>{Stack.category}</p>
                        </div>

                        {/* Remove button container */}
                        <div >

                            {/* When clicked, call handleRemoveStack with the selected technology */}
                            <button className='cursor-pointer' onClick={() =>  handleRemoveStack (Stack)}>

                                {/* Display the cross icon */}
                                <RxCross2 />

                            </button>
                        </div>

                    </div>
                ))
            }
        </div>
    );
};

// Export AddSteck component so it can be used in other components
export default AddSteck;