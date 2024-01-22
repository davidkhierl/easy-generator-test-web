'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormInput,
  FormItem,
  FormLabel,
  FormMessage,
  FormServerErrorMessage,
} from '@/components/ui/form'
import { User } from '@/lib/api-service/api.types'
import { updateCurrentUser } from '@/lib/api/update-current-user'
import { setFormErrors } from '@/lib/utils/set-form-errors'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

const formSchema = z.object({
  name: z.string(),
})

type FormValues = z.infer<typeof formSchema>

export function UpdateUserForm(props: { user?: User }) {
  const { refresh } = useRouter()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: props.user?.name ?? '' },
  })

  async function onSubmit(values: FormValues) {
    try {
      await updateCurrentUser(values)
      refresh()
      toast.success('Account updated!')
    } catch (error) {
      setFormErrors(form.setError, error)
    }
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <FormInput type="text" placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormServerErrorMessage />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          Update
        </Button>
      </form>
    </Form>
  )
}
