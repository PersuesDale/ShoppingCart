import { z } from "zod";

export const ShippingSchema = z.object({

    fullName: z
        .string()
        .min(1, "Full name cannot be empty"),

    email: z
        .email("Please enter a valid email address"),

    address: z
        .string()
        .min(1, "Address cannot be empty"),

    city: z
        .string()
        .min(1, "City name cannot be empty"),

    pinCode: z
        .string()
        .regex(
            /^\d{6}$/,
            "Postal code must contain exactly 6 digits"
        ),
    state: z
        .string()
        .min(1, "State name cannot be empty"),

    country: z
        .string()
        .min(1, "Country name cannot be empty"),

});

export type Shipping = z.infer<typeof ShippingSchema>;