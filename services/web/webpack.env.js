import packageJSON from './package.json';
import host from './webpack.const';

const ENV = process.env.NODE_ENV || 'development';
const API_ENV = process.env.NODE_ENV_API || 'jsonserver';

const VARIABLES = {
  DEBUGGING: false,
  MONITORING: true,
  VERSION: packageJSON.version,
  GAPI_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  API_HOST: host.API_HOST[API_ENV],
  API_PORT: host.API_PORT[API_ENV],
  API_VER: host.API_VER[API_ENV]
};

const ENV_VARIABLES = {
  production: {
    'process.env.NODE_ENV': 'production',
    'app.env': {
      ...VARIABLES
    }
  },
  development: {
    'process.env.NODE_ENV': 'development',
    'app.env': {
      ...VARIABLES
    }
  }
};

export default {
  name: ENV,
  isDev: ENV === 'development',
  variables: ENV_VARIABLES[ENV]
};
