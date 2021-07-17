import React from "react";
import AccountImage from "../../images/account-image.jpg";

function TopBar() {
    const openNav = async () => {
        document.body.classList.add("mobile-nav-open");
    };

    return (
        <div
            onClick={() => {
                openNav();
            }}
            className="top-bar h-48px sm:h-16 lg:h-20 bg-white flex w-full items-center relative"
        >
            <div className="h-full flex bg-rhino items-center justify-center sm:hidden mobile-menu-button flex-shrink px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="31">
                    <defs>
                        <linearGradient
                            x1="1.6585097e-15%"
                            y1="50%"
                            x2="99.9955934%"
                            y2="50%"
                            id="A"
                        >
                            <stop stopColor="#ec441e" offset="0%" />
                            <stop stopColor="#ee2a4a" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M19.299 6.042h.001a3.4 3.4 0 0 1 2.398.994c.636.636.994 1.498.995 2.397v9.341a11.33 11.33 0 0 1-.864 4.339c-.57 1.375-1.405 2.625-2.459 3.678a11.35 11.35 0 0 1-8.023 3.321 11.35 11.35 0 0 1-8.023-3.321 11.34 11.34 0 0 1-2.46-3.678A11.33 11.33 0 0 1 0 18.774V9.433a3.39 3.39 0 0 1 3.394-3.391 3.39 3.39 0 0 1 3.393 3.391v8.447a4.54 4.54 0 0 0 .326 1.766 4.57 4.57 0 0 0 .984 1.503 4.56 4.56 0 0 0 1.488 1.007c.558.234 1.157.354 1.762.354s1.204-.121 1.762-.354a4.56 4.56 0 0 0 1.488-1.007c.424-.431.758-.942.983-1.503a4.54 4.54 0 0 0 .326-1.766V9.433c.001-.899.359-1.761.995-2.397a3.4 3.4 0 0 1 2.398-.994zm1.909 12.732h.001V9.433c0-.506-.201-.991-.559-1.349a1.91 1.91 0 0 0-2.699 0c-.358.358-.559.843-.559 1.349v8.447a6.04 6.04 0 0 1-1.77 4.271c-1.134 1.133-2.671 1.769-4.274 1.769s-3.14-.636-4.274-1.769a6.04 6.04 0 0 1-1.77-4.271V9.433a1.91 1.91 0 0 0-3.253-1.338c-.358.354-.561.835-.565 1.338v9.341a9.85 9.85 0 0 0 2.888 6.968c1.849 1.848 4.358 2.886 6.973 2.886s5.124-1.038 6.973-2.886a9.85 9.85 0 0 0 2.888-6.968zM10.604 7.77l-.001.001A3.92 3.92 0 0 1 8.707 1.02C9.429.364 10.37 0 11.346 0s1.917.364 2.638 1.019a3.92 3.92 0 0 1 .502 5.251c-.585.781-1.44 1.315-2.398 1.5v9.779a.74.74 0 0 1-.217.525c-.139.139-.328.217-.525.217s-.386-.078-.525-.217a.74.74 0 0 1-.217-.525V7.77zm.742-6.285c-.647.001-1.267.258-1.724.715a2.44 2.44 0 0 0-.714 1.723c0 .482.143.953.411 1.354a2.44 2.44 0 0 0 4.42-.879A2.43 2.43 0 0 0 13.6 2.99a2.44 2.44 0 0 0-2.254-1.505z"
                        fill="#EC441E"
                    />
                </svg>
            </div>
            <div className="w-full flex items-center h-full relative">
                <i className="absolute left-5 pointer-events-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            d="M14.472 12.899l5.428 5.38c.191.189.298.446.298.713s-.107.524-.298.713a1.02 1.02 0 0 1-.72.295c-.27 0-.529-.106-.72-.296l-5.428-5.38c-1.623 1.246-3.663 1.832-5.707 1.639s-3.936-1.149-5.293-2.676S-.044 9.781.021 7.748.93 3.782 2.381 2.343 5.783.069 7.834.004s4.051.648 5.591 1.993 2.506 3.22 2.7 5.246a7.95 7.95 0 0 1-1.654 5.656h.001zM8.09 14a6.08 6.08 0 0 0 4.281-1.757c1.135-1.125 1.773-2.651 1.773-4.243s-.638-3.117-1.773-4.243A6.08 6.08 0 0 0 8.09 2a6.08 6.08 0 0 0-4.281 1.757C2.674 4.883 2.036 6.409 2.036 8s.638 3.117 1.773 4.243A6.08 6.08 0 0 0 8.09 14z"
                            fill="#5855d6"
                        />
                    </svg>
                </i>
                <div className="py-1 px-2 pr-5 search-input w-full h-full sm:h-full sm:pr-0">
                    <input
                        type="search"
                        className="pl-11 bg-white-lilac sm:bg-transparent rounded-lg h-full outline-none appearance-none pr-3 w-full text-sm"
                        data-desktop="Search course, student or instructor"
                        data-mobile="Search"
                        placeholder="Search course, student or instructor"
                    />
                </div>
            </div>
            <div className="sm:border-solid sm:border-gray-300 sm:border-l flex items-center sm:mr-10 text-white sm:pl-10">
                <div className="relative w-7 h-7 bg-indigo rounded-full mr-5 flex items-center justify-center cursor-pointer">
                    <div className="absolute top-1 right-1 w-2 h-2 bg-emerald rounded-full"></div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        {" "}
                        <path
                            fillRule="evenodd"
                            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                            clipRule="evenodd"
                        />{" "}
                    </svg>
                </div>
                <div className="hidden relative w-7 h-7 bg-indigo rounded-full sm:flex items-center justify-center cursor-pointer">
                    <div className="absolute top-1 right-1 w-2 h-2 bg-radical-red rounded-full"></div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        {" "}
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />{" "}
                    </svg>
                </div>
            </div>
            <div className="flex items-center cursor-pointer">
                <div className="overflow-hidden w-7 sm:w-10 w-7 sm:h-10 bg-gray-200 rounded-full mr-3">
                    <img src={AccountImage} alt="" srcSet="" />
                </div>
                <div className="hidden sm:block">
                    <div className="font-bold text-md color-black leading-4 mb-1 whitespace-pre">
                        Mia V
                    </div>
                    <div className="text-xs opacity-90 text-indigo">
                        Student
                    </div>
                </div>
            </div>
            <div className="hidden sm:block button-menu p-6 pl-10 text-gray-500 cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {" "}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />{" "}
                </svg>
            </div>
        </div>
    );
}

export default TopBar;
