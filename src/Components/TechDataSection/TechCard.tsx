import { FaStar } from "react-icons/fa";
import type TechType from "../Types/TechType";

export interface TechCardProps{
    tech : TechType;
    handleAddStack : (tech: TechType) => void;
    isAdded: boolean;
}

const TechCard = ({tech , handleAddStack,  isAdded}: TechCardProps) => {

   

    return (
        <div className="flex flex-col h-full  min-h-[380px]  rounded-2xl border-gray-600  shadow-sm p-5 ">
            <div className="flex h-16 items-start justify-between ">
                <div className="w-14 h-14">
                    <img className="w-full object-contain h-full" src={tech.icon} alt="" />
                </div>
                    
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
            <h2 className="text-2xl font-bold">{tech.name}</h2>
            <p className="text-xl mb-2  ">{tech.description}</p>
            <div className="flex mt-auto items-center text-[clamp(8px,5vw,19px)]  justify-between">
                <p className="btn btn-secondary rounded-lg">{tech.category}</p>
                <p>{tech.difficulty}</p>
                <p className="flex gap-2.5 items-center"><FaStar className="text-yellow-300"/>{tech.rating}</p>
            </div>
            <button 

                className={`w-full mt-8 text-white cursor-pointer rounded-xl py-3  ${
                isAdded
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-black hover:bg-gray-600"

                }`} 
                onClick={() => handleAddStack(tech)}
            >
                {isAdded ? "✓ Added to Stack" : 'Add to Stack' }</button>
        </div>
    );
};

export default TechCard;