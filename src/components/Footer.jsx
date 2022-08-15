import React from "react";
import "../index.css";
import { layout } from "../styles.js";
import { footerLinks, socialMedia } from "../constants/index";
import { logo } from "../assets/index";

const Footer = () => {
  return (
    <footer class="w-full flex items-center justify-center ">
      <div class="max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-4 lg:pt-24 ">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
          <div>
            <div class=" flex justify-center sm:justify-start">
              <img src={logo} alt="" />
            </div>

            <p class="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left">
              A new way to make the payments easy, reliable and secure
            </p>

            <ul class="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start ">
              {socialMedia.map((e, i) => {
                const { id, icon, link } = e;
                return (
                  <li>
                    <a
                      href={link}
                      rel="noopener noreferrer"
                      target="_blank"
                      id={id}
                    >
                      <span class="sr-only">Facebook</span>
                      <img src={icon} alt="" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div class="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4 justify-self-end ">
            {footerLinks.map((e, i) => {
              const { title, links } = e;

              return (
                <div class="text-center sm:text-left">
                  <p class="text-lg font-medium text-white">{title}</p>

                  {links.map((l) => {
                    const { name, link } = l;
                    return (
                      <nav class="mt-8">
                        <ul class="space-y-4 text-sm">
                          <li>
                            <a
                              class="text-white transition hover:text-white/75"
                              href={link}
                            >
                              {name}
                            </a>
                          </li>
                        </ul>
                      </nav>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div class="pt-6 mt-12 border-t border-gray-800">
          <div class="text-center sm:flex sm:justify-between sm:text-left">
            <p class="text-sm text-gray-400">
              <span class="block sm:inline">All rights reserved.</span>
            </p>

            <p class="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; 2022 Vaishakh Nambiar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
