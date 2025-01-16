"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useFetchData } from "@/hooks/use-apis";
import { AllMENUITEMSURL } from "@/lib/api";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  phoneNumber: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  menuSelection: z.object({
    starter: z.string().min(1, "Please select a starter"),
    mainCourse: z.string().min(1, "Please select a main course"),
    dessert: z.string().min(1, "Please select a dessert"),
  }),
});

interface RegistrationFormProps {
  onSubmit: (data: z.infer<typeof formSchema>) => void;
  isSubmitting: boolean;
}

export function RegistrationForm({
  onSubmit,
  isSubmitting,
}: RegistrationFormProps) {
  const coursesState = useFetchData(AllMENUITEMSURL);
  const menuItems = coursesState?.data?.data?.event?.menu_items;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      menuSelection: {
        starter: "",
        mainCourse: "",
        dessert: "",
      },
    },
  });

  return (
    <Form {...form}>
      <div className="text-center py-5">
        <h2 className="text-3xl font-semibold ">Event Registration</h2>
        <p className="text-xl text-gray-500 font-normal">
          Please fill in the information below
        </p>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Personal Information</h3>
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {" "}
                  Full name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {" "}
                  Phone number <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="+234" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {" "}
                  Email <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Menu Selection</h3>
          <h5 className="text-gray-500">
            Select one option for each section. All sections are required{" "}
            <span className="text-red-500">*</span>
          </h5>

          <FormField
            control={form.control}
            name="menuSelection.starter"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Starter</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={coursesState.isPending}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a starter" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {menuItems?.[2]?.items.map((starter: any) => (
                      <SelectItem key={starter?.uuid} value={starter?.uuid}>
                        {starter?.name}
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
            name="menuSelection.mainCourse"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Main Course</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={coursesState.isPending}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a main course" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {menuItems?.[0]?.items.map((starter: any) => (
                      <SelectItem key={starter?.uuid} value={starter?.uuid}>
                        {starter?.name}
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
            name="menuSelection.dessert"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Dessert</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={coursesState.isPending}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a dessert" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {menuItems?.[1]?.items.map((starter: any) => (
                      <SelectItem key={starter?.uuid} value={starter?.uuid}>
                        {starter?.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#6D2932] hover:bg-[#8B3D3D]"
        >
          {isSubmitting ? "Submiting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
