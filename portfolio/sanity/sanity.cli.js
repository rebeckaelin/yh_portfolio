import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'be0n09rx',
    dataset: 'production',
  },

  autoUpdates: true,
})
