import { RegistrationStepper } from "@/components/registration/registration-stepper"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Crampon Adventures",
  description: "Become a member of Crampon Adventures and start your journey.",
};

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container pt-28 pb-12 px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Join the Adventure
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Complete the form below to become a member of Crampon Adventures.
            </p>
          </div>
          <RegistrationStepper />
        </div>
      </main>
      <Footer />
    </div>
  )
}
