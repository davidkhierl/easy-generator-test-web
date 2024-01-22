enum ApiBaseEndpoints {
  AUTH = 'auth',
  LOGIN = ApiBaseEndpoints.AUTH + '/login',
  LOGOUT = ApiBaseEndpoints.AUTH + '/logout',
  REFRESH_TOKEN = ApiBaseEndpoints.AUTH + '/refresh',
  USERS = 'users',
  CURRENT_USER = ApiBaseEndpoints.USERS + '/me',
}

export class ApiEndpoints {
  public static readonly LOGIN = `${ApiEndpoints.getBaseUrl()}/${ApiBaseEndpoints.LOGIN}`
  public static readonly LOGOUT = `${ApiEndpoints.getBaseUrl()}/${ApiBaseEndpoints.LOGOUT}`
  public static readonly REFRESH = `${ApiEndpoints.getBaseUrl()}/${ApiBaseEndpoints.REFRESH_TOKEN}`
  public static readonly USERS = `${ApiEndpoints.getBaseUrl()}/${ApiBaseEndpoints.USERS}`
  public static readonly CURRENT_USER = `${ApiEndpoints.getBaseUrl()}/${
    ApiBaseEndpoints.CURRENT_USER
  }`

  public static getBaseUrl() {
    if (!process.env.NEXT_PUBLIC_API_URL)
      throw Error('Missing environment variable: NEXT_PUBLIC_API_ENDPOINT')
    return `${process.env.NEXT_PUBLIC_API_URL}`
  }
}
