import { useState } from "react";
import Select from "react-select";


const CountryList = async () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  // --- fetching data with SSG(Static Site Generation) method
  const res = await fetch(
    "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code",
    {
      cache: "force-cache",
    }
  );
  const data = await res.json();
  console.log(data);
  if (data.length > 0) {
    setCountries(data.countries);
    setSelectedCountry(data.userSelectValue);
  }
  return (
    <Select
        options={countries}
        value={selectedCountry}
        onChange={(selectedOption) =>
          setSelectedCountry(selectedOption as string)
        }
      />
  );
};

export default CountryList;
