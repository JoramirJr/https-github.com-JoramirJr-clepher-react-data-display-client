
interface IDailyData {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

interface ITimeSeries { [key: string ]: IDailyData };

interface IAPIResponse {
  timeSeries: ITimeSeries
  pages: number,
  currentPage: number
  totalItems: number
};

export type { IDailyData, ITimeSeries, IAPIResponse }