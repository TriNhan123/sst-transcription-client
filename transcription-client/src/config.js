const config = {
    MAX_ATTACHMENT_SIZE: 5000000,

    s3: {
      REGION: "us-east-1",
      BUCKET: "audio-file-upload",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: " https://srzevrv8l9.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_he0wBIG7O",
      APP_CLIENT_ID: "4ej6n3psqnt2iar45kl3hmdt7o",
      IDENTITY_POOL_ID: "us-east-1:e3230917-ca99-46c1-ac49-bd28f010a88b",
    },
  };
  
  export default config;