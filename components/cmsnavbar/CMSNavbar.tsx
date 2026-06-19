"use client";

import Image from "next/image.js";

export const CMSNavbar = () => {
  return (
    <nav className="bg-white text-black border border-b-gray-200 shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-2">
            <a className="block text-teal-600 dark:text-teal-300" href="/">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
            </a>
              <h1 className="text-2xl font-semibold">CMS</h1>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <div className="relative hidden md:flex items-center gap-4">
              <button
                type="button"
                className="overflow-hidden rounded-full border border-gray-300 shadow-inner dark:border-gray-600"
              >
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                  alt=""
                  className="size-6 object-cover"
                />
              </button>
              <p>maria</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
