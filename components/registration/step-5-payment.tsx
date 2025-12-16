"use client"

import { useState } from "react"
import { UseFormReturn } from "react-hook-form"
import { Check, Loader2, QrCode } from "lucide-react"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RegistrationFormData } from "@/lib/schemas/registration-schema"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface Step5PaymentProps {
  form: UseFormReturn<RegistrationFormData>
}

export function Step5Payment({ form }: Step5PaymentProps) {
  const [isVerifying, setIsVerifying] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  const handleVerify = () => {
    const txId = form.getValues("transactionId")
    if (!txId) {
      form.setError("transactionId", { message: "Please enter a transaction ID first" })
      return
    }

    setIsVerifying(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsVerifying(false)
      setIsVerified(true)
      form.setValue("paymentStatus", "verified")
      form.clearErrors("transactionId")
    }, 2000)
  }

  // UPI Details from User
  const upiId = "muwahidomer@okicici" 
  const upiName = "Mohammad Omer"
  // Using static image uploaded by user
  const qrUrl = "/images/payment-qr.png"

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-medium">Payment Details</h3>
        <p className="text-sm text-muted-foreground">
          Scan the QR code below using Google Pay, PhonePe, or any UPI app to pay.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center p-6 border rounded-lg bg-gray-50 dark:bg-zinc-900 border-dashed">
        <div className="bg-white p-4 rounded-lg shadow-sm">
           <img 
            src={qrUrl} 
            alt="UPI QR Code" 
            className="w-48 h-48 object-contain mix-blend-multiply" 
          />
        </div>
        <p className="mt-4 text-sm font-medium">UPI ID: {upiId}</p>
        <p className="text-xs text-muted-foreground mt-1">Name: {upiName}</p>
      </div>

      <div className="space-y-4">
        <FormField
          control={form.control}
          name="transactionId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Transaction ID / UTR Number</FormLabel>
              <FormControl>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Enter Transaction ID (e.g., 1234567890)" 
                    {...field} 
                    disabled={isVerified} 
                  />
                  <Button 
                    type="button" 
                    onClick={handleVerify}
                    disabled={isVerifying || isVerified || !field.value}
                    variant={isVerified ? "default" : "secondary"}
                    className={isVerified ? "bg-green-600 hover:bg-green-700" : ""}
                  >
                    {isVerifying ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : isVerified ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      "Verify"
                    )}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {isVerified && (
          <Alert className="bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300">
            <Check className="h-4 w-4 stroke-green-600 dark:stroke-green-400" />
            <AlertTitle>Payment Verified</AlertTitle>
            <AlertDescription>
              Your payment has been successfully verified. You can now complete the registration.
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  )
}
