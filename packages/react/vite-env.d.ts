/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_ENVIRONMENT?: string;
  // Add other environment variables you use here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
