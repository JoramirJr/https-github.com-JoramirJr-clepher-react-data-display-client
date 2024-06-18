import { ReactElement } from "react";
import { useFetchTimeSeries } from "../hooks/timeseries";
import { formatToUSD } from "../utils/formatters";

interface IPaginationArgs {
  pages: number;
  currentPage: number;
  refetch: Function;
  totalItems: number;
}

function Pagination({
  pages,
  currentPage,
  refetch,
  totalItems,
}: IPaginationArgs): ReactElement {
  const handleClick = (page: number) => {
    if (page !== currentPage) refetch(page);
  };

  const pagesList = () => {
    const items = [];
    for (let i = 1; i <= pages; i++) {
      items.push(
        <li
          key={i}
          className={`px-[1rem] py-[.5rem] border border-gray-300 hover:bg-gray-300 hover:cursor-pointer ${
            currentPage === i ? "bg-gray-200" : ""
          }`}
          onClick={() => handleClick(i)}
        >
          {i}
        </li>
      );
    }
    return items;
  };

  return (
    <div className="flex justify-between align-items-center px-[1rem]">
      <span>
        {`Showing ${currentPage * 10 - 10 + 1} to ${
          currentPage * 10
        } of ${totalItems} entries`}
      </span>
      <div className="flex justify-end align-items-center">
        <button className="hover:cursor-pointer rounded-l-lg h-[42px] border border-gray-300 px-[1rem]">
          Previous
        </button>
        <nav>
          <ul className="flex">{pagesList()}</ul>
        </nav>
        <button className="hover:cursor-pointer rounded-r-lg h-[42px] border border-gray-300 px-[1rem]">
          Next
        </button>
      </div>
    </div>
  );
}

function Table(): ReactElement {
  const { refetch, apiResponse } = useFetchTimeSeries();

  return (
    <div className="p-[2rem] mx-[5rem] my-[2.5rem]">
      <table className="mb-[2rem]">
        <thead>
          <tr className="*:px-[1.5rem] *:py-[1.25rem] *:text-[#1f2937] *:font-normal">
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {!!apiResponse
            ? Object.keys(apiResponse.timeSeries).map((day, i) => (
                <tr
                  key={i}
                  className="*:text-left *:text-[#4b5563] *:py-[1rem] *:px-[3.5rem] *:text-sm"
                >
                  <td>
                    {formatToUSD(apiResponse.timeSeries[`${day}`]["1. open"])}
                  </td>
                  <td>
                    {formatToUSD(apiResponse.timeSeries[`${day}`]["2. high"])}
                  </td>
                  <td>
                    {formatToUSD(apiResponse.timeSeries[`${day}`]["3. low"])}
                  </td>
                  <td>
                    {formatToUSD(apiResponse.timeSeries[`${day}`]["4. close"])}
                  </td>
                  <td>
                    {formatToUSD(apiResponse.timeSeries[`${day}`]["5. volume"])}
                  </td>
                </tr>
              ))
            : "No data was fetched"}
        </tbody>
      </table>
      {!!apiResponse?.pages && (
        <Pagination
          currentPage={apiResponse.currentPage}
          pages={apiResponse.pages}
          refetch={refetch}
          totalItems={apiResponse.totalItems}
        />
      )}
    </div>
  );
}

export default Table;
