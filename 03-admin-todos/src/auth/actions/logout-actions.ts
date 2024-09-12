'use server'

import { signOut as actionSignOut } from '@/lib/auth'

export async function signOut() {
  await actionSignOut()
}
