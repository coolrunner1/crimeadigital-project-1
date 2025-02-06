import {GetInTouchButton} from "./GetInTouchButton.tsx";
import {AboutMeImage} from "./AboutMeImage.tsx";

export const AboutMe = () => {
    return (
        <>
            <div id="about" className="font-montserrat p-5 mt-3 sm:p-20 sm:mt-0">
                <h2 className="text-2xl sm:text-3xl font-semibold sm:font-bold">About me</h2>
                <div className="flex flex-col gap-4 mt-16">
                    <div className="flex flex-col md:flex-row gap-7 justify-between">
                        <AboutMeImage/>
                        <div className="flex flex-col gap-7 lg:m-24">
                            <hr className="border-2 border-purple-500 w-8"></hr>
                            <div className="mb-5 text-xl text-gray-500"><span className="font-bold text-black">Nick Richardson</span> - specialist in Frontend development. Clear code is my passion. Solving issues through negotiations</div>
                            <GetInTouchButton customStyles="hidden md:flex"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};