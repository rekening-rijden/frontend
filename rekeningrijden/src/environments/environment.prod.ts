// @ts-ignore
import {default as authInfo} from "../../auth_config.json";

export const environment = {
  dev: {
    serverUrl: authInfo.serverUrl
  },
  production: {
    serverUrl: authInfo.serverUrl
  }
};
