/* eslint-disable @typescript-eslint/explicit-function-return-type */
import swr, { SWRConfiguration } from 'swr'

export function useSWR<A>(
  key: string,
  fetcher: any,
  config?: SWRConfiguration<A, Error, any>
) {
  const { data, error, isValidating, mutate } = swr<A, Error>(
    key,
    fetcher,
    config
  )

  return { data, error, isValidating, mutate }
}
