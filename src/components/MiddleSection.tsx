import {Interests} from "./Interests.tsx";

export const MiddleSection = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between">
                <Interests />
            </div>
        </>
    );
};