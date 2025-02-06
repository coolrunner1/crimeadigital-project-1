import {InputField} from "./InputField.tsx";
import {Button} from "./Button.tsx";
import {useState} from "react";

export const GetInTouch = () => {
    const [validName, setValidName] = useState(true);
    const [validEmail, setValidEmail] = useState(true);

    return (
        <>
            <div id="get-in-touch" className="flex flex-col w-full h-full bg-gradient-to-b sm:bg-gradient-to-tr from-pink-300 via-red-300 to-yellow-300 font-montserrat">
                <form className="bg-white m-auto p-10 my-16 rounded-3xl flex flex-col gap-10">
                    <h2 className="text-2xl sm:text-3xl font-semibold sm:font-bold text-left">Let's discuss your project</h2>
                    <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-6">
                        <InputField id="name" label="Your full name" placeholder="Name Surname" image="bg-[image:url(/name.svg)]" invalid={!validName} />
                        <InputField id="email" label="Your email" placeholder="name@example.com" image="bg-[image:url(/mail.svg)]" invalid={!validEmail}/>
                    </div>
                    <label htmlFor="description" className="flex flex-col text-left font-bold text-base">
                        <span>Tell me about your project</span>
                        <textarea id="description" placeholder="Add here a general description of your idea and target aim"
                               className={"input border border-gray-300 rounded-2xl p-4"} />
                    </label>
                    <Button customStyles={"max-w-36"} text={"Submit"} onClick={() => {setValidName(!validName); setValidEmail(!validEmail)}}/>
                </form>
            </div>
        </>
    );
};