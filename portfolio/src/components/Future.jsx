import { useState, useEffect } from "react";
import client from "../client"; // Se till att du importerar din Sanity-klient

const Future = () => {
  const [ambitionsData, setAmbitionsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hämta framtida ambitioner från Sanity
  useEffect(() => {
    const fetchAmbitionsData = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "futureAmbitions"]{title, description}`
        );
        setAmbitionsData(data);
      } catch (error) {
        console.error("Error fetching future ambitions data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAmbitionsData();
  }, []);

  return (
    <div className="flex col-start-5 col-span-3">
      <section className="w-full max-w-2xl flex flex-col gap-5">
        <div>
          <h2 className="font-alice text-4xl italic font-bold tracking-wide text-primary">
            Future Ambitions
          </h2>
          <h3 className="font-karla text-lg mt-2 tracking-wider text-primary">
            & DREAM PROJECTS
          </h3>
        </div>

        {/* Dynamiskt rendera ambitioner */}
        {loading ? (
          <p>Loading...</p>
        ) : ambitionsData.length > 0 ? (
          ambitionsData.map((ambition, index) => (
            <div key={index} className="max-w-full break-words">
              <h4 className="mt-5 font-alice text-xl text-colorText2 tracking-wider">
                {ambition.title}
              </h4>
              <p className="font-karla text-base mt-1 text-gray-600">
                {ambition.description}
              </p>
            </div>
          ))
        ) : (
          <p>No future ambitions data available.</p>
        )}
      </section>
    </div>
  );
};

export default Future;
