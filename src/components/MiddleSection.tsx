import {Interests} from "./Interests.tsx";

export const MiddleSection = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between p-5 mt-3 sm:p-20 sm:mt-0 font-montserrat">
                <Interests />
            </div>
        </>
    );
};