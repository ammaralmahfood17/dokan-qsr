import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: process.env.NEXT_PUBLIC_BLINK_PROJECT_ID || 'dokan-qsr-saas-cl3ekho5',
  publishableKey: process.env.NEXT_PUBLIC_BLINK_PUBLISHABLE_KEY || 'blnk_pk_XvYxTwcxclMyvboD03iOaui_0G7UwcsO',
  authRequired: false,
  auth: { mode: 'managed' },
})
