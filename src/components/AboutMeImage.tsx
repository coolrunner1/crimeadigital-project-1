import "../styles/AboutMeImage.css";

export const AboutMeImage = () => {
    return (
        <div id="about-img-container" className="relative overflow-hidden aspect-square m-auto">
            <img src="/man-about.png" alt="Man Main" id="about-man" className="absolute z-10 bg-gray-100 rounded-full aspect-square object-cover" />
            <img src="/man-background.jpeg" alt="man background" id="about-bg" className="opacity-70 rounded-full aspect-square"/>
        </div>
    );
};