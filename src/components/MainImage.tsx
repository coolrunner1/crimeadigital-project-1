import "../styles/MainImage.css";

export const MainImage = () => {
    return (
        <div className="relative overflow-hidden sm:min-w-96" id="main-image-container">
            <img src="/crimeadigital-project-1/man-main.png" alt="Man Main" id="main-man-img" className="absolute z-10 object-cover" />
            <img src="/crimeadigital-project-1/man-background.jpeg" alt="man background" className="rotate-45 opacity-70 aspect-square" id="background"/>
        </div>
    );
};