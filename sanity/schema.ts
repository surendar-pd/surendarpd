import { type SchemaTypeDefinition } from 'sanity'
import projects from './schemas/projects'
import gallery from './schemas/gallery'
import testimonials from './schemas/testimonials'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, gallery, testimonials],
}
