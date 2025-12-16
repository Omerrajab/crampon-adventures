"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ChevronRight, ChevronLeft } from "lucide-react"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import { registrationSchema } from "@/lib/schemas/registration-schema"
import { Step1Identity } from "./step-1-identity"
import { Step2Contact } from "./step-2-contact"
import { Step3Medical } from "./step-3-medical"
import { Step4Review } from "./step-4-review"
import { Step5Payment } from "./step-5-payment"

const steps = [
  { id: 1, name: "Identity" },
  { id: 2, name: "Contact" },
  { id: 3, name: "Medical" },
  { id: 4, name: "Review" },
  { id: 5, name: "Payment" },
]

export function RegistrationStepper() {
  const [currentStep, setCurrentStep] = React.useState(1)
  const [previousStep, setPreviousStep] = React.useState(0)
  const delta = currentStep - previousStep

  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      nationality: "",
      gender: "",
      email: "",
      phone: "",
      address: "",
      emergencyContactName: "",
      emergencyContactPhone: "",
      bloodGroup: "",
      medicalConditions: "",
      allergies: "",
      medications: "",
      fitnessLevel: undefined,
      transactionId: "",
      paymentStatus: "pending",
    },
  })

  const processForm = async (data: z.infer<typeof registrationSchema>) => {
    try {
      if (data.paymentStatus !== "verified") {
        alert("Please verify your payment transaction first.")
        return
      }

      const { collection, addDoc } = await import("firebase/firestore")
      const { db } = await import("@/lib/firebase")
      
      await addDoc(collection(db, "registrations"), {
        ...data,
        createdAt: new Date(),
      })
      
      alert("Registration Successful!")
      // Optional: Reset form or redirect
      // form.reset()
    } catch (error) {
      console.error("Error adding document: ", error)
      alert("Registration failed. Please try again.")
    }
  }

  type FieldName = keyof z.infer<typeof registrationSchema>

  const next = async () => {
    const fields = getFieldsForStep(currentStep)
    const output = await form.trigger(fields as FieldName[], { shouldFocus: true })

    if (!output) return

    if (currentStep < steps.length) {
      setPreviousStep(currentStep)
      setCurrentStep((step) => step + 1)
    } else {
      await form.handleSubmit(processForm)()
    }
  }

  const prev = () => {
    if (currentStep > 1) {
      setPreviousStep(currentStep)
      setCurrentStep((step) => step - 1)
    }
  }

  const getFieldsForStep = (step: number): string[] => {
    switch (step) {
      case 1:
        return ["fullName", "dateOfBirth", "gender", "nationality"]
      case 2:
        return ["email", "phone", "address", "emergencyContactName", "emergencyContactPhone"]
      case 3:
        return ["bloodGroup", "medicalConditions", "allergies", "medications", "fitnessLevel"]
      case 4:
         return [] // Review step doesn't have specific fields to validate immediately, but implicitly validates all
      case 5:
        return ["transactionId"]
      default:
        return []
    }
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Stepper Header */}
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > step.id ? (
                <div className="group flex w-full flex-col border-l-4 border-primary py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-primary transition-colors ">
                    Step {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStep === step.id ? (
                <div
                  className="flex w-full flex-col border-l-4 border-primary py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-primary">
                    Step {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex w-full flex-col border-l-4 border-muted py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-muted-foreground transition-colors">
                    Step {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Form Steps */}
      <Form {...form}>
        <form className="mt-8" onSubmit={form.handleSubmit(processForm)}>
          <Card className="bg-white text-black overflow-hidden">
            <CardHeader>
              <CardTitle>{steps[currentStep - 1].name}</CardTitle>
            </CardHeader>
            <CardContent>
              <AnimatePresence mode="wait" custom={delta}>
                <motion.div
                  key={currentStep}
                  initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: delta >= 0 ? "-50%" : "50%", opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {currentStep === 1 && <Step1Identity form={form} />}
                  {currentStep === 2 && <Step2Contact form={form} />}
                  {currentStep === 3 && <Step3Medical form={form} />}
                  {currentStep === 4 && <Step4Review form={form} />}
                  {currentStep === 5 && <Step5Payment form={form} />}
                </motion.div>
              </AnimatePresence>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={prev}
                disabled={currentStep === 1}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button type="button" onClick={next}>
                {currentStep === steps.length ? "Submit" : "Next"}
                {currentStep !== steps.length && (
                  <ChevronRight className="ml-2 h-4 w-4" />
                )}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  )
}
