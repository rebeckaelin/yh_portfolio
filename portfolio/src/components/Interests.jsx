const interests = [
  "Hiking",
  "Photography",
  "Dancing",
  "Macrame",
  "Gardening",
  "Horses",
];

const Interests = () => {
  return (
    <div
      id="interests-section"
      className=" bg-colorText grid grid-cols-8 pb-18 pt-18"
    >
      <div className="flex col-start-3 col-span-2 ">
        <section className="w-full max-w-2xl flex flex-col gap-5 ">
          <div>
            <h2 className="font-alice text-4xl italic font-bold tracking-wide text-primary">
              Future Ambitions
            </h2>
            <h3 className="font-karla text-lg mt-2 tracking-wider text-primary">
              & DREAM PROJECTS
            </h3>
          </div>

          {/* Andra rutan */}
          <div className="max-w-full break-words">
            <h4 className="mt-5 font-alice text-xl text-colorText2 tracking-wider">
              Backend Development
            </h4>
            <p className="font-karla text-base mt-1 text-gray-600">
              I want to specialise in backend and build stable systems
            </p>
          </div>

          {/* Tredje rutan */}
          <div className="max-w-full break-words">
            <h4 className="font-alice text-xl text-colorText2 tracking-wider">
              second
            </h4>
            <p className="font-karla text-base mt-1 text-gray-600">
              a description
            </p>
          </div>

          {/* Fjärde rutan */}
          <div className="max-w-full break-words">
            <h4 className="font-alice text-xl text-colorText2 tracking-wider">
              third
            </h4>
            <p className="font-karla text-base mt-1 text-gray-600">
              another description
            </p>
          </div>
        </section>
      </div>

      <div className="col-start-6">
        <div className="">
          <div>
            <h2 className=" font-alice text-4xl italic font-bold tracking-wide text-primary">
              Interests
            </h2>
            <h3 className="font-karla text-lg mt-2 tracking-wider text-primary">
              OUT OF OFFICE
            </h3>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-30 gap-y-2">
            {interests.map((interest, index) => (
              <p key={index} className="text-lg font-karla text-primary">
                {interest}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
