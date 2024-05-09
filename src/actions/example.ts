'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function withLeadingSlash(formData: FormData) {
  redirect('/test-redirect');
}

export async function withoutLeadingSlash(formData: FormData) {
  redirect('test-redirect');
}
