export type EducationExperienceEntryProps = {
    years: string,
    position: string,
    place: string
}

export const EducationExperienceEntry = (
    props: EducationExperienceEntryProps) => {

    return (
        <div className="grid grid-rows-1 grid-cols-2 gap-1 text-xl">
            <div>{props.years}</div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">{props.position}</div>
                <div>{props.place}</div>
            </div>
        </div>
    );
};