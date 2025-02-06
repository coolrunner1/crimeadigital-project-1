import {InterestsEntry} from "./InterestsEntry.tsx";

export const Interests = () => {
    return (
        <>
            <div className="flex flex-col gap-6 sm:gap-10">
                <h1 className="text-2xl font-bold sm:font-semibold">Interests</h1>
                <InterestsEntry title={"Music"} description={"Indie rock | Reggae"} image="bg-music"/>
                <InterestsEntry title={"Art"} description={"Edvard Munch | Frida Kahlo"} image="bg-art"/>
                <InterestsEntry title={"Photography"} description={"Portraits"} image="bg-photo"/>
            </div>
        </>
    );
};