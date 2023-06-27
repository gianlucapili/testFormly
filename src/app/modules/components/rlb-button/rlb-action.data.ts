export interface RlbActionData {
  navigate?: {
    path: string,
    qParams?: { [key: string]: string | number | boolean | readonly (string | number | boolean)[] }
    uParams?: string[]
  },
  function?: string,
}
