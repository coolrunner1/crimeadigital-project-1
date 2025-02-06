export const InterestsEntry = (props: {title: string, description: string, imagePath: string}) => {
    return (
        <>
            <div className="flex flex-row">
                <div className="border border-lavender rounded-full p-1">
                    <div className={"bg-[image:url("+props.imagePath+")] p-5 bg-center bg-no-repeat"}></div>
                </div>

                <div className="flex flex-col">
                    <span>{props.title}</span>
                    <span>{props.description}</span>
                </div>
            </div>
        </>
    );
};