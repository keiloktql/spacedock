const PORT = 3000;
type ENVIRONMENT_TYPE = "PROD" | "DEV";
interface IHostUrl {
  PROD: string;
  DEV: string;
}

export const ENVIRONMENT: ENVIRONMENT_TYPE =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "DEV" ? "DEV" : "PROD";
export const PROD_HOST_URL: string = "https://spacedock.vercel.app";

const HOST_URLS: IHostUrl = {
  PROD: PROD_HOST_URL,
  DEV: `http://localhost:${PORT}`
};
export const HOST_URL = HOST_URLS[ENVIRONMENT];

// REGEX
export const EMAIL_INCLUDED_REGEX =
  /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
export const HTTPS_INCLUDED_REGEX = /(https?:\/\/\S+)/gi;
export const EMAIL_OR_HTTPS_INCLUDED_REGEX =
  /(https?:\/\/\S+|[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
