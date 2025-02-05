import { useState, useEffect } from "react";
import client from "../client"; // Importera din Sanity-klient
import Future from "./Future"; // Importera Future-komponenten

const Interests = () => {
  const [interestsData, setInterestsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hämta intressen från Sanity
  useEffect(() => {
    const fetchInterestsData = async () => {
      try {
        const data = await client.fetch(`*[_type == "interests"]{title}`);
        setInterestsData(data);
      } catch (error) {
        console.error("Error fetching interests data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInterestsData();
  }, []);

  return (
    <div
      id="interests-section"
      className="bg-colorText grid grid-cols-16 pb-18 pt-18"
    >
      <Future /> {/* Lägg till Future-komponenten */}
      <div className="col-start-10 col-span-2">
        <div>
          <div>
            <h2 className="font-alice text-4xl italic font-bold tracking-wide text-primary">
              Interests
            </h2>
            <h3 className="font-karla text-lg mt-2 tracking-wider text-primary">
              OUT OF OFFICE
            </h3>

            <div className="mt-10 grid grid-cols-2 gap-x-30 gap-y-2">
              {loading ? (
                <p>Loading...</p> // Visa en laddningsindikator om data inte är hämtade än
              ) : interestsData.length > 0 ? (
                interestsData.map((interest, index) => (
                  <div key={index}>
                    <h4 className="font-karla text-base text-colorText2">
                      {interest.title}
                    </h4>
                  </div>
                ))
              ) : (
                <p>No interests data available.</p> // Om inga intressen finns
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
