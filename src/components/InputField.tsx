export type InputFieldProps = {
    id: string;
    label: string;
    placeholder: string;
    image: string;
    invalid: boolean
};

export const InputField = (
    props: InputFieldProps) => {

    return (
        <label htmlFor={props.id} className="flex flex-col text-left text-base font-bold">
            <span>{props.label} <span className="text-red-700">*</span></span>
            <div className={`flex flex-row gap-2 border border-gray-300 rounded-2xl p-4`}>
                <div className={`p-3 bg-no-repeat bg-center ${props.invalid ? ` invalid:border-red-700 bg-[image:url(/error.svg)]` : props.image}`}></div>
                <input
                    id={props.id}
                    placeholder={props.placeholder}
                    type="text"
                    required={true}
                />
            </div>
            {props.invalid && <span className="text-sm text-red-700">Please fill this mandatory field</span>}
        </label>
    );
};