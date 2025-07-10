export const BurgerMenu = () => {
    const entries = [
        {label: "Main", href: "#main"},
        {label: "About", href: "#about"},
        {label: "Get in touch", href: "#get-in-touch"}
    ]

    return (
        <div className="fixed z-50 flex flex-col p-3 gap-3 items-center bg-white justify-between shadow sm:hidden w-screen">
            {entries.map((entry) => (
                <a href={entry.href} className="hover:text-purple-600 text-xl">
                    {entry.label}
                </a>
            ))}
        </div>
    );
};