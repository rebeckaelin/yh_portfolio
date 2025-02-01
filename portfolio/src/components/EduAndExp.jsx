const EduAndExp = () => {
  return (
    <>
      <div
        id="education-section"
        className=" bg-colorText h-full pb-18 pt-18 grid grid-cols-8"
      >
        <div className="flex col-start-3 col-span-2 ">
          <section className="w-full max-w-2xl flex flex-col gap-5 ">
            <div>
              <h2 className="font-alice text-4xl italic font-bold tracking-wide text-primary">
                Education
              </h2>
              <h3 className="font-karla text-2xl mt-2 tracking-wider text-primary">
                WHAT I&apos;VE LEARNED
              </h3>
            </div>

            {/* Andra rutan */}
            <div className="max-w-full break-words">
              <h4 className="mt-5 font-alice text-xl text-colorText2 tracking-wider">
                Bachelor&apos;s Degree in Computer Science
              </h4>
              <p className="font-karla text-base mt-1 text-gray-600">
                Studied at XYZ University (2017-2021)
              </p>
            </div>

            {/* Tredje rutan */}
            <div className="max-w-full break-words">
              <h4 className="font-alice text-xl text-colorText2 tracking-wider">
                Frontend Developer Intern
              </h4>
              <p className="font-karla text-base mt-1 text-gray-600">
                Internship at ABC Company (Summer 2022)
              </p>
            </div>

            {/* Fjärde rutan */}
            <div className="max-w-full break-words">
              <h4 className="font-alice text-xl text-colorText2 tracking-wider">
                JavaScript Bootcamp
              </h4>
              <p className="font-karla text-base mt-1 text-gray-600">
                Completed an intensive coding bootcamp (2023)
              </p>
            </div>
          </section>
        </div>
        <div className="col-start-6 col-span-2">
          <section className="w-full max-w-2xl flex flex-col gap-5 ">
            <div>
              <h2 className="font-alice text-4xl italic font-bold tracking-wide text-primary">
                Experience
              </h2>
              <h3 className="font-karla text-2xl mt-2 tracking-wider text-primary">
                WHERE I&apos;VE WORKED
              </h3>
            </div>
            <div>
              <h4 className="mt-5 font-alice text-xl text-colorText2 tracking-wider">
                Software Engineer at XYZ
              </h4>
              <p className="font-karla text-base mt-1 text-gray-600">
                Worked with React and Node.js (2023-Now)
              </p>
            </div>

            {/* Tredje rutan */}
            <div>
              <h4 className="font-alice text-xl text-colorText2 tracking-wider">
                Freelance Web Developer
              </h4>
              <p className="font-karla text-base mt-1 text-gray-600">
                Created websites for clients (2021-2023)
              </p>
            </div>

            {/* Fjärde rutan */}
            <div>
              <h4 className="font-alice text-xl text-colorText2 tracking-wider">
                IT Support Technician
              </h4>
              <p className="font-karla text-base mt-1 text-gray-600">
                Assisted in tech support at XYZ (2019-2021)
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default EduAndExp;
