import mountain from "/mountains.png";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <section className="mt-5 md:mt-15 flex flex-col  items-center">
        <div className="w-4/5 max-w-3xl ">
          <motion.h1
            className="text-black text-center font-main tracking-widest text-[22px] sm:text-3xl md:text-4xl lg:text-6xl lowercase"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Let’s code something awesome together!
          </motion.h1>
          <p className=" font-second text-base font-extralight tracking-wide leading-loose my-10 mx-auto">
            Whether it&apos;s hiking up a mountain, knitting something
            intricate, or crafting clean code, I love the challenge of creating
            something step by step. Let’s build something great —one stitch, one
            step, one line of code at a time! <br /> <br />
            Feel free to reach out if you’d like to collaborate, share creative
            ideas, or simply chat over a good cup of tea.
          </p>
        </div>
        <button className="mb-5">
          <a
            href="mailto:rebeckaelin@hotmail.com"
            className="uppercase font-second text-base font-extralight mt-5 block hover:cursor-pointer hover:text-dark tracking-widest"
          >
            get in touch
          </a>
        </button>
        <div className="mt-5 mx-auto w-3/4 md:w-1/2">
          <img className="" src={mountain} alt="mountains" />
        </div>
      </section>
    </>
  );
};

export default Contact;
