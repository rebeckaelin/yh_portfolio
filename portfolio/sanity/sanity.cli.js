import {defineCliConfig} from 'sanity/cli'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'be0n09rx',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  autoUpdates: true,
})
