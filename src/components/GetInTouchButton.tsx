export const GetInTouchButton = (props: { customStyles: string; }) => {
    return (
        <>
            <button className={props.customStyles+" font-montserrat flex flex-row border rounded-3xl p-2 pt-3 pb-3 justify-center items-center gap-2 text-white bg-lavender border-lavender max-w-48 font-bold"}>Get in touch
                <svg width="19" height="18" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.99998 9.99998L1.26898 1.12598C7.80179 3.02565 13.9623 6.02677 19.485 9.99998C13.9627 13.9738 7.80256 16.9755 1.26998 18.876L3.99998 9.99998ZM3.99998 9.99998H11.5H3.99998Z" fill="#FCFBFA"/>
                    <path d="M3.99998 9.99998L1.26898 1.12598C7.80179 3.02565 13.9623 6.02677 19.485 9.99998C13.9627 13.9738 7.80256 16.9755 1.26998 18.876L3.99998 9.99998ZM3.99998 9.99998H11.5" stroke="#7E3AF2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </>
    );
};