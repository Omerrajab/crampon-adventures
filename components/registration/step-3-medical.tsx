"use client"

import { UseFormReturn } from "react-hook-form"
import * as z from "zod"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { registrationSchema } from "@/lib/schemas/registration-schema"

interface StepProps {
  form: UseFormReturn<z.infer<typeof registrationSchema>>
}

export function Step3Medical({ form }: StepProps) {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="bloodGroup"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Blood Group</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select blood group" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
                  <SelectItem key={bg} value={bg}>
                    {bg}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="fitnessLevel"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Fitness Level</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="beginner" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Beginner (Comfortable with 2-3 hour hikes)
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="intermediate" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Intermediate (Comfortable with 4-6 hour hikes)
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="advanced" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Advanced (Comfortable with full-day strenuous hikes)
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="expert" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Expert (Comfortable with multi-day expeditions)
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Medical History (Optional)</h3>
        <FormField
          control={form.control}
          name="medicalConditions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Existing Medical Conditions</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="List any medical conditions..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="allergies"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Allergies</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="List any allergies..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="medications"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Medications</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="List any current medications..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}
