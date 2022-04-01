import React from "react";
import Navigation from "../../components/navigation-menu/navigation-menu";
import TopBar from "../../components/topbar/top-bar";
import UpComingSeasonCard from "../../components/up-coming-season/upcoming-season";
import CheckedInCard from "../../components/checked-in/checked-in";
import ActiveProgramsCard from "../../components/active-programs/active-programs";

function Dashboard() {
    return (
        <div className="flex w-full main-container">
            <Navigation />
            <div className="relative lg:ml-240px  md:ml-111px main-h-screen w-full text-left flex flex-col items-center h-full min-h-screen bg-mercury">
                <TopBar />
                <div className=" w-full man-content h-full p-3 sm:p-10">
                    <div className="w-full flex pb-4 pt-2 sm:pb-3 sm:pt-0">
                        <div className="font-bold text-xl">Hello, Mia!</div>
                        <a
                            href=""
                            className="ml-auto whitespace-pre items-center hidden sm:flex"
                        >
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.08333 7.20833H0.833333C0.645472 7.20833 0.465304 7.28296 0.332466 7.4158C0.199628 7.54864 0.125 7.7288 0.125 7.91667V12.1667C0.125 12.3545 0.199628 12.5347 0.332466 12.6675C0.465304 12.8004 0.645472 12.875 0.833333 12.875H5.08333C5.27119 12.875 5.45136 12.8004 5.5842 12.6675C5.71704 12.5347 5.79167 12.3545 5.79167 12.1667V7.91667C5.79167 7.7288 5.71704 7.54864 5.5842 7.4158C5.45136 7.28296 5.27119 7.20833 5.08333 7.20833ZM4.375 11.4583H1.54167V8.625H4.375V11.4583ZM12.1667 0.125H7.91667C7.7288 0.125 7.54864 0.199628 7.4158 0.332466C7.28296 0.465304 7.20833 0.645472 7.20833 0.833333V5.08333C7.20833 5.27119 7.28296 5.45136 7.4158 5.5842C7.54864 5.71704 7.7288 5.79167 7.91667 5.79167H12.1667C12.3545 5.79167 12.5347 5.71704 12.6675 5.5842C12.8004 5.45136 12.875 5.27119 12.875 5.08333V0.833333C12.875 0.645472 12.8004 0.465304 12.6675 0.332466C12.5347 0.199628 12.3545 0.125 12.1667 0.125ZM11.4583 4.375H8.625V1.54167H11.4583V4.375ZM12.1667 9.33333H10.75V7.91667C10.75 7.7288 10.6754 7.54864 10.5425 7.4158C10.4097 7.28296 10.2295 7.20833 10.0417 7.20833C9.8538 7.20833 9.67364 7.28296 9.5408 7.4158C9.40796 7.54864 9.33333 7.7288 9.33333 7.91667V9.33333H7.91667C7.7288 9.33333 7.54864 9.40796 7.4158 9.5408C7.28296 9.67364 7.20833 9.8538 7.20833 10.0417C7.20833 10.2295 7.28296 10.4097 7.4158 10.5425C7.54864 10.6754 7.7288 10.75 7.91667 10.75H9.33333V12.1667C9.33333 12.3545 9.40796 12.5347 9.5408 12.6675C9.67364 12.8004 9.8538 12.875 10.0417 12.875C10.2295 12.875 10.4097 12.8004 10.5425 12.6675C10.6754 12.5347 10.75 12.3545 10.75 12.1667V10.75H12.1667C12.3545 10.75 12.5347 10.6754 12.6675 10.5425C12.8004 10.4097 12.875 10.2295 12.875 10.0417C12.875 9.8538 12.8004 9.67364 12.6675 9.5408C12.5347 9.40796 12.3545 9.33333 12.1667 9.33333ZM5.08333 0.125H0.833333C0.645472 0.125 0.465304 0.199628 0.332466 0.332466C0.199628 0.465304 0.125 0.645472 0.125 0.833333V5.08333C0.125 5.27119 0.199628 5.45136 0.332466 5.5842C0.465304 5.71704 0.645472 5.79167 0.833333 5.79167H5.08333C5.27119 5.79167 5.45136 5.71704 5.5842 5.5842C5.71704 5.45136 5.79167 5.27119 5.79167 5.08333V0.833333C5.79167 0.645472 5.71704 0.465304 5.5842 0.332466C5.45136 0.199628 5.27119 0.125 5.08333 0.125ZM4.375 4.375H1.54167V1.54167H4.375V4.375Z"
                                    fill="#5855D6"
                                />
                            </svg>

                            <span className="text-sm ml-2 text-indigo font-semibold">
                                Customize
                            </span>
                        </a>
                    </div>

                    <ActiveProgramsCard />
                    <div className="block sm:flex mt-5">
                        <CheckedInCard />
                        <UpComingSeasonCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
