import { useEffect, useState } from "react";
import { IAPIResponse } from "../types/timeseries";

const apiUrl = process.env.NODE_ENV === 'development'
  ? process.env?.API_URL
  : process.env?.API_URL_PROD;

function useFetchTimeSeries() {
  const [apiResponse, setApiResponse] = useState<IAPIResponse>();

  useEffect(() => {
    fetch_data();
    //setApiResponse({ "timeSeries": { "2024-06-18": { "1. open": "62279.16000000", "2. high": "62696.68000000", "3. low": "60710.72000000", "4. close": "61193.46000000", "5. volume": "244.90338159" }, "2024-06-16": { "1. open": "64664.14000000", "2. high": "65298.24000000", "3. low": "60801.06000000", "4. close": "62262.17000000", "5. volume": "1826.63665226" }, "2024-06-09": { "1. open": "62437.65000000", "2. high": "66132.47000000", "3. low": "62283.90000000", "4. close": "64648.18000000", "5. volume": "1890.72681229" }, "2024-06-02": { "1. open": "63152.39000000", "2. high": "64989.91000000", "3. low": "61440.00000000", "4. close": "62428.48000000", "5. volume": "1558.55547124" }, "2024-05-26": { "1. open": "60930.51000000", "2. high": "65933.02000000", "3. low": "60750.00000000", "4. close": "63154.49000000", "5. volume": "2469.19517889" }, "2024-05-19": { "1. open": "57085.97000000", "2. high": "62261.43000000", "3. low": "56418.03000000", "4. close": "60927.75000000", "5. volume": "2144.93191604" }, "2024-05-12": { "1. open": "59515.05000000", "2. high": "60834.00000000", "3. low": "55876.05000000", "4. close": "57075.98000000", "5. volume": "2126.96316157" }, "2024-05-05": { "1. open": "58965.50000000", "2. high": "60365.57000000", "3. low": "52943.49000000", "4. close": "59506.98000000", "5. volume": "4178.03884138" }, "2024-04-28": { "1. open": "60985.08000000", "2. high": "63134.63000000", "3. low": "58411.49000000", "4. close": "58947.56000000", "5. volume": "2398.39662537" }, "2024-04-21": { "1. open": "61870.64000000", "2. high": "62869.53000000", "3. low": "56129.00000000", "4. close": "60953.54000000", "5. volume": "4851.40507085" } }, "pages": 4, "currentPage": 1, "totalItems": 43 });
  }, []);

  async function fetch_data(page: number = 1) {
    const data: IAPIResponse = await (await fetch(`${apiUrl}/intraday?page=${page}`)).json();
    setApiResponse(data);
  }

  async function refetch(page?: number) {
   await fetch_data(page);
  }

  return { apiResponse, refetch };
}

export { useFetchTimeSeries }
