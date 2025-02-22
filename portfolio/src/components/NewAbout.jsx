import { motion } from "framer-motion";
import useAbout from "../hooks/useAbout";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const NewAbout = () => {
  const { aboutData, loading, error } = useAbout();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;
  if (!aboutData) return <div>No data found.</div>;

  return (
    <>
      <section className="flex lg:flex-row flex-col mt-10 xl:mb-20 ">
        {/* Bild-container */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="w-3/4 md:w-4/5 lg:w-2/4 self-start md:pb-5 lg:pb-0"
        >
          <img
            src={urlFor(aboutData.image)
              .crop("center")
              .width(1000)
              .height(800)
              .fit("crop")
              .url()}
            alt="Hero"
            className="h-auto md:h-full object-contain"
          />
        </motion.div>
        <motion.article
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className=" my-5 lg:mt-0 md:mx-0 md:mt-0 lg:w-3/5 flex flex-col justify-center"
        >
          <h1 className="  font-main lowercase tracking-widest text-3xl 2xl:text-6xl xl:text-5xl lg:text-4xl ml-10 md:ml-10 sm:ml-15  mb-2 lg:mb-4 ">
            {aboutData.title}
          </h1>
          <p className="font-second text-sm lg:text-base font-extralight whitespace-pre-line lg:ml-15 md:mr-8">
            {aboutData.description}
          </p>
        </motion.article>
      </section>
    </>
  );
};

export default NewAbout;
