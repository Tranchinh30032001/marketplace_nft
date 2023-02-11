import React from "react";
import Link from "next/link";
const helpCenter = [
  {
    name: "About",
    link: "aboutus",
  },
  {
    name: "Contact Us",
    link: "contactus",
  },
  {
    name: "Sign Up",
    link: "signUp",
  },
  {
    name: "LogIn",
    link: "login",
  },
  {
    name: "Subscription",
    link: "subscription",
  },
];
function HelpCenter() {
  return (
    <ul>
      {helpCenter.map((item, index) => {
        return (
          <li className="p-2 hover:bg-gray-300 hover:text-gray-600" key={index}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default HelpCenter;
