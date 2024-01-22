import { ApiError } from '@/lib/api-service/api-error'
import { AuthLogin, AuthResponse } from '@/lib/api-service/api.types'
import { getBaseUrl } from '@/lib/utils/get-base-url'

export async function login(credentials: AuthLogin): Promise<AuthResponse> {
  const res = await fetch(`${getBaseUrl()}/api/auth/login`, {
    method: 'post',
    body: new URLSearchParams({ ...credentials }),
    credentials: 'include',
    cache: 'no-cache',
  })

  const data = await res.json()
  if (!res.ok) throw new ApiError(data)
  return data as AuthResponse
}
