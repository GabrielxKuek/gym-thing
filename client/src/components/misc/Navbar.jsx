import { useEffect, useState } from "react";

const Navbar = () => {
    const [currentPath, setCurrentPath] = useState("")

    useEffect(() => {
        const setPath = () => {
            setCurrentPath(window.location.pathname);
        };

        setPath();

        window.addEventListener("popstate", () => {
            setPath();
        })

        return () => {
            window.removeEventListener("popstate", setPath);
        }
    }, [])

    const isActive = (path) => {
        return currentPath == path;
    }

    return (
        <>
        <div className="py-10 px-15">
            <div className="content-between flex justify-between">
                {/* left */}
                <div className="content-start flex gap-20">
                    <h1
                        className="font-bold text-shadow text-shadow-lg/10 clickable flex items-center"
                        onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}
                    >
                        Gym Thing
                    </h1>

                    <ul className="flex items-center gap-20">
                        <li>
                            <h2
                                className={`clickable ${isActive("/progress") ? "" : "opacity-50"}`}
                                onClick={() => window.location.href = "/progress"}
                            >
                                Progress
                            </h2>
                        </li>

                        <li>
                            <h2
                                className={`clickable ${isActive("exercises") ? "" : "opacity-50"}`}
                                onClick={() => window.location.href = "/exercises"}
                            >
                                Exercises
                            </h2>
                        </li>
                    </ul>

                </div>
                
                {/* right */}
                {/* future plans lol */}
            </div>
        </div>
        </>
    )
}

export default Navbar;