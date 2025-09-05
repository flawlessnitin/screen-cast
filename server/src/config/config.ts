import "dotenv/config";

type Config = Record<string, string | number>;
const _config: Config = {
  "port": process.env.PORT || 3000,
}

export const config = {
  get(key: keyof Config): string | number {
    if(!key || !_config[key]) {
      throw new Error(`Config key "${key}" is not defined`);
    }
    return _config[key];
  }
}
