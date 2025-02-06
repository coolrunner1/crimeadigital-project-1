import {MainImage} from "./MainImage.tsx";
import "../styles/Main.css";
import {GetInTouchButton} from "./GetInTouchButton.tsx";

export const Main = () => {
    return (
        <>
            <div id="main">
                <div className="flex w-full flex-col md:flex-row justify-between">
                    <div className="flex flex-col gap-4 p-20">
                        <h1 className="text-5xl font-bold">Hey, I'm Nick</h1>
                        <span className="sm:text-2xl text-gray-500">Frontend developer</span>
                        <hr className="border-2 border-lavender w-8 mt-10"></hr>
                        <span className="sm:text-2xl text-gray-500">
                            Help you to create high-quality digital products that your clients will love and let your business thrive
                        </span>
                        <GetInTouchButton customStyles={""}/>
                    </div>
                    <MainImage/>

                </div>

            </div>
        </>
    );
};