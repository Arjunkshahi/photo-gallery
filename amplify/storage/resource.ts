import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'photogallery',
  access: (allow) => ({
    'media/*': [
      allow.guest.to(['read']) // additional actions such as "write" and "delete" can be specified depending on your use case
    ]
  })
});
