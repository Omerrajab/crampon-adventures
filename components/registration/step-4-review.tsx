"use client"

import { format } from "date-fns"
import { UseFormReturn } from "react-hook-form"
import * as z from "zod"

import { registrationSchema } from "@/lib/schemas/registration-schema"

interface StepProps {
  form: UseFormReturn<z.infer<typeof registrationSchema>>
}

export function Step4Review({ form }: StepProps) {
  const values = form.getValues()

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Identity & Personal Info</h3>
        <div className="grid grid-cols-1 gap-4 rounded-lg border p-4 sm:grid-cols-2">
          <div>
            <span className="text-sm font-medium text-muted-foreground">Full Name</span>
            <p>{values.fullName}</p>
          </div>
          <div>
            <span className="text-sm font-medium text-muted-foreground">Date of Birth</span>
            <p>{values.dateOfBirth ? format(values.dateOfBirth, "PPP") : "Not provided"}</p>
          </div>
          <div>
            <span className="text-sm font-medium text-muted-foreground">Gender</span>
            <p className="capitalize">{values.gender}</p>
          </div>
          <div>
            <span className="text-sm font-medium text-muted-foreground">Nationality</span>
            <p>{values.nationality}</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Contact Details</h3>
        <div className="grid grid-cols-1 gap-4 rounded-lg border p-4 sm:grid-cols-2">
          <div>
            <span className="text-sm font-medium text-muted-foreground">Email</span>
            <p>{values.email}</p>
          </div>
          <div>
            <span className="text-sm font-medium text-muted-foreground">Phone</span>
            <p>{values.phone}</p>
          </div>
          <div className="sm:col-span-2">
            <span className="text-sm font-medium text-muted-foreground">Address</span>
            <p>{values.address}</p>
          </div>
          <div>
            <span className="text-sm font-medium text-muted-foreground">Emergency Contact</span>
            <p>{values.emergencyContactName}</p>
          </div>
          <div>
            <span className="text-sm font-medium text-muted-foreground">Emergency Phone</span>
            <p>{values.emergencyContactPhone}</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Medical Info</h3>
        <div className="grid grid-cols-1 gap-4 rounded-lg border p-4 sm:grid-cols-2">
          <div>
            <span className="text-sm font-medium text-muted-foreground">Blood Group</span>
            <p>{values.bloodGroup}</p>
          </div>
          <div>
            <span className="text-sm font-medium text-muted-foreground">Fitness Level</span>
            <p className="capitalize">{values.fitnessLevel}</p>
          </div>
          {values.medicalConditions && (
            <div className="sm:col-span-2">
              <span className="text-sm font-medium text-muted-foreground">Medical Conditions</span>
              <p>{values.medicalConditions}</p>
            </div>
          )}
          {values.allergies && (
            <div className="sm:col-span-2">
              <span className="text-sm font-medium text-muted-foreground">Allergies</span>
              <p>{values.allergies}</p>
            </div>
          )}
          {values.medications && (
            <div className="sm:col-span-2">
              <span className="text-sm font-medium text-muted-foreground">Medications</span>
              <p>{values.medications}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
