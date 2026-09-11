import { FaStar } from "react-icons/fa";
import type TechType from "../Types/TechType";

export interface TechCardProps{
    tech : TechType;
}

const TechCard = ({tech}: TechCardProps) => {
    return (
        <div className="p-5 shadow space-y-6 rounded-2xl">
            <div className="flex justify-between ">
                <img className="w-14 pt-2" src={tech.icon} alt="" />
                <p>{tech.badge}</p>
            </div>
            <h2 className="text-2xl font-bold">{tech.name}</h2>
            <p className="text-xl">{tech.description}</p>
            <div className="flex items-center text-lg justify-between">
                <p className="btn btn-soft rounded-lg">{tech.category}</p>
                <p>{tech.difficulty}</p>
                <p className="flex gap-2.5 items-center"><FaStar className="text-yellow-300"/>{tech.rating}</p>
            </div>
            <button className="w-full bg-black text-white rounded-2xl py-3">Add to Stack</button>
        </div>
    );
};

export default TechCard;