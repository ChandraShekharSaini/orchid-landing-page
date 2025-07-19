import Image from 'next/image'

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-semibold leading-tight lg:text-5xl">
          The Lyra ecosystem brings together our models.
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 md:gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="aspect-[76/59] relative rounded-2xl bg-gradient-to-b from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/payments.png"
                alt="Payments illustration"
                width={1207}
                height={929}
                className="rounded-[15px] shadow dark:hidden"
                priority
              />
              <Image
                src="/payments.png"
                alt="Payments illustration (dark)"
                width={1207}
                height={929}
                className="hidden rounded-[15px] dark:block"
              />
            </div>
          </div>

          <div className="relative space-y-6">
            <p className="text-muted-foreground">
              Gemini is evolving to be more than just the models.{' '}
              <span className="text-accent-foreground font-semibold">
                It supports an entire ecosystem
              </span>{' '}
              — from products to platforms driving innovation.
            </p>
            <p className="text-muted-foreground">
              APIs and infrastructure empower developers and businesses to build what&#39;s next.
            </p>

            <blockquote className="mt-6 border-l-4 pl-4 text-sm sm:text-base">
              <p>
                “Using TailsUI has been like unlocking a secret design superpower. It&#39;s the
                perfect fusion of simplicity and versatility.”
              </p>
              <div className="mt-4 space-y-2">
                <cite className="block font-medium">John Doe, CEO</cite>
                <Image
                  src="https://html.tailus.io/blocks/customers/nvidia.svg"
                  alt="Nvidia Logo"
                  width={80}
                  height={20}
                  className="dark:invert"
                />
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
