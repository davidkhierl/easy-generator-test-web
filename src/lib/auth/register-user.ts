import { ApiError } from '@/lib/api-service/api-error'
import { AuthResponse, RegisterUserInputs } from '@/lib/api-service/api.types'
import { getBaseUrl } from '@/lib/utils/get-base-url'

export async function registerUser(registerUserInputs: RegisterUserInputs): Promise<AuthResponse> {
  const res = await fetch(`${getBaseUrl()}/api/auth/register`, {
    method: 'post',
    body: new URLSearchParams({ ...registerUserInputs }),
    credentials: 'include',
    cache: 'no-cache',
  })
  const data = await res.json()
  if (!res.ok) {
    throw new ApiError(data)
  }
  return data as AuthResponse
}
