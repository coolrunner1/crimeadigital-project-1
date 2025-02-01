import {MainImage} from "./MainImage.tsx";
import "../styles/Main.css";

export const Main = () => {
    return (
        <>
            <div id="main" className="p-20">
                <div className="flex w-full flex-col sm:flex-row">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-5xl font-bold">Hey, I'm Nick</h1>
                        <span className="text-2xl text-gray-500">Frontend developer</span>
                        <hr className="border-2 border-purple-500 w-8 mt-10"></hr>
                        <span className="text-2xl text-gray-500">
                            Help you to create high-quality digital products that your clients will love and let your business thrive
                        </span>
                        <button className="flex flex-row border rounded-2xl p-2 justify-center items-center gap-2 text-white get-in-touch-button max-w-52">Get in touch
                            <svg width="19" height="18" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.99998 9.99998L1.26898 1.12598C7.80179 3.02565 13.9623 6.02677 19.485 9.99998C13.9627 13.9738 7.80256 16.9755 1.26998 18.876L3.99998 9.99998ZM3.99998 9.99998H11.5H3.99998Z" fill="#FCFBFA"/>
                                <path d="M3.99998 9.99998L1.26898 1.12598C7.80179 3.02565 13.9623 6.02677 19.485 9.99998C13.9627 13.9738 7.80256 16.9755 1.26998 18.876L3.99998 9.99998ZM3.99998 9.99998H11.5" stroke="#7E3AF2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <MainImage/>

                </div>

            </div>
        </>
    );
};