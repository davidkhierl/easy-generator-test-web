import { ApiEndpoints } from '@/lib/api-service/api-endpoints'
import { ApiError } from '@/lib/api-service/api-error'
import { UpdateUserInputs, User } from '@/lib/api-service/api.types'
import { fetchHandler } from '@/lib/api/fetch-handler'

export async function updateCurrentUser(updateUserInputs: UpdateUserInputs) {
  return await fetchHandler(async (headers) => {
    const res = await fetch(ApiEndpoints.CURRENT_USER, {
      method: 'PATCH',
      headers,
      credentials: 'include',
      cache: 'no-cache',
      body: new URLSearchParams({ ...updateUserInputs }),
    })
    const data = await res.json()
    if (!res.ok) throw new ApiError(data)

    return data as User
  })
}
