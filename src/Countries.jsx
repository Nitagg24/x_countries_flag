import { useEffect, useState } from "react";

const CountryCard = ({ name, flag, altText }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "4px",
        border: "1px solid black",
        borderRadius: "8px",
        height: "200px",
        width: "200px",
        margin: "10px",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <img
        src={flag}
        alt={altText}
        style={{
          height: "100px",
          width: "100px",
        }}
      />
      <h2>{name}</h2>
    </div>
  );
};

const URL_API = "https://xcountries-backend.azurewebsites.net/all";

function Countires() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL_API);
        const jsonRes = await response.json();
        setCountries(jsonRes);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {countries.map((country) => (
        <CountryCard
          key={country.abbr}
          name={country.name}
          flag={country.flag}
          altText={country.abbr}
        />
      ))}
    </div>
  );
}

export default Countires;
