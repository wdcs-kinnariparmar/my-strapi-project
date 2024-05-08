module.exports = ({ env }) => ({
  // email: {
  //   config: {
  //     provider: 'sendgrid',
  //     providerOptions: {
  //       apiKey: env('SENDGRID_API_KEY'),
  //     },
  //     settings: {
  //       defaultFrom: 'bhavesh.dhamecha@codezeros.com',
  //       defaultReplyTo: 'bhavesh.dhamecha@codezeros.com',
  //     },
  //   },
  // },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('EMAIL_SMTP_HOST', 'smtp.gmail.com'),
        port: env('EMAIL_SMTP_PORT', 465),
        secure: true, // Use secure connection (TLS)
        auth: {
          user: env('EMAIL_SMTP_USER'),
          pass: env('EMAIL_SMTP_PASSWORD'),
        },
      },
    },
    settings: {
      defaultFrom: env('EMAIL_ADDRESS_FROM', "kinnari.parmar@webcluesinfotech.com"), //sender email address
      defaultReplyTo: env('EMAIL_ADDRESS_REPLY', "kinnari.parmar@webcluesinfotech.com"), // Optional reply-to address
    },
  },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          ACL: env('AWS_ACL', 'public-read'),
          signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
          Bucket: env('AWS_BUCKET'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});