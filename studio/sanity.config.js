import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'

export default defineConfig({
  name: 'default',
  title: 'cloudinary-sanity-example',

  projectId: 'd8z1yyuw',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), cloudinarySchemaPlugin()],

  schema: {
    types: schemaTypes,
  },
})
