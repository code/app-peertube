import { ActivityIconObject, ActivityPubAttributedTo } from './common-objects.js'

export interface PlaylistObject {
  id: string
  type: 'Playlist'

  name: string

  content: string
  mediaType: 'text/markdown'

  // FIXME: remove identifier in the future, introduced for federation compatibility in 6.1
  uuid?: string
  identifier?: string

  totalItems: number
  attributedTo: ActivityPubAttributedTo[]

  icon?: ActivityIconObject

  published: string
  updated: string

  orderedItems?: string[]

  partOf?: string
  next?: string
  first?: string

  to?: string[]
}
