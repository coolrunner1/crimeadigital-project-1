import {MainImage} from "./MainImage.tsx";
import {Button} from "./Button.tsx";

export const Main = () => {
    return (
        <div id="main" className="font-montserrat max-w-[2000px] mx-auto">
            <div className="flex w-full flex-col md:flex-row justify-between">
                <div className="flex flex-col gap-4 p-5 mt-3 sm:p-20 md:pr-0 md:min-w-96 sm:mt-0">
                    <h1 className="font-semibold text-2xl sm:text-6xl sm:font-bold">Hey, I'm Nick</h1>
                    <span className="text-xl text-gray-500">Frontend developer</span>
                    <hr className="border-2 border-lavender w-8 mt-10"></hr>
                    <span className="text-xl text-gray-500">
                            Help you to create high-quality digital products that your clients will love and let your business thrive
                        </span>
                    <Button text={"Get in touch"} />
                </div>
                <MainImage/>
            </div>
        </div>
    );
};