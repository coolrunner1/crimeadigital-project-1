import {Interests} from "./Interests.tsx";
import {EducationExperience} from "./EducationExperience.tsx";

export const MiddleSection = () => {
    return (
        <div className="grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-2 p-5 mt-3 sm:p-20 sm:mt-0 font-montserrat sm:gap-10">
            <Interests />
            <EducationExperience />
        </div>
    );
};