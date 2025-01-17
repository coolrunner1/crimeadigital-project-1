export const Main = () => {
    return (
        <>
            <div id="main" className="p-20">
                <div className="flex w-full flex-col sm:flex-row">
                    <div className="flex flex-col">
                        <h1 className="text-7xl font-bold">Hey, I'm Nick</h1>
                        <span className="text-2xl text-gray-500">Frontend developer</span>
                        <hr className="border-2 border-purple-500 w-8"></hr>
                        <span className="text-2xl text-gray-500">
                            Help you to create high-quality digital products that your clients will love and let your business thrive
                        </span>
                    </div>
                    <div>
                        <img src="/man-main.png" alt="Man Main" />
                        <img src="/man-background.jpeg" alt="man background" className="rotate-45 rounded-3xl"/>
                    </div>

                </div>

            </div>
        </>
    );
};