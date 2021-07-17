import React from "react";

function Navigation() {
    const colapseMenu = async () => {
        document.body.classList.add("nav-close");
    };
    const expandMenu = async () => {
        document.body.classList.remove("nav-close");
    };
    const closeNav = async () => {
        document.body.classList.remove("mobile-nav-open");
    };

    return (
        <>
            <div
                onClick={() => {
                    closeNav();
                }}
                className="mobile-black-drop fixed top-0 left-0 w-full h-full bg-gray-900 z-10 opacity-0 sm:hidden pointer-events-none"
            ></div>
            <div
                className="
            sidebar-nav bg-rhino flex flex-wrap text-left flex-col fixed z-10 py-4 w-240px h-full transform -translate-x-full
            sm:block sm:translate-x-0
            md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden"
            >
                <div
                    onClick={() => {
                        colapseMenu();
                    }}
                    className="hidden toggleMenu sm:flex items-center -ml-10 -mt-4 px-6 cursor-pointer h-16"
                >
                    <span className="text-melrose ml-auto">
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
                                d="M15 19l-7-7 7-7"
                            />{" "}
                        </svg>
                    </span>
                </div>
                <div
                    onClick={() => {
                        expandMenu();
                    }}
                    className="company-logo mb-10"
                >
                    <a
                        href="/#"
                        className="pl-10 flex items-center text-melrose text-3xl cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="37"
                        >
                            <defs>
                                <linearGradient
                                    x1="0%"
                                    y1="50.0003637%"
                                    x2="100%"
                                    y2="50.0003637%"
                                    id="A"
                                >
                                    <stop stopColor="#ec441e" offset="0%" />
                                    <stop stopColor="#ee2a4a" offset="100%" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M23.144 7.245c1.079.001 2.113.43 2.876 1.193a4.07 4.07 0 0 1 1.193 2.874v11.203a13.59 13.59 0 0 1-1.036 5.204c-.684 1.65-1.686 3.149-2.95 4.411a13.61 13.61 0 0 1-4.414 2.948 13.62 13.62 0 0 1-5.207 1.035c-1.787 0-3.556-.352-5.207-1.035a13.61 13.61 0 0 1-4.414-2.948 13.6 13.6 0 0 1-2.95-4.411A13.59 13.59 0 0 1 0 22.515V11.312C0 10.234.429 9.2 1.192 8.437a4.07 4.07 0 0 1 5.755 0c.763.763 1.192 1.797 1.192 2.875v10.13a5.46 5.46 0 0 0 .391 2.118c.27.673.671 1.286 1.18 1.802s1.116.927 1.785 1.207a5.47 5.47 0 0 0 4.226 0c.669-.28 1.276-.69 1.785-1.207s.91-1.129 1.18-1.802a5.46 5.46 0 0 0 .391-2.118v-10.13a4.07 4.07 0 0 1 1.193-2.874c.763-.762 1.797-1.191 2.876-1.193zm2.289 15.269V11.312c0-.607-.241-1.188-.67-1.617a2.29 2.29 0 0 0-3.237 0c-.429.429-.67 1.011-.67 1.617v10.13a7.24 7.24 0 0 1-2.123 5.122 7.25 7.25 0 0 1-10.251 0 7.24 7.24 0 0 1-2.123-5.122v-10.13c-.005-.603-.249-1.18-.677-1.605a2.29 2.29 0 0 0-3.223 0c-.429.425-.672 1.002-.677 1.605v11.202c0 3.134 1.246 6.14 3.464 8.357a11.83 11.83 0 0 0 16.725 0c2.218-2.216 3.464-5.222 3.464-8.357zM12.717 9.319c-1.149-.221-2.175-.863-2.876-1.799a4.7 4.7 0 0 1 .602-6.297C11.308.436 12.436 0 13.607 0s2.299.436 3.165 1.223a4.7 4.7 0 0 1 .602 6.297c-.701.936-1.727 1.578-2.876 1.799v11.728a.89.89 0 0 1-.89.89.89.89 0 0 1-.89-.89V9.319zm.89-7.538a2.93 2.93 0 0 0-2.067.857c-.548.548-.857 1.291-.858 2.066a2.92 2.92 0 0 0 .493 1.624c.321.481.778.855 1.313 1.077s1.123.279 1.69.166 1.088-.391 1.498-.8a2.92 2.92 0 0 0 .634-3.185c-.221-.534-.596-.991-1.077-1.312s-1.046-.493-1.625-.493z"
                                fill="url(#A)"
                            />
                        </svg>

                        <span className="ml-2 text-melrose md:block logo-word">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="83"
                                height="24"
                            >
                                <defs>
                                    <linearGradient
                                        x1="5.6004825%"
                                        y1="-56.1147797%"
                                        x2="98.5315658%"
                                        y2="155.80574%"
                                        id="A"
                                    >
                                        <stop
                                            stopColor="#fff"
                                            stopOpacity=".69"
                                            offset="0%"
                                        />
                                        <stop
                                            stopColor="#deddff"
                                            stopOpacity=".7"
                                            offset="100%"
                                        />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M9.68 23.36c-1.7 0-3.21-.35-4.53-1.05-1.3-.7-2.33-1.69-3.09-2.97-.74-1.3-1.11-2.84-1.11-4.62V2h4.29v12.99c0 .84.18 1.61.54 2.31.36.68.87 1.23 1.53 1.65.68.42 1.47.63 2.37.63.92 0 1.71-.21 2.37-.63s1.17-.97 1.53-1.65c.36-.7.54-1.47.54-2.31V2h4.29v12.72c0 1.78-.38 3.32-1.14 4.62a7.62 7.62 0 0 1-3.09 2.97c-1.3.7-2.8 1.05-4.5 1.05zM22.907 23v-8.79c0-1.26.29-2.41.87-3.45.6-1.04 1.46-1.87 2.58-2.49s2.46-.93 4.02-.93c1.58 0 2.92.31 4.02.93 1.12.62 1.97 1.45 2.55 2.49.6 1.04.9 2.19.9 3.45V23h-4.11v-8.79c0-.94-.33-1.73-.99-2.37-.64-.66-1.43-.99-2.37-.99a3.23 3.23 0 0 0-2.37.99c-.66.64-.99 1.43-.99 2.37V23h-4.11zm19.438 0V7.7h4.14V23h-4.14zm2.07-17.13c-.7 0-1.31-.25-1.83-.75-.5-.52-.75-1.13-.75-1.83s.25-1.3.75-1.8c.52-.52 1.13-.78 1.83-.78s1.3.26 1.8.78c.52.5.78 1.1.78 1.8s-.26 1.31-.78 1.83c-.5.5-1.1.75-1.8.75zm13.218 17.49c-.9 0-1.72-.24-2.46-.72-.72-.48-1.22-1.11-1.5-1.89L49.293 7.7h4.47l3.54 11.37c.06.16.18.24.36.24s.3-.08.36-.24l3.57-11.37h4.38l-4.38 13.02c-.28.78-.79 1.42-1.53 1.92a4.28 4.28 0 0 1-2.43.72zm18.32-.36c-1.74 0-3.26-.33-4.56-.99-1.28-.68-2.28-1.6-3-2.76-.7-1.16-1.05-2.46-1.05-3.9 0-1.62.33-3.03.99-4.23s1.56-2.13 2.7-2.79 2.43-.99 3.87-.99c1.72 0 3.11.36 4.17 1.08 1.08.72 1.87 1.69 2.37 2.91.5 1.2.75 2.54.75 4.02l-.03.72c-.02.26-.05.46-.09.6h-10.35c.22.92.71 1.62 1.47 2.1.78.48 1.72.72 2.82.72h4.26V23h-4.32zm-4.26-9.09h6.39c-.08-.98-.39-1.75-.93-2.31-.52-.58-1.26-.87-2.22-.87-1.02 0-1.79.33-2.31.99-.52.64-.83 1.37-.93 2.19zm1.5-8.22L75.713 2h3.87l-2.52 3.69h-3.87z"
                                    fill="currentcolor"
                                />
                            </svg>
                        </span>
                    </a>
                </div>
                <ul className="md:flex-col sm:block md:min-w-full flex flex-col list-none">
                    <li className="nav-item items-center">
                        <a
                            href="/#"
                            className="pl-10 text-base flex items-center py-4 font-medium block text-melrose hover:text-white"
                        >
                            <i className="inline-block">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                    />
                                </svg>
                            </i>
                            <span className="lbl pl-4 md:block">Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item items-center">
                        <a
                            href="/#"
                            className="pl-10 text-base flex items-center py-4 font-medium block text-melrose hover:text-white"
                        >
                            <i className="inline-block">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {" "}
                                    <path
                                        strokeWidth="2"
                                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />{" "}
                                </svg>
                            </i>
                            <span className="lbl pl-4 md:block">Courses</span>
                        </a>
                    </li>
                    <li className="nav-item items-center">
                        <a
                            href="/#"
                            className="pl-10 text-base flex items-center py-4 font-medium block text-melrose hover:text-white"
                        >
                            <i className="inline-block">
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
                                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />{" "}
                                </svg>
                            </i>
                            <span className="lbl pl-4 md:block">Materials</span>
                        </a>
                    </li>
                    <li className="nav-item items-center">
                        <a
                            href="/#"
                            className="pl-10 text-base flex items-center py-4 font-medium block text-melrose hover:text-white"
                        >
                            <i className="inline-block">
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
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />{" "}
                                </svg>
                            </i>
                            <span className="lbl pl-4 md:block">Calendar</span>
                        </a>
                    </li>
                    <li className="nav-item items-center">
                        <a
                            href="/#"
                            className="pl-10 text-base flex items-center py-4 font-medium block text-melrose hover:text-white"
                        >
                            <i className="inline-block">
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
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                    />{" "}
                                </svg>
                            </i>
                            <span className="lbl pl-4 md:block">
                                Transcripts
                            </span>
                        </a>
                    </li>
                    <li className="nav-item items-center">
                        <a
                            href="/#"
                            className="pl-10 text-base flex items-center py-4 font-medium block text-melrose hover:text-white"
                        >
                            <i className="inline-block">
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
                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                    />{" "}
                                </svg>
                            </i>
                            <span className="lbl pl-4 md:block">Grades</span>
                        </a>
                    </li>
                    <li className="nav-item items-center">
                        <a
                            href="/#"
                            className="pl-10 text-base flex items-center py-4 font-medium block text-melrose hover:text-white"
                        >
                            <i className="inline-block">
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
                                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                                    />{" "}
                                </svg>
                            </i>
                            <span className="lbl pl-4 md:block">
                                Attendance
                            </span>
                        </a>
                    </li>
                    <li className="nav-item items-center">
                        <a
                            href="/#"
                            className="pl-10 text-base flex items-center py-4 font-medium block text-melrose hover:text-white"
                        >
                            <i className="inline-block">
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
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                    />{" "}
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />{" "}
                                </svg>
                            </i>
                            <span className="lbl pl-4 md:block">Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navigation;
