import { Document } from "../documents/document"

export interface Collection {
  name: string
  documents: Document[]
}
