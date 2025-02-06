import {Interests} from "./Interests.tsx";
import {EducationExperience} from "./EducationExperience.tsx";

export const MiddleSection = () => {
    return (
        <>
            <div className="flex flex-col justify-evenly md:flex-row p-5 mt-3 sm:p-20 sm:mt-0 font-montserrat gap-10">
                <Interests />
                <EducationExperience />
            </div>
        </>
    );
};