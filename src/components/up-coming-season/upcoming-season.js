import React from "react";

function UpComingSeason() {
    return (
        <div className="bg-white py-5 rounded-3xl w-full sm:w-3/5 sm:ml-5 relative mt-5 sm:mt-0">
            <div className="flex px-6 flex-wrap items-center mb-5">
                <div className="relative w-full max-w-full flex-grow flex-1">
                    <h3 className="font-medium text-base text-rhino">
                        Upcoming Sessions
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
            <div className="flex flex-col">
                <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                        <tr>
                            <th className="whitespace-nowrap text-manatee text-sm font-normal pl-6 pb-3">
                                Date
                            </th>
                            <th className="whitespace-nowrap text-manatee text-sm font-normal pl-8 pb-3 w-full">
                                Class
                            </th>
                            <th
                                colSpan="2"
                                className="whitespace-nowrap text-manatee text-sm font-normal pr-6 pb-3 w-127px inline-block"
                            >
                                Time
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:h-40 transition-all">
                            <td className="text-center border-b border-solid border-gray-200 pl-6 py-2">
                                <div className="text-indigo text-xs font-medium">
                                    Tomorrow
                                </div>
                                <div className="text-manatee font-bold leading-4">
                                    09
                                </div>
                                <div className="text-xs font-medium text-manatee uppercase">
                                    April
                                </div>
                            </td>
                            <td
                                colSpan="2"
                                className="w-full pl-5 border-b border-solid border-gray-200 pr-6"
                            >
                                <div className="flex items-center cursor-pointer px-3 py-4 transition-all hover:my-2 hover:bg-titan-white-hover hover:shadow-hover rounded-xl">
                                    <div className="w-full pr-4">
                                        <div className="text-xs12 font-medium leading-3">
                                            Database and Information Systems
                                        </div>
                                        <div className="text-xs text-manatee">
                                            Master of Computer Science
                                        </div>
                                    </div>
                                    <div className="text-xs9 text-rhino font-semibold rounded-4 bg-titan-white p-1 text-center rounded-xl whitespace-pre px-2">
                                        8:30am-1:00pm
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center border-b border-solid border-gray-200 pl-6 py-2">
                                <div className="text-indigo text-xs font-medium">
                                    Wed
                                </div>
                                <div className="text-manatee font-bold leading-4">
                                    10
                                </div>
                                <div className="text-xs font-medium text-manatee uppercase">
                                    April
                                </div>
                            </td>
                            <td
                                colSpan="2"
                                className="w-full pl-5 border-b border-solid border-gray-200 pr-6"
                            >
                                <div className="flex items-center cursor-pointer px-3 py-4 transition-all hover:my-2 hover:bg-titan-white-hover hover:shadow-hover rounded-xl">
                                    <div className="w-full pr-4">
                                        <div className="text-xs12 font-medium leading-3">
                                            Database and Information Systems
                                        </div>
                                        <div className="text-xs text-manatee">
                                            Master of Computer Science
                                        </div>
                                    </div>
                                    <div className="text-xs9 text-rhino font-semibold rounded-4 bg-titan-white p-1 text-center rounded-xl whitespace-pre px-2">
                                        8:30am-1:00pm
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center pl-6 py-2">
                                <div className="text-indigo text-xs font-medium">
                                    Wed
                                </div>
                                <div className="text-manatee font-bold leading-4">
                                    10
                                </div>
                                <div className="text-xs font-medium text-manatee uppercase">
                                    April
                                </div>
                            </td>
                            <td colSpan="2" className="w-full pl-5 pr-6">
                                <div className="flex items-center cursor-pointer px-3 py-4 transition-all hover:my-2 hover:bg-titan-white-hover hover:shadow-hover rounded-xl">
                                    <div className="w-full pr-4">
                                        <div className="text-xs12 font-medium leading-3">
                                            Database and Information Systems
                                        </div>
                                        <div className="text-xs text-manatee">
                                            Master of Computer Science
                                        </div>
                                    </div>
                                    <div className="text-xs9 text-rhino font-semibold rounded-4 bg-titan-white p-1 text-center rounded-xl whitespace-pre px-2">
                                        8:30am-1:00pm
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <a
                    href=""
                    className="p-4 text-right relative font-semibold bottom-0 text-sm text-indigo sm:right-4 sm:absolute sm:p-6"
                >
                    See All Sessions
                </a>
            </div>
        </div>
    );
}

export default UpComingSeason;
