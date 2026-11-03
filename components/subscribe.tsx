import { subscribeConfig } from '@/lib/subscribe'

export function Subscribe({ label = 'Get new posts by email' }: { label?: string }) {
  if (!subscribeConfig.enabled || !subscribeConfig.buttondownUsername) return null

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-6">
      <p className="text-[15px] font-medium text-white">{label}</p>
      <form
        action={`https://buttondown.com/api/emails/embed-subscribe/${subscribeConfig.buttondownUsername}`}
        method="post"
        className="flex flex-wrap gap-2"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="min-w-0 flex-1 rounded-full border border-line bg-ink px-4 py-2 text-sm text-fg placeholder:text-subtle focus:border-line-strong focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-fg px-5 py-2 text-sm font-medium text-ink transition-opacity hover:opacity-80"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}
