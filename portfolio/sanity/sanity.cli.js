import {defineCliConfig} from 'sanity/cli'
import dotenv from 'dotenv'
dotenv.config()

export default defineCliConfig({
  api: {
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
  },
  autoUpdates: true,
})
