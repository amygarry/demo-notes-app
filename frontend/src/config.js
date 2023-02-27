const config = {
  STRIPE_KEY: "sk_test_51Me4c3DHH0PK4JaApiGjrJ3jRQr5bm0YYzdEohBum7I99d0JANTRFusGupnR5gpWEfLAzjM2BYO0PbxPU8CVDfwn00iiXV94P7",
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
  SENTRY_DSN: "https://5f83aa2e21064e47bab8a1f308f940eb@sentry.io/5185720",
  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;

//   Here we are loading the environment that are set from our serverless backend. We did this back when we were first setting up our React app.