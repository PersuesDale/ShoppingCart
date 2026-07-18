import { useNavigate } from "react-router-dom";
import { ShippingSchema, type Shipping } from "../Schema/ShippingSchema";
import { useState, type SubmitEventHandler } from "react";

const ShippingDetails = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState<Shipping>({

        fullName: "",
        email: "",
        phNo: "",
        address: "",
        city: "",
        postalCode: "",
        

    })

    const [errors, setErrors] = useState<Partial<Record<keyof Shipping, string>>>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {

        e.preventDefault();

        const result = ShippingSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;

            setErrors({
                fullName: fieldErrors.fullName?.[0],
                email: fieldErrors.email?.[0],
                phNo: fieldErrors.phNo?.[0],
                address: fieldErrors.address?.[0],
                city: fieldErrors.city?.[0],
                postalCode: fieldErrors.postalCode?.[0],
                
            });

            return;
        }

        setErrors({});

        navigate("/OrderSummary", {
            state: {
                shipping: result.data,
            },
        });

    };

    return (
        <section className="min-h-screen bg-gray-100 dark:bg-gray-950 dark:text-white p-6">

            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow p-6">

                <h1 className="text-2xl font-semibold mb-6">
                    Shipping Details
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="fullName"
                            className="font-medium"
                        >
                            Full Name
                        </label>

                        <input
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter your full name"
                            className="border rounded-md p-3 outline-none focus:ring-2 focus:ring-black"
                        />

                        {errors.fullName && (
                            <p className="text-red-600 text-sm">
                                {errors.fullName}
                            </p>
                        )}

                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="font-medium"
                        >
                            Email
                        </label>

                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Enter your email"
                            className="border rounded-md p-3 outline-none focus:ring-2 focus:ring-black"
                        />

                        {errors.email && (
                            <p className="text-red-600 text-sm">
                                {errors.email}
                            </p>
                        )}

                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="phNo"
                            className="font-medium"
                        >
                            Phone Number
                        </label>

                        <input
                            name="phNo"
                            value={formData.phNo}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter your Phone Number"
                            className="border rounded-md p-3 outline-none focus:ring-2 focus:ring-black"
                        />

                        {errors.phNo && (
                            <p className="text-red-600 text-sm">
                                {errors.phNo}
                            </p>
                        )}

                    </div>

                    <div className="flex flex-col gap-2">

                        <label
                            htmlFor="address"
                            className="font-medium"
                        >
                            Address
                        </label>

                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter your shipping address"
                            rows={3}
                            className="border rounded-md p-3 outline-none resize-none focus:ring-2 focus:ring-black"
                        />

                        {errors.address && (
                            <p className="text-red-600 text-sm">
                                {errors.address}
                            </p>
                        )}

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <div className="flex flex-col gap-2">

                            <label
                                htmlFor="city"
                                className="font-medium"
                            >
                                City
                            </label>

                            <input
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                type="text"
                                placeholder="City"
                                className="border rounded-md p-3 outline-none focus:ring-2 focus:ring-black"
                            />

                            {errors.city && (
                                <p className="text-red-600 text-sm">
                                    {errors.city}
                                </p>
                            )}

                        </div>

                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="postalCode"
                                className="font-medium"
                            >
                                Pin Code
                            </label>

                            <input
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                                type="text"
                                placeholder="Pin Code"
                                className="border rounded-md p-3 outline-none focus:ring-2 focus:ring-black"
                            />

                            {errors.postalCode && (
                                <p className="text-red-600 text-sm">
                                    {errors.postalCode}
                                </p>
                            )}

                        </div>

                    </div>

                    <div className="flex justify-between mt-4">

                        <button
                            type="button"
                            className="px-5 py-2 border border-black rounded-md hover:bg-gray-100 hover:text-black transition-colors"
                            onClick={() => navigate("/cart")}
                        >
                            Back
                        </button>

                        <button
                            type="submit"
                            className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                        >
                            Continue
                        </button>

                    </div>

                </form>

            </div>

        </section>
    );
};

export default ShippingDetails;