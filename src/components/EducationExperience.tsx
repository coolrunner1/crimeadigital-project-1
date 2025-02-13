import {EducationExperienceEntry} from "./EducationExperienceEntry.tsx";

export const EducationExperience = () => {
    return (
        <div className="flex flex-col gap-6 sm:gap-10">
            <h1 className="text-2xl font-bold sm:font-semibold">Education & Experience</h1>
            <EducationExperienceEntry years={"2008 - Present"} position={"Middle Frontend developer"} place={"Ozon"}/>
            <hr className="border-1 border-gray-200"></hr>
            <EducationExperienceEntry years={"2006 - 2007"} position={"Frontend Development courses"} place={"Stepik"}/>
            <hr className="border-1 border-gray-200"></hr>
            <EducationExperienceEntry years={"2000 - 2005"} position={"Frontend developer"} place={"Saint Petersburg State University"}/>
        </div>
    );
};