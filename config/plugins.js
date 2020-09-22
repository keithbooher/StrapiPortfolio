module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS'),
      secretAccessKey: env('AWS_SECRET'),
      region: env('AWS_REGION'),
      params: {
        Bucket: env('S3_BUCKET_NAME'),
      },
    },
  },
});