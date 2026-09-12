// Import React hooks: use() for reading the Promise data and useState for managing state
import { use, useState } from 'react';

// Import toast for showing notification messages
import { toast } from "react-toastify";

// Import the TypeScript type for technology data
import type TechType from '../Types/TechType';

// Import the TechCard component
import TechCard from './TechCard';

// Import the component that displays the user's selected stack
import AddSteck from '../yourSteckSectionData/AddSteck';


// Define the props type for the Tech component
export interface TechProps {
    // Promise containing the technology data
    PromiseTech: Promise<TechType[]>
}


const Tech = ({ PromiseTech }: TechProps) => {

    // Get the technology data from the Promise
    const techs = use(PromiseTech);


    // Create state to store the technologies added to the user's stack
    const [addStack, setAddStack] = useState<TechType[]>([]);


    // Function to add a technology to the stack
    const handleAddStack = (tech: TechType): void => {

        // Check whether the technology is already in the stack
        const alreadyAdded = addStack.some(item => item.id === tech.id);


        // If the technology already exists, show a warning and stop the function
        if (alreadyAdded) {
            toast.warning(`${tech.name} is already in your stack`);
            return;
        }


        // Add the new technology to the stack
        setAddStack(prev => [...prev, tech]);

        // Show a success notification
        toast.success(`${tech.name} added to your stack`);
    };


    // Function to remove one technology from the stack
    const handleRemoveStack = (tech: TechType): void => {

        // Remove the selected technology by filtering its ID
        setAddStack(prev =>
            prev.filter(item => item.id !== tech.id)
        );

        // Show a notification after removing the technology
        toast.info(`${tech.name} removed from your stack`);
    };


    // Function to remove all technologies from the stack
    const handleRemoveAll = (): void => {

        // Check if the stack is already empty
        if (addStack.length === 0) {

            // Show a warning if there is nothing to remove
            toast.warning("Your stack is already empty");

            return;
        }


        // Clear all technologies from the stack
        setAddStack([]);

        // Show a notification after removing everything
        toast.error("All technologies removed from your stack");
    };


    // Change the button text depending on whether the stack is empty
    const yourSteckButton =
        addStack.length === 0 ? "Your stack is empty" : "Remove All";


    // Change the stack message depending on whether technologies are selected
    const yourSteck =
        addStack.length === 0
            ? 'No technologies selected yet'
            : `${addStack.length} Technology Selected`;


    return (

        // Main container for the technology section
        <div className='container mx-auto'>

            {/* Technology section heading and description */}
            <div className='my-20 space-y-4'>

                {/* Main heading */}
                <p className='text-5xl font-bold'>
                    Explore the
                    <span className='text-pink-400'> Technologies</span>
                </p>

                {/* Section description */}
                <p className='text-2xl'>
                    Pick one technology per category to build your ideal stack.
                </p>

            </div>


            {/* Main grid containing technology cards and user's stack */}
            <div className='grid gap-7 grid-cols-3 w-full lg:grid-cols-3 xl:grid-cols-4'>


                {/* Left side: technology cards */}
                <div className='col-span-2 lg:col-span-2 xl:col-span-3'>

                    {/* Grid for displaying all technology cards */}
                    <div className='grid gap-7 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>

                        {/* Loop through the technology data and create a TechCard for each technology */}
                        {techs.map(tech => <TechCard

                            // Unique key for each technology card
                            key={tech.id}

                            // Pass the technology data to the TechCard
                            tech={tech}

                            // Pass the add function to the child component
                            handleAddStack={handleAddStack}

                            // Check whether this technology is already added
                            isAdded={addStack.some(item => item.id === tech.id)}

                        />)}

                    </div>

                </div>


                {/* Right side: user's selected stack */}
                <div className='rounded-2xl space-y-3 border-gray-500 col-span-1 self-start shadow-sm p-5'>

                    {/* Stack section heading */}
                    <h1 className='text-2xl font-bold'>
                        Your Stack
                    </h1>

                    {/* Display the current stack status */}
                    <p className='text-lg'>
                        {yourSteck}
                    </p>


                    {/* Display the technologies added to the stack */}
                    <AddSteck
                        // Pass the selected technologies to the child component
                        addStack={addStack}

                        // Pass the remove function to the child component
                        handleRemoveStack={handleRemoveStack}
                    />


                    {/* Button for removing all technologies */}
                    <button
                        // Call handleRemoveAll when the button is clicked
                        onClick={handleRemoveAll}

                        // Change the button style depending on whether the stack is empty
                        className={`text-xl rounded-2xl font-semibold w-full cursor-pointer hover:border-0 hover:shadow ${
                            addStack.length === 0
                                ? 'whenNoSteckButton'
                                : 'whenAddSteckButton'
                        }`}
                    >
                        {/* Display the appropriate button text */}
                        {yourSteckButton}

                    </button>

                </div>

            </div>

        </div>
    );
};


// Export the Tech component so it can be used in other components
export default Tech;