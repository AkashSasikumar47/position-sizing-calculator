import React from 'react'

const Feed = () => {
    return (
        <>
            {/* Card Blog */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Card */}
                    <a
                        className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#"
                    >
                        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                            <img
                                className="size-full absolute top-0 start-0 object-cover"
                                src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                                alt="Image Description"
                            />
                        </div>
                        <div className="absolute top-0 inset-x-0 z-10">
                            <div className="p-4 flex flex-col h-full sm:p-6">
                                {/* Avatar */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="size-[46px] border-2 border-white rounded-full"
                                                src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                                alt="Image Description"
                                            />
                                        </div>
                                        <div className="ms-2.5 sm:ms-4">
                                            <h4 className="font-semibold text-white">Gloria</h4>
                                            <p className="text-xs text-white/[.8]">Jan 09, 2021</p>
                                        </div>
                                    </div>
                                    {/* Like and Comment Buttons */}
                                    <div className="flex gap-4">
                                        <button className="flex items-center text-white hover:text-gray-400 focus:outline-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18l-1.51-1.363c-4.11-3.728-6.447-5.836-7.282-8.424C1.618 6.437 2.052 4.454 3.152 3c1.292-1.74 3.544-2.593 6.348-2.593 3.244 0 5.738 1.027 7.522 3.075 1.783 2.049 2.675 4.733 2.675 8.053 0 .637-.025 1.085-.075 1.345-.05.26-.2.438-.45.535-.01.006-.024.01-.04.014a1.25 1.25 0 01-.443.074H10z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            102
                                        </button>
                                        <button className="flex items-center text-white hover:text-gray-400 focus:outline-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7 3c0-1.1.9-2 2-2s2 .9 2 2v4h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4H3c-1.1 0-2-.9-2-2s.9-2 2-2h4V3z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            15
                                        </button>
                                    </div>
                                </div>
                                {/* End Avatar */}
                            </div>
                        </div>
                        <div className="absolute bottom-0 inset-x-0 z-10">
                            <div className="flex flex-col h-full p-4 sm:p-6">
                                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                                    What CFR (Conversations, Feedback, Recognition) really is about
                                </h3>
                                <p className="mt-2 text-white/[.8]">
                                    For a lot of people these days, Measure What Matters.
                                </p>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}
                    {/* Card */}
                    <a
                        className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#"
                    >
                        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                            <img
                                className="size-full absolute top-0 start-0 object-cover"
                                src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                                alt="Image Description"
                            />
                        </div>
                        <div className="absolute top-0 inset-x-0 z-10">
                            <div className="p-4 flex flex-col h-full sm:p-6">
                                {/* Avatar */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="size-[46px] border-2 border-white rounded-full"
                                                src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                                alt="Image Description"
                                            />
                                        </div>
                                        <div className="ms-2.5 sm:ms-4">
                                            <h4 className="font-semibold text-white">Gloria</h4>
                                            <p className="text-xs text-white/[.8]">Jan 09, 2021</p>
                                        </div>
                                    </div>
                                    {/* Like and Comment Buttons */}
                                    <div className="flex gap-4">
                                        <button className="flex items-center text-white hover:text-gray-400 focus:outline-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18l-1.51-1.363c-4.11-3.728-6.447-5.836-7.282-8.424C1.618 6.437 2.052 4.454 3.152 3c1.292-1.74 3.544-2.593 6.348-2.593 3.244 0 5.738 1.027 7.522 3.075 1.783 2.049 2.675 4.733 2.675 8.053 0 .637-.025 1.085-.075 1.345-.05.26-.2.438-.45.535-.01.006-.024.01-.04.014a1.25 1.25 0 01-.443.074H10z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            102
                                        </button>
                                        <button className="flex items-center text-white hover:text-gray-400 focus:outline-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7 3c0-1.1.9-2 2-2s2 .9 2 2v4h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4H3c-1.1 0-2-.9-2-2s.9-2 2-2h4V3z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            15
                                        </button>
                                    </div>
                                </div>
                                {/* End Avatar */}
                            </div>
                        </div>
                        <div className="absolute bottom-0 inset-x-0 z-10">
                            <div className="flex flex-col h-full p-4 sm:p-6">
                                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                                    What CFR (Conversations, Feedback, Recognition) really is about
                                </h3>
                                <p className="mt-2 text-white/[.8]">
                                    For a lot of people these days, Measure What Matters.
                                </p>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}
                    {/* Card */}
                    <a
                        className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#"
                    >
                        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                            <img
                                className="size-full absolute top-0 start-0 object-cover"
                                src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                                alt="Image Description"
                            />
                        </div>
                        <div className="absolute top-0 inset-x-0 z-10">
                            <div className="p-4 flex flex-col h-full sm:p-6">
                                {/* Avatar */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="size-[46px] border-2 border-white rounded-full"
                                                src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                                alt="Image Description"
                                            />
                                        </div>
                                        <div className="ms-2.5 sm:ms-4">
                                            <h4 className="font-semibold text-white">Gloria</h4>
                                            <p className="text-xs text-white/[.8]">Jan 09, 2021</p>
                                        </div>
                                    </div>
                                    {/* Like and Comment Buttons */}
                                    <div className="flex gap-4">
                                        <button className="flex items-center text-white hover:text-gray-400 focus:outline-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18l-1.51-1.363c-4.11-3.728-6.447-5.836-7.282-8.424C1.618 6.437 2.052 4.454 3.152 3c1.292-1.74 3.544-2.593 6.348-2.593 3.244 0 5.738 1.027 7.522 3.075 1.783 2.049 2.675 4.733 2.675 8.053 0 .637-.025 1.085-.075 1.345-.05.26-.2.438-.45.535-.01.006-.024.01-.04.014a1.25 1.25 0 01-.443.074H10z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            102
                                        </button>
                                        <button className="flex items-center text-white hover:text-gray-400 focus:outline-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7 3c0-1.1.9-2 2-2s2 .9 2 2v4h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4H3c-1.1 0-2-.9-2-2s.9-2 2-2h4V3z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            15
                                        </button>
                                    </div>
                                </div>
                                {/* End Avatar */}
                            </div>
                        </div>
                        <div className="absolute bottom-0 inset-x-0 z-10">
                            <div className="flex flex-col h-full p-4 sm:p-6">
                                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                                    What CFR (Conversations, Feedback, Recognition) really is about
                                </h3>
                                <p className="mt-2 text-white/[.8]">
                                    For a lot of people these days, Measure What Matters.
                                </p>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}
                    {/* Card */}
                    <a
                        className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#"
                    >
                        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                            <img
                                className="size-full absolute top-0 start-0 object-cover"
                                src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                                alt="Image Description"
                            />
                        </div>
                        <div className="absolute top-0 inset-x-0 z-10">
                            <div className="p-4 flex flex-col h-full sm:p-6">
                                {/* Avatar */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="size-[46px] border-2 border-white rounded-full"
                                                src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                                alt="Image Description"
                                            />
                                        </div>
                                        <div className="ms-2.5 sm:ms-4">
                                            <h4 className="font-semibold text-white">Gloria</h4>
                                            <p className="text-xs text-white/[.8]">Jan 09, 2021</p>
                                        </div>
                                    </div>
                                    {/* Like and Comment Buttons */}
                                    <div className="flex gap-4">
                                        <button className="flex items-center text-white hover:text-gray-400 focus:outline-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18l-1.51-1.363c-4.11-3.728-6.447-5.836-7.282-8.424C1.618 6.437 2.052 4.454 3.152 3c1.292-1.74 3.544-2.593 6.348-2.593 3.244 0 5.738 1.027 7.522 3.075 1.783 2.049 2.675 4.733 2.675 8.053 0 .637-.025 1.085-.075 1.345-.05.26-.2.438-.45.535-.01.006-.024.01-.04.014a1.25 1.25 0 01-.443.074H10z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            102
                                        </button>
                                        <button className="flex items-center text-white hover:text-gray-400 focus:outline-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7 3c0-1.1.9-2 2-2s2 .9 2 2v4h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4H3c-1.1 0-2-.9-2-2s.9-2 2-2h4V3z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            15
                                        </button>
                                    </div>
                                </div>
                                {/* End Avatar */}
                            </div>
                        </div>
                        <div className="absolute bottom-0 inset-x-0 z-10">
                            <div className="flex flex-col h-full p-4 sm:p-6">
                                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                                    What CFR (Conversations, Feedback, Recognition) really is about
                                </h3>
                                <p className="mt-2 text-white/[.8]">
                                    For a lot of people these days, Measure What Matters.
                                </p>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}
                    {/* Card */}
                    <a
                        className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#"
                    >
                        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                            <img
                                className="size-full absolute top-0 start-0 object-cover"
                                src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                                alt="Image Description"
                            />
                        </div>
                        <div className="absolute top-0 inset-x-0 z-10">
                            <div className="p-4 flex flex-col h-full sm:p-6">
                                {/* Avatar */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="size-[46px] border-2 border-white rounded-full"
                                                src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                                alt="Image Description"
                                            />
                                        </div>
                                        <div className="ms-2.5 sm:ms-4">
                                            <h4 className="font-semibold text-white">Gloria</h4>
                                            <p className="text-xs text-white/[.8]">Jan 09, 2021</p>
                                        </div>
                                    </div>
                                    {/* Like and Comment Buttons */}
                                    <div className="flex gap-4">
                                        <button className="flex items-center text-white hover:text-gray-400 focus:outline-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18l-1.51-1.363c-4.11-3.728-6.447-5.836-7.282-8.424C1.618 6.437 2.052 4.454 3.152 3c1.292-1.74 3.544-2.593 6.348-2.593 3.244 0 5.738 1.027 7.522 3.075 1.783 2.049 2.675 4.733 2.675 8.053 0 .637-.025 1.085-.075 1.345-.05.26-.2.438-.45.535-.01.006-.024.01-.04.014a1.25 1.25 0 01-.443.074H10z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            102
                                        </button>
                                        <button className="flex items-center text-white hover:text-gray-400 focus:outline-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7 3c0-1.1.9-2 2-2s2 .9 2 2v4h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4H3c-1.1 0-2-.9-2-2s.9-2 2-2h4V3z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            15
                                        </button>
                                    </div>
                                </div>
                                {/* End Avatar */}
                            </div>
                        </div>
                        <div className="absolute bottom-0 inset-x-0 z-10">
                            <div className="flex flex-col h-full p-4 sm:p-6">
                                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                                    What CFR (Conversations, Feedback, Recognition) really is about
                                </h3>
                                <p className="mt-2 text-white/[.8]">
                                    For a lot of people these days, Measure What Matters.
                                </p>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}
                    {/* Card */}
                    <a
                        className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#"
                    >
                        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                            <img
                                className="size-full absolute top-0 start-0 object-cover"
                                src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                                alt="Image Description"
                            />
                        </div>
                        <div className="absolute top-0 inset-x-0 z-10">
                            <div className="p-4 flex flex-col h-full sm:p-6">
                                {/* Avatar */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="size-[46px] border-2 border-white rounded-full"
                                                src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                                alt="Image Description"
                                            />
                                        </div>
                                        <div className="ms-2.5 sm:ms-4">
                                            <h4 className="font-semibold text-white">Gloria</h4>
                                            <p className="text-xs text-white/[.8]">Jan 09, 2021</p>
                                        </div>
                                    </div>
                                    {/* Like and Comment Buttons */}
                                    <div className="flex gap-4">
                                        <button className="flex items-center text-white hover:text-gray-400 focus:outline-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18l-1.51-1.363c-4.11-3.728-6.447-5.836-7.282-8.424C1.618 6.437 2.052 4.454 3.152 3c1.292-1.74 3.544-2.593 6.348-2.593 3.244 0 5.738 1.027 7.522 3.075 1.783 2.049 2.675 4.733 2.675 8.053 0 .637-.025 1.085-.075 1.345-.05.26-.2.438-.45.535-.01.006-.024.01-.04.014a1.25 1.25 0 01-.443.074H10z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            102
                                        </button>
                                        <button className="flex items-center text-white hover:text-gray-400 focus:outline-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7 3c0-1.1.9-2 2-2s2 .9 2 2v4h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4H3c-1.1 0-2-.9-2-2s.9-2 2-2h4V3z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            15
                                        </button>
                                    </div>
                                </div>
                                {/* End Avatar */}
                            </div>
                        </div>
                        <div className="absolute bottom-0 inset-x-0 z-10">
                            <div className="flex flex-col h-full p-4 sm:p-6">
                                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                                    What CFR (Conversations, Feedback, Recognition) really is about
                                </h3>
                                <p className="mt-2 text-white/[.8]">
                                    For a lot of people these days, Measure What Matters.
                                </p>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}
                </div>
                {/* End Grid */}
            </div>
            {/* End Card Blog */}
        </>
    )
}

export default Feed