export interface Page {
  pageNum: number
  pageSize: number
}

export interface PageResult<T> {
  code: number
  rows: T[]
  total: number
  msg: string
}
export interface PageQueryOption {
  immediate?: boolean
  onQueryFinish?: () => void
}
