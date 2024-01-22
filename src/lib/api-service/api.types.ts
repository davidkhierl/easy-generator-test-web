export interface AuthResponse {
  user: User
  access_token: string
  at_expiry: number
}

export type AuthRefreshResponse = Omit<AuthResponse, 'user'>

export interface AuthLogin {
  email: string
  password: string
}

export interface RegisterUserInputs {
  email: string
  password: string
}

export interface EntityId {
  id: string
}

export interface TimeStamps {
  created_at: Date
  updated_at: Date
}

export type BaseEntity = EntityId & TimeStamps

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface User extends BaseEntity {
  email: string
  name: string
  role: Role
}

export interface UpdateUserInputs {
  name: string
}
