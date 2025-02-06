import {useEffect, useState} from "react";

export const InterestsEntry = (props: {title: string, description: string, image: string}) => {
    const [image, setImage] = useState("");

    useEffect(() => {
        setImage(props.image+" p-5 bg-center bg-no-repeat")
    }, [props.image]);
    return (
        <>
            <div className="flex flex-row gap-3">
                <div className="border-2 border-lavender rounded-full p-2">
                    <div className={image}></div>
                </div>

                <div className="flex flex-col justify-center text-xl">
                    <span className="font-bold">{props.title}</span>
                    <span className="font-light">{props.description}</span>
                </div>
            </div>
        </>
    );
};