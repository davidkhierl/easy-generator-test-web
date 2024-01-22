import { UpdateUserForm } from '@/components/forms/update-user-form'
import { getCurrentUser } from '@/lib/api/get-current-user'

export default async function AccountSettingsPage() {
  const user = await getCurrentUser()
  return (
    <>
      <section>
        <h2 className="mb-4 text-lg">My Account</h2>
      </section>
      <UpdateUserForm user={user} />
    </>
  )
}
