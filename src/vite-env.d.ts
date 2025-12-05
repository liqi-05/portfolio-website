// Reference to vite/client removed to fix "Cannot find type definition file" error

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
  }
}
