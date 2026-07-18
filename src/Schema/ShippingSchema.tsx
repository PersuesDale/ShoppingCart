import { z } from "zod";

export const ShippingSchema = z.object({

    fullName: z
        .string()
        .min(1, "Full name is required"),

    email: z
        .email("Email must be valid"),

    phNo: z
        .string()
        .regex(
            /^\d{10}$/,
            "Phone number is required"
        ),
    address: z
        .string()
        .min(1, "Address is required"),

    city: z
        .string()
        .min(1, "City is required"),

    postalCode: z
        .string()
        .regex(
            /^\d{6}$/,
            "Postal code is required"
        ),


});

export type Shipping = z.infer<typeof ShippingSchema>;