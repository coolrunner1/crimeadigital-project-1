import "../styles/InputField.css"

export const InputField = (props: {id: string; label: string; placeholder: string; image: string; invalid: boolean}) => {
    return (
        <label htmlFor={props.id} className="flex flex-col text-left text-base font-bold">
            <span>{props.label} <span className="text-red-700">*</span></span>
            <input id={props.id} placeholder={"       "+props.placeholder} type="text" required={true}
                   className={"input border border-gray-300 rounded-2xl p-4 [&:not(:placeholder-shown)]:bg-none focus:bg-none bg-no-repeat "
                       +(props.invalid ? " invalid:border-red-700 bg-[image:url(/error.svg)]" : props.image)} />
            {props.invalid && <span className="text-sm text-red-700">Please fill this mandatory field</span>}
        </label>
    );
};