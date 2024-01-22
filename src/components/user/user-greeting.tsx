import { HighFive } from '@/components/lotties/high-five'
import { getCurrentUser } from '@/lib/api/get-current-user'

export async function UserGreeting() {
  const user = await getCurrentUser()

  return (
    <div className="flex flex-col gap-4 rounded-md bg-gradient-to-r from-orange-600 to-pink-500 p-6 shadow-2xl shadow-pink-300/50 md:flex-row md:justify-between">
      <div>
        <h2 className="text-2xl font-bold text-white md:text-4xl">Hi {user.name}!</h2>
        <h3 className="mt-4 text-xl text-white md:text-5xl">Welcome to the application</h3>
      </div>
      <HighFive className="md:max-w-80" />
    </div>
  )
}
