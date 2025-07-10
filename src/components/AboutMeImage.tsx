export const AboutMeImage = () => {
    return (
        <div className="relative w-auto sm:w-[500px] sm:min-w-[300px] lg:min-w-[450px] overflow-hidden aspect-square m-auto">
            <img src="/crimeadigital-project-1/man-about.png" alt="Man Main" className="w-[90%] h-[90%] m-[5%] absolute z-10 bg-gray-100 rounded-full aspect-square object-cover" />
            <img src="/crimeadigital-project-1/man-background.jpeg" alt="man background" className="w-full h-full opacity-70 rounded-full aspect-square"/>
        </div>
    );
};