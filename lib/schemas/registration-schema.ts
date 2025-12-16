import * as z from "zod"

export const registrationSchema = z.object({
  // Step 1: Identity & Personal Info
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  eventName: z.string().optional(),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }),
  gender: z.string().min(1, "Please select a gender"),
  nationality: z.string().min(2, "Nationality is required"),

  // Step 2: Contact Details
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address is required"),
  emergencyContactName: z.string().min(2, "Emergency contact name is required"),
  emergencyContactPhone: z.string().min(10, "Emergency contact phone is required"),

  // Step 3: Medical Info
  bloodGroup: z.string().min(1, "Blood group is required"),
  medicalConditions: z.string().optional(),
  allergies: z.string().optional(),
  medications: z.string().optional(),
  fitnessLevel: z.enum(["beginner", "intermediate", "advanced", "expert"], {
    required_error: "Please select your fitness level",
  }),

  // Step 5: Payment
  transactionId: z.string().min(1, "Transaction ID is required to verify payment"),
  paymentStatus: z.enum(["pending", "verified"]).optional(),
})

export type RegistrationFormData = z.infer<typeof registrationSchema>
