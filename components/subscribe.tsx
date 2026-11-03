import { subscribeConfig } from '@/lib/subscribe';

export function Subscribe({ label = 'Get new posts by email' }: { label?: string }) {
  if (!subscribeConfig.enabled || !subscribeConfig.buttondownUsername) return null;

  return (
    <div className="border-line bg-surface flex flex-col gap-3 rounded-2xl border p-6">
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
          className="border-line bg-ink text-fg placeholder:text-subtle focus:border-line-strong min-w-0 flex-1 rounded-full border px-4 py-2 text-sm focus:outline-none"
        />
        <button
          type="submit"
          className="bg-fg text-ink rounded-full px-5 py-2 text-sm font-medium transition-opacity hover:opacity-80"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
