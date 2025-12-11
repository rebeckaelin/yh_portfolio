import {defineCliConfig} from 'sanity/cli'
import dotenv from 'dotenv'
dotenv.config()

export default defineCliConfig({
  api: {
    projectId: 'be0n09rx',
    dataset: 'production',
  },
  autoUpdates: true,
})
