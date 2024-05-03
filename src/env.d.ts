/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CRYPTO_JS_ENCRYPTION_KEY: string;
  readonly VITE_PAY_STACK_API_SECRET_KEY: string;
  readonly VITE_APP_BACKEND_BASE_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
