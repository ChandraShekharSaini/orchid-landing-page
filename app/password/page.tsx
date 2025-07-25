import { LogoIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent">
      <form
        action=""
        className="w-full max-w-sm overflow-hidden rounded-[calc(var(--radius)+.125rem)] border bg-muted shadow-md shadow-zinc-950/5 dark:[--color-muted:var(--color-zinc-900)]"
      >
        <div className="bg-card -m-px rounded-[calc(var(--radius)+.125rem)] border p-8 pb-6">
          <Link href="/" aria-label="Go to home">
            <LogoIcon />
          </Link>

          <h1 className="mt-4 text-xl font-semibold">Recover Password</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to receive a reset link.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <Label htmlFor="email" className="block text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>

            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            We&#39;ll email you a link to reset your password.
          </p>
        </div>

        <div className="p-3 text-center">
          <p className="text-sm text-accent-foreground">
            Remember your password?
            <Button asChild variant="link" className="px-2">
              <Link href="/login">Log in</Link>
            </Button>
          </p>
        </div>
      </form>
    </section>
  );
}
