import dotenv from "dotenv";

declare global {
  var proccess: { loadEnvFile: () => void } | undefined;
}

if (!(global as any).proccess) {
  (global as any).proccess = {
    loadEnvFile: () => {
      dotenv.config();
    }
  };
}

export const loadEnv = () => {
  (global as any).proccess!.loadEnvFile();
};