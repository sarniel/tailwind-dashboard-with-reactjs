import React from "react";
import ResearchImage from "../../images/ux-research-img.jpg";
function CheckedInCard() {
    return (
        <div className="bg-white flex sm:block p-3 sm:px-6 sm:py-5 rounded-3xl w-full sm:w-2/5">
            <div className="w-72px h-72px sm:w-full sm:h-221px md:w-full relative mr-5 sm:mr-0 sm:mb-5 overflow-hidden rounded-xl bg-gray-200 session-feat-img">
                <div className="w-full h-full sm:w-auto sm:h-auto flex flex-col items-center bg-indigo py-2 px-1 absolute top-0 justify-center bg-opacity-70 sm:bg-opacity-100 sm:right-4 rounded-b-xl text-center">
                    <i className="">
                        <svg
                            width="19"
                            height="16"
                            viewBox="0 0 19 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.0466 0.482008C16.3749 0.169427 16.8118 -0.00337989 17.2652 5.01005e-05C17.7185 0.00348009 18.1527 0.182879 18.4763 0.500392C18.7998 0.817905 18.9874 1.2487 18.9994 1.70187C19.0114 2.15504 18.8468 2.59514 18.5405 2.9293L9.24078 14.5598C9.08087 14.732 8.88787 14.8703 8.67331 14.9662C8.45876 15.0621 8.22707 15.1138 7.99208 15.1182C7.75709 15.1225 7.52364 15.0795 7.30568 14.9915C7.08773 14.9036 6.88974 14.7726 6.72356 14.6064L0.556372 8.43922C0.384626 8.27918 0.246873 8.08619 0.15133 7.87177C0.0557879 7.65734 0.0044133 7.42586 0.000272046 7.19115C-0.00386921 6.95644 0.0393078 6.72329 0.127226 6.50563C0.215145 6.28796 0.346004 6.09023 0.511998 5.92424C0.677992 5.75825 0.875719 5.62739 1.09338 5.53947C1.31105 5.45155 1.54419 5.40837 1.77891 5.41251C2.01362 5.41666 2.2451 5.46803 2.45953 5.56357C2.67395 5.65911 2.86694 5.79687 3.02698 5.96861L7.90759 10.8469L16.0023 0.533285C16.0169 0.51534 16.0324 0.498221 16.0489 0.482008H16.0466Z"
                                fill="#4ED964"
                            />
                        </svg>
                    </i>
                    <div className="text-xs8 text-white font-semibold">
                        Checked In
                    </div>
                </div>
                <img src={ResearchImage} alt="" />
            </div>
            <div className="details">
                <div className="flex items-center">
                    <div>
                        <div className="text-base sm:text-xl">
                            UX Research - Week 3
                        </div>
                        <div className="uppercase text-xs text-manatee">
                            CERTIFICATE UX/UI design
                        </div>
                    </div>
                    <div className="text-manatee ml-auto">
                        <div className="text-lg text-center font-bold leading-4">
                            08
                        </div>
                        <div className="uppercase text-xs">April</div>
                    </div>
                </div>
                <div className="flex items-center">
                    <i className="pr-1">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 20.2C16.5287 20.2 20.2 16.5287 20.2 12C20.2 7.47125 16.5287 3.79999 12 3.79999C7.47127 3.79999 3.8 7.47125 3.8 12C3.8 16.5287 7.47127 20.2 12 20.2Z"
                                stroke="#FF2C55"
                            />
                            <path
                                d="M12 8.86011V12.8601L14.14 13.8801"
                                stroke="#FF2C55"
                            />
                            <path
                                d="M12 20.2C16.5287 20.2 20.2 16.5287 20.2 12C20.2 7.47125 16.5287 3.79999 12 3.79999C7.47127 3.79999 3.8 7.47125 3.8 12C3.8 16.5287 7.47127 20.2 12 20.2Z"
                                stroke="#FF2C55"
                            />
                        </svg>
                    </i>
                    <span className="text-sm text-radical-red italic">
                        In Progress
                    </span>
                    <a
                        href=""
                        className="text-indigo text-sm ml-auto p-2 -mr-2 font-medium"
                    >
                        Join Now
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CheckedInCard;
