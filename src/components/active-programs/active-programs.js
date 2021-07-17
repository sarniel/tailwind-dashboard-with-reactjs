import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./active-programs.scss";
import Logo1 from "../../images/logo-1.jpg";
import Logo2 from "../../images/logo-2.jpg";
const percentageOne = 45;
const percentageTwo = 28;

function ActivePrograms() {
    return (
        <div className="bg-white p-3 sm:px-6 sm:py-5 rounded-3xl">
            <div className="flex flex-wrap items-center mb-3 sm:mb-5">
                <div className="relative w-full max-w-full flex-grow flex-1">
                    <h3 className="font-medium text-base text-rhino">
                        Active Programs
                    </h3>
                </div>
                <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                    <button className="-m-4 p-4">
                        <svg
                            width="22"
                            height="5"
                            viewBox="0 0 22 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="1.94118"
                                cy="2.56618"
                                r="1.94118"
                                fill="#9592A6"
                            />
                            <circle
                                cx="11"
                                cy="2.56618"
                                r="1.94118"
                                fill="#9592A6"
                            />
                            <circle
                                cx="20.0589"
                                cy="2.56618"
                                r="1.94118"
                                fill="#9592A6"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="program-list">
                <div className="flex items-center pb-5 border-b">
                    <div className="course-name flex items-center w-full">
                        <div className="overflow-hidden border border-gray-30 border-solid rounded-lg flex items-center w-68px h-68px mr-5">
                            <img src={Logo1} alt="" />
                        </div>
                        <div className="leading-7">
                            <div className="inline-block bg-indigo rounded-xl text-white sm:text-xs uppercase font-semibold px-3 text-center mb-2 leading-5 text-xs8">
                                Master of computer science
                            </div>
                            <div className="text-rhino font-semibold text-xs12 sm:text-sm leading-4">
                                University of Upstate at Brookstone
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="hidden sm:flex items-center">
                            <div className="text-center px-5">
                                <div className="text-2xl font-bold text-manatee leading-7 mb-2 font-MuseoModerno">
                                    1
                                </div>
                                <div className="text-xs text-manatee">
                                    Overdue Assignments
                                </div>
                            </div>
                            <div className="text-center px-5">
                                <div className="text-2xl font-bold text-manatee leading-7 mb-2 font-MuseoModerno">
                                    5
                                </div>
                                <div className="text-xs text-manatee">
                                    Overdue Assignments
                                </div>
                            </div>
                            <div className="text-center px-5">
                                <div className="text-2xl font-bold text-manatee leading-7 mb-2 font-MuseoModerno">
                                    A-
                                </div>
                                <div className="text-xs text-manatee">
                                    Overdue Assignments
                                </div>
                            </div>
                        </div>
                        <div className="text-center px-5">
                            <div className="h-12 w-12 flex items-center justify-center mb-2 m-auto">
                                <CircularProgressbar
                                    value={percentageOne}
                                    text={`${percentageOne}%`}
                                    strokeWidth={15}
                                    styles={{
                                        path: {
                                            // Path color
                                            stroke: "#5855D6",
                                        },
                                        trail: {
                                            // Trail color
                                            stroke: "#EBEBEB",
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: "butt",
                                            // Rotate the trail
                                            transform: "rotate(0.25turn)",
                                            transformOrigin: "center center",
                                        },
                                        text: {
                                            // Text color
                                            fill: "#9592A6",
                                            // Text size
                                            fontSize: "1.5em",
                                            fontWeight: "bold",
                                            fontFamily: "MuseoModerno",
                                        },
                                    }}
                                />
                            </div>
                            <div className="text-xs text-manatee">
                                Completion
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center pt-5">
                    <div className="course-name flex items-center w-full">
                        <div className="overflow-hidden border border-gray-30 border-solid rounded-lg flex items-center w-68px h-68px mr-5">
                            <img src={Logo2} alt="" />
                        </div>
                        <div className="leading-7">
                            <div className="inline-block bg-indigo rounded-xl text-white sm:text-xs uppercase font-semibold px-3 text-center mb-2 leading-5 text-xs8">
                                Certificate UX/UI Design
                            </div>
                            <div className="text-rhino font-semibold text-xs12 sm:text-sm leading-4">
                                Academy of Art and Technology at Dursburg
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="hidden sm:flex items-center">
                            <div className="text-center px-5">
                                <div className="text-2xl font-bold text-manatee leading-7 mb-2 font-MuseoModerno">
                                    0
                                </div>
                                <div className="text-xs text-manatee">
                                    Overdue Assignments
                                </div>
                            </div>
                            <div className="text-center px-5">
                                <div className="text-2xl font-bold text-manatee leading-7 mb-2 font-MuseoModerno">
                                    6
                                </div>
                                <div className="text-xs text-manatee">
                                    Overdue Assignments
                                </div>
                            </div>
                            <div className="text-center px-5">
                                <div className="text-2xl font-bold text-manatee leading-7 mb-2 font-MuseoModerno">
                                    --
                                </div>
                                <div className="text-xs text-manatee">
                                    Overdue Assignments
                                </div>
                            </div>
                        </div>
                        <div className="text-center px-5">
                            <div className="h-12 w-12 flex items-center justify-center mb-2 m-auto">
                                <CircularProgressbar
                                    value={percentageTwo}
                                    text={`${percentageTwo}%`}
                                    strokeWidth={15}
                                    styles={{
                                        path: {
                                            // Path color
                                            stroke: "#5855D6",
                                        },
                                        trail: {
                                            // Trail color
                                            stroke: "#EBEBEB",
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: "butt",
                                            // Rotate the trail
                                            transform: "rotate(0.25turn)",
                                            transformOrigin: "center center",
                                        },
                                        text: {
                                            // Text color
                                            fill: "#9592A6",
                                            // Text size
                                            fontSize: "1.5em",
                                            fontWeight: "bold",
                                            fontFamily: "MuseoModerno",
                                        },
                                    }}
                                />
                            </div>
                            <div className="text-xs text-manatee">
                                Completion
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActivePrograms;
