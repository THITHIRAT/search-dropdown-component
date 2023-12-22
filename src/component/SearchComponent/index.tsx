import Select, { createFilter } from "react-select";
import AsyncSelect from "react-select/async";
import CountryList from "../../constants/currency.json";

const SearchComponent = () => {
  const filterConfig = {
    ignoreCase: true,
    ignoreAccents: true,
    trim: true,
  };

  const loadOptions = async (inputValue: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredOptions = CountryList.filter((option) =>
          option.label.toLowerCase().includes(inputValue.toLowerCase())
        );
        resolve(filteredOptions);
      }, 2000);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="flex flex-col items-start overflow-visible text-left w-full">
        <label data-v-d2d3e704="" className="text-sm text-gray-500 mb-2">
          Async Search
        </label>
        <AsyncSelect
          className="basic-single w-96"
          loadOptions={
            loadOptions as (
              inputValue: string
            ) => Promise<{ label: string; value: string }[]>
          }
        />
        <div className="m-2" />
        <label data-v-d2d3e704="" className="text-sm text-gray-500 mb-2">
          Sync Search
        </label>
        <Select
          className="basic-single w-96"
          classNamePrefix="select"
          options={CountryList}
          filterOption={createFilter(filterConfig)}
        />
      </div>
    </div>
  );
};

export default SearchComponent;
