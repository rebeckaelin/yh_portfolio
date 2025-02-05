import { useState, useEffect } from "react";
import client from "../client"; // Din Sanity-klient
import arrow from "../assets/up-arrow-svgrepo-com.svg";
import { Link } from "react-scroll";
import linkedIn_icon from "/pngimg.com - linkedIn_PNG4.png";
import gitHub_icon from "/pngimg.com - github_PNG40.png";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  // Hämta data från Sanity
  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "hero"][0]{email, phone, linkedin, github}`
        );
        setFooterData(data);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };

    fetchFooterData();
  }, []);

  if (!footerData) return <div>Loading...</div>; // Hantera laddningstillstånd

  return (
    <>
      <footer className="bg-secondary h-100 pb-30 pt-18 grid grid-cols-16">
        <section className="flex flex-col justify-between col-span-3 col-start-5">
          <p className="font-alice text-4xl italic font-bold tracking-wide text-primary">
            I&apos;d love to hear <br /> from you
          </p>
          <div className="flex gap-5">
            <a
              href={footerData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-10 h-10" src={gitHub_icon} alt="gitHub_icon" />
            </a>
            <a
              href={footerData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-10 h-10 bg-transparent"
                src={linkedIn_icon}
                alt="linkedIn_icon"
              />
            </a>
          </div>
        </section>
        <section className="flex flex-col justify-between col-start-10 font-karla text-base leading-loose">
          <p>
            {footerData.email} <br /> {footerData.phone}
          </p>
          <button className="w-48 bg-primary tracking-wide text-colorText font-karla text-xl py-3 px-9 hover:cursor-pointer hover:bg-colorText hover:text-primary hover:transition-colors duration-200 ease-in-out">
            contact me
          </button>
        </section>
        <div className="flex col-start-13 justify-self-end self-end">
          <Link to="navbar" smooth={true} duration={1300}>
            <button className="justify-end  bg-primary border-2 rounded-full p-2 w-12 h-12 hover:cursor-pointer">
              <img src={arrow} alt="up-arrow" />
            </button>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
