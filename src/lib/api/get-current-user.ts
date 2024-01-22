import { ApiEndpoints } from '@/lib/api-service/api-endpoints'
import { ApiError } from '@/lib/api-service/api-error'
import { User } from '@/lib/api-service/api.types'
import { fetchHandler } from '@/lib/api/fetch-handler'

export async function getCurrentUser() {
  return await fetchHandler(async (headers) => {
    const res = await fetch(ApiEndpoints.CURRENT_USER, {
      method: 'get',
      headers,
      credentials: 'include',
      cache: 'no-cache',
    })
    const data = await res.json()
    if (!res.ok) throw new ApiError(data)

    return data as User
  })
}
