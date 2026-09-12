// Import the star icon from React Icons
import { FaStar } from "react-icons/fa";

// Import the TechType type for TypeScript type checking
import type TechType from "../Types/TechType"; 

// Define the props that TechCard component will receive
export interface TechCardProps{ 
    // Information about the technology
    tech : TechType; 

    // Function received from the parent to add a technology to the stack
    handleAddStack : (tech: TechType) => void; 

    // Shows whether this technology is already added to the stack
    isAdded: boolean; 
} 

// TechCard component receives tech information, add function, and added status
const TechCard = ({tech , handleAddStack,  isAdded}: TechCardProps) => { 
 
    // Display the technology information inside a card
    return ( 
        <div className="flex flex-col h-full  min-h-[380px]  rounded-2xl border-gray-600  shadow-sm p-5 "> 

            {/* Top section containing technology icon and badge */}
            <div className="flex h-16 items-start justify-between "> 

                {/* Technology icon container */}
                <div className="w-14 h-14">

                    {/* Display the technology icon */}
                    <img className="w-full object-contain h-full" src={tech.icon} alt="" /> 
                </div> 
                     
                {/* Display a different style depending on the technology badge */}
                <p className={`rounded-full  
                    ${ 
                        tech.badge === "Popular" 
                        ? "btn btn-soft btn-primary" 
                        : tech.badge === "Top SQL" 
                        ? "btn btn-soft btn-info" 
                        : tech.badge === "Essential" 
                        ? "btn btn-soft btn-accent" 
                        : tech.badge === "Fast" 
                        ? "btn btn-soft btn-warning" 
                        : tech.badge === "Trending" 
                        ? "btn btn-soft btn-error" 
                        : tech.badge === "Enterprise" 
                        ? "btn btn-soft btn-secondary" 
                        : "btn btn-soft btn-success" 
                    } 
                    `}>{tech.badge}</p> 
            </div> 

            {/* Display the technology name */}
            <h2 className="text-2xl font-bold">{tech.name}</h2> 

            {/* Display the technology description */}
            <p className="text-xl mb-2  ">{tech.description}</p> 

            {/* Bottom section showing category, difficulty, and rating */}
            <div className="flex mt-auto items-center text-[clamp(8px,5vw,19px)]  justify-between"> 

                {/* Display the technology category */}
                <p className="btn btn-secondary rounded-lg">{tech.category}</p> 

                {/* Display the difficulty level */}
                <p>{tech.difficulty}</p> 

                {/* Display the star icon and technology rating */}
                <p className="flex gap-2.5 items-center">
                    <FaStar className="text-yellow-300"/>
                    {tech.rating}
                </p> 
            </div> 

            {/* Button for adding the technology to the user's stack */}
            <button  

                // Change the button style and text depending on whether it is already added
                className={`w-full mt-8 text-white cursor-pointer rounded-xl py-3  ${ 
                isAdded 
                    ? "bg-green-500 hover:bg-green-600" 
                    : "bg-black hover:bg-gray-600" 
 
                }`}  

                // Call handleAddStack and send the selected technology to the parent
                onClick={() => handleAddStack(tech)} 
            > 

                {/* Show different text when the technology is already added */}
                {isAdded ? "✓ Added to Stack" : 'Add to Stack' }
            </button> 
        </div> 
    ); 
}; 

// Export the TechCard component so it can be used in other components
export default TechCard;