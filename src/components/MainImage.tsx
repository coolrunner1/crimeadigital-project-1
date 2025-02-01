export const MainImage = () => {
    return (
        <>
            <div className="relative overflow-hidden">
                <img src="/man-main.png" alt="Man Main" className="absolute z-10"/>
                <img src="/man-background.jpeg" alt="man background" className="rotate-45 mt-96 ml-96"/>
            </div>
        </>
    );
};