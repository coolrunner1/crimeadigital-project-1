export const EducationExperienceEntry = (props: {years: string, position: string, place: string}) => {
    return (
        <>
            <div className="flex flex-row gap-6 text-xl">
                <div>{props.years}</div>
                <div className="flex flex-col gap-2">
                    <div className="font-bold">{props.position}</div>
                    <div>{props.place}</div>
                </div>
            </div>
        </>
    );
};