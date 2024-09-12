"use client";

import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import { useToast } from "@/components/ui/use-toast";
import { useAuthContextProvider } from "@/context/AuthContext";
import { userDetailsType } from "@/types/types";
import { LoginToExistingAccount } from "@/utils/firebase";
import formatFirebaseError from "@/utils/formatFirebaseError";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Page = () => {
    const { id, setId } = useAuthContextProvider();
    console.log(id);
    const route = useRouter();
    const [userDetails, setUserDetails] = useState<userDetailsType>({
        email: "",
        password: "",
    });
    const [loading, setIsLoading] = useState<boolean>(false);
    const { toast } = useToast();

    const handleChange = (e: any): void => {
        setUserDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSignIn = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            LoginToExistingAccount(userDetails)
                .then((res) => {
                    const { data, code } = res;
                    toast({
                        description: formatFirebaseError(
                            data?.uid ? "Login Succesful" : "An error occured"
                        ),
                        variant: code === 500 ? "destructive" : "default",
                    });
                    setId(res.data?.uid);
                    if (res.data?.uid) {
                        route.push("/");
                    }
                })
                .catch((err) => console.log(err));
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            {/*
            This example requires updating your template:
    
            ```
            <html class="h-full bg-white">
            <body class="h-full">
            ```
          */}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image
                        height={145}
                        width={127}
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                        priority
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSignIn}>
                        <EmailInput
                            Onchange={handleChange}
                            value={userDetails.email}
                        />
                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                                <div className="text-sm">
                                    <Link
                                        href="/forgot-password"
                                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <PasswordInput
                                    Onchange={handleChange}
                                    value={userDetails.password}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`flex w-full justify-center rounded-md  ${
                                    loading ? "bg-indigo-500" : "bg-indigo-600"
                                } px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{" "}
                        <Link
                            href="/signup"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            signup here
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Page;
