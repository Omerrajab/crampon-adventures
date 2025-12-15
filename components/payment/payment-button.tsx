"use client"

import { Button } from "@/components/ui/button"
import { CreditCard } from "lucide-react"

interface PaymentButtonProps {
  amount: number
  onSuccess: () => void
}

export function PaymentButton({ amount, onSuccess }: PaymentButtonProps) {
  const handlePayment = () => {
    // Simulate GPay interaction
    const confirmPayment = window.confirm(`Pay $${amount} with GPay?`)
    if (confirmPayment) {
      onSuccess()
    }
  }

  return (
    <Button
      onClick={handlePayment}
      className="w-full bg-black text-white hover:bg-gray-800"
    >
      <CreditCard className="mr-2 h-4 w-4" />
      Pay with GPay
    </Button>
  )
}
