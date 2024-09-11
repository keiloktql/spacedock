const PORT = 3000;
type ENVIRONMENT_TYPE = "PROD" | "DEV";
interface IHostUrl {
  PROD: string;
  DEV: string;
}

export const ENVIRONMENT: ENVIRONMENT_TYPE =
  import.meta.env.VITE_ENVIRONMENT === "DEV" ? "DEV" : "PROD";
export const PROD_HOST_URL: string = "https://panolog.netlify.app";

const HOST_URLS: IHostUrl = {
  PROD: PROD_HOST_URL,
  DEV: `http://localhost:${PORT}`
};
export const HOST_URL = HOST_URLS[ENVIRONMENT];
export const VERSION = "0.0.1-BETA";

// URL
export const PANOLOG_DOC_URL = `${HOST_URL}/docs`;

// LOCALSTORAGE KEYS
export const PANOLOG_SETTINGS_FILTER_KEY = "PANOLOG_SETTINGS_FILTER";
export const PANOLOG_SETTINGS_THEME_KEY = "PANOLOG_SETTINGS_THEME_KEY";
