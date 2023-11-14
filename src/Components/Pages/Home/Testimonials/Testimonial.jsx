import React from 'react';

import { Avatar, Blockquote } from 'flowbite-react';
import user from "../../../../assets/user2.png"

const Testimonial = ({ testimonial }) => {
    console.log(testimonial)

    const { name, role, quote } = testimonial;
    return (
        <figure className="mx-auto max-w-screen-xl py-2 w-3/4 h-full text-center">
            <svg
            className="mx-auto mb-3 h-8 w-8 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
            >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <Blockquote>
            <p className="text-xl font-medium italic text-justify text-gray-900 dark:text-white">
                {quote}
            </p>
            </Blockquote>
            <figcaption className="mt-6 flex px-2 items-center justify-center space-x-3">
            <Avatar rounded size="sm" img={user} alt="profile picture" />
            <div className="flex flex-col items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <cite className="pr-3 font-medium text-gray-900 dark:text-white">{ name}</cite>
                    <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">{ role}</cite>
            </div>
            </figcaption>
        </figure>
    );
};

export default Testimonial;