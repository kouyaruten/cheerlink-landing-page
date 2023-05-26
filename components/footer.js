import Link from "next/link";

export default function Footer() {
    return (
        <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 border-gray-500">
            <div className="text-gray-700 text-sm mx-20">
                Copyright © 2023 Cheerlink. All rights reserved.
            </div>
        </footer>
    );
}