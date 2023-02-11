import { MarketContext } from "@/context/MarketProvider";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import { MdNotifications } from "react-icons/md";
import images from "../../public/img";
import { Button } from "../rootindex";
import { Discover, HelpCenter, Notification, Profile, Sidebar } from "./index";
function Navbar() {
  const router = useRouter();
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [themeNavabar, setThemeNavbar] = useState(false);
  // @ts-ignore
  const { isConnected, signer } = useContext(MarketContext);
  const handleDiscover = () => {
    setDiscover(!discover);
    setHelp(false);
    setNotification(false);
    setProfile(false);
    setOpenSideMenu(false);
  };
  const handleHelp = () => {
    setHelp(!help);
    setNotification(false);
    setProfile(false);
    setOpenSideMenu(false);
    setDiscover(false);
  };
  const handleNotification = () => {
    setNotification(!notification);
    setHelp(false);
    setProfile(false);
    setOpenSideMenu(false);
    setDiscover(false);
  };
  const handleProfile = () => {
    setProfile(!profile);
    setNotification(false);
    setHelp(false);
    setOpenSideMenu(false);
    setDiscover(false);
  };
  const handleMenu = () => {
    setOpenSideMenu(!openSideMenu);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setThemeNavbar(true);
      } else {
        setThemeNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const NavigateCreate = () => {
    router.push("createNft");
  };
  return (
    <div
      className={`shadow-md h-[70px] flex flex-col justify-center fixed top-0 left-0 w-full z-[50] px-5 md:px-10 lg:px-20 transition-all duration-200 ease-linear ${
        themeNavabar && "bg-gray-400"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* left */}
        <div className="flex-[0.5] flex items-center">
          <Link href="/" className="text-3xl">
            LOGO
          </Link>
          <div className="hidden md:flex items-center rounded-full px-3 py-2 border-2 sm:max-w-[230px] lg:max-w-[300px] w-full sm:ml-5 lg:ml-10 bg-gray-100">
            <input
              className="flex-1 sm:leading-6 lg:leading-8 bg-transparent"
              type="text"
              placeholder="Search NFT"
            />
            <BsSearch className="cursor-pointer" />
          </div>
        </div>
        {/* right */}
        <div className="flex flex-[0.5] items-center justify-between gap-3">
          <div
            onClick={handleDiscover}
            className="hidden md:flex cursor-pointer font-medium"
          >
            Discover
            {discover && (
              <div className="absolute top-full bg-gray-400 rounded-md sm:max-w-[200px] lg:max-w-[240px] w-full z-10 overflow-hidden shadow-2xl">
                <Discover />
              </div>
            )}
          </div>
          <div
            onClick={handleHelp}
            className="hidden md:flex cursor-pointer font-medium"
          >
            Help Center
            {help && (
              <div className="absolute top-full bg-gray-400 rounded-md sm:max-w-[180px] lg:max-w-[220px] w-full z-10 overflow-hidden shadow-2xl">
                <HelpCenter />
              </div>
            )}
          </div>
          <div
            onClick={handleNotification}
            className="hidden md:flex cursor-pointer -ml-[20px] md:ml-[0px] relative"
          >
            <MdNotifications size="24" />
            {notification && <Notification />}
          </div>
          <div className="cursor-pointer -ml-[6px] md:ml-[0px]">
            <Button
              btnName={`${
                !isConnected
                  ? "Connect"
                  : signer.slice(0, 5) + "..." + signer.slice(-3)
              }`}
            />
          </div>
          <div onClick={handleProfile} className="cursor-pointer">
            <Image
              src={images.user1}
              alt="user1"
              width={40}
              height={40}
              className="rounded-full"
            />
            {profile && <Profile />}
          </div>
          <div className="md:hidden cursor-pointer">
            <CgMenu onClick={handleMenu} size={30} />
            {openSideMenu && <Sidebar setOpenSideMenu={setOpenSideMenu} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
