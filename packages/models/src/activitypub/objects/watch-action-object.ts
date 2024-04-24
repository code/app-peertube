export interface WatchActionObject {
  id: string
  type: 'WatchAction'

  startTime: string
  endTime: string

  location?: {
    addressCountry: string
    addressRegion: string
  }

  uuid?: string
  // FIXME: remove following fields in the future, introduced for federation compatibility in 6.1
  identifier?: string
  _actionStatus?: 'CompletedActionStatus'
  _watchSections?: {
    startTimestamp: number
    endTimestamp: number
  }[]

  object: string
  actionStatus: 'CompletedActionStatus'

  duration: string

  watchSections: {
    startTimestamp: number
    endTimestamp: number
  }[]
}
