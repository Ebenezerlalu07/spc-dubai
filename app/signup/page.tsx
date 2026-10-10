
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    Eye,
    EyeOff,
    LockKeyhole,
    Mail,
    ShieldCheck,
    UserRound,
    Check,
} from "lucide-react";

export default function SignupPage() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [error, setError] = useState("");

    function handleSignup(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");

        if (name.trim().length < 2) {
            setError("Please enter your full name.");
            return;
        }

        if (password.length < 6) {
            setError("Password must contain at least 6 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (!agreeTerms) {
            setError("Please accept the terms to continue.");
            return;
        }

        // Frontend demo only
        router.push("/directory");
    }

    function handleGoogleSignup() {
        // Google authentication will be connected later
        router.push("/directory");
    }

    const inputClass =
        "h-[54px] w-full rounded-xl border border-[#dce5df] bg-white pl-12 pr-12 text-sm text-[#173b30] outline-none transition-all placeholder:text-[#a0aea6] focus:border-[#0b5547] focus:ring-4 focus:ring-[#0b5547]/5";

    return (
        <main className="min-h-screen bg-[#fafaf8] lg:h-screen lg:overflow-hidden">
            <div className="flex min-h-screen flex-col lg:h-full lg:flex-row">

                {/* LEFT SIDE - CHURCH IMAGE */}
                <section className="relative isolate flex min-h-[300px] flex-col justify-between overflow-hidden bg-[#062e29] p-7 text-white sm:min-h-[400px] sm:p-10 lg:min-h-0 lg:w-[52%] lg:p-12 xl:p-16">

                    {/* Background Image */}
                    <div
                        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: "url('/images/login1.jpg')",
                        }}
                    />

                    {/* Dark Green Overlay */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#031b19]/70 via-[#062e29]/45 to-[#031b19]/95" />

                    {/* Church Branding */}
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex items-center gap-3"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d9b877]/50 bg-white/10 backdrop-blur-md">
                            <svg
                                viewBox="0 0 64 64"
                                className="h-7 w-7 text-[#d9b877]"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M32 5V47M19 19H45"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M12 45Q22 39 32 45Q42 39 52 45V54Q42 48 32 54Q22 48 12 54V45Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div>
                            <h2 className="font-aligra text-2xl leading-none">
                                SPC Dubai
                            </h2>
                            <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/70">
                                Church Member Directory
                            </p>
                        </div>
                    </motion.div>

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="max-w-xl py-8 lg:py-0"
                    >
                        <div className="mb-6 hidden h-px w-16 bg-[#d9b877] sm:block" />

                        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-[#e3c994] sm:text-xs">
                            Become Part of Our Family
                        </p>

                        <h1 className="font-aligra text-4xl leading-[1.1] sm:text-5xl lg:text-[clamp(3rem,5vw,5rem)]">
                            Together in Faith.
                            <span className="block text-[#e3c994]">
                                United in Love.
                            </span>
                        </h1>

                        <p className="mt-5 hidden max-w-md text-sm leading-7 text-white/75 sm:block">
                            Join the SPC Dubai community to stay connected
                            with our church family, celebrate together,
                            and strengthen our bonds through faith.
                        </p>

                        <div className="mt-8 hidden border-l-2 border-[#d9b877] pl-5 lg:block">
                            <p className="font-aligra text-xl leading-relaxed text-white/90">
                                &ldquo;For where two or three gather in my
                                name, there am I with them.&rdquo;
                            </p>
                            <p className="mt-3 text-xs font-semibold tracking-widest text-[#e3c994]">
                                MATTHEW 18:20
                            </p>
                        </div>
                    </motion.div>

                    {/* Left Footer */}
                    <div className="hidden items-center justify-between gap-4 text-xs text-white/50 lg:flex">
                        <span>Satwa Pentecostal Church of God</span>
                        <span>Dubai, UAE</span>
                    </div>
                </section>

                {/* RIGHT SIDE - SIGN UP FORM */}
                <section className="flex flex-1 flex-col bg-[#fafaf8] px-6 py-9 sm:px-12 lg:w-[48%] lg:overflow-y-auto lg:px-12 lg:py-10 xl:px-20">

                    {/* Top Navigation */}
                    <div className="flex items-center justify-between gap-4">
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-2 text-xs font-medium text-[#698077] transition hover:text-[#073e36]"
                        >
                            <ArrowLeft
                                size={16}
                                className="transition-transform group-hover:-translate-x-1"
                            />
                            Back to Home
                        </Link>

                        <p className="text-xs text-[#698077]">
                            Already a member?{" "}
                            <Link
                                href="/login"
                                className="font-bold text-[#0b5547] hover:underline"
                            >
                                Sign In
                            </Link>
                        </p>
                    </div>

                    {/* Signup Form Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="mx-auto flex w-full max-w-[410px] flex-1 flex-col justify-center py-10"
                    >
                        {/* Form Heading */}
                        <div className="mb-8">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f1ed] text-[#0b5547]">
                                <UserRound size={23} strokeWidth={1.7} />
                            </div>

                            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b08c55]">
                                Join SPC Dubai
                            </p>

                            <h2 className="font-aligra text-[42px] leading-tight text-[#073e36] sm:text-5xl">
                                Create your account
                            </h2>

                            <p className="mt-3 text-sm leading-relaxed text-[#7a8d84]">
                                Complete the details below to join our
                                SPC Dubai Church Member Directory.
                            </p>
                        </div>

                        {/* Signup Form */}
                        <form onSubmit={handleSignup} className="space-y-4">

                            {/* Full Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-[13px] font-semibold text-[#27483e]"
                                >
                                    Full Name
                                </label>

                                <div className="relative">
                                    <UserRound
                                        size={19}
                                        strokeWidth={1.7}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#93a59c]"
                                    />

                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        minLength={2}
                                        autoComplete="name"
                                        placeholder="Enter your full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-[13px] font-semibold text-[#27483e]"
                                >
                                    Email Address
                                </label>

                                <div className="relative">
                                    <Mail
                                        size={19}
                                        strokeWidth={1.7}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#93a59c]"
                                    />

                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-[13px] font-semibold text-[#27483e]"
                                >
                                    Password
                                </label>

                                <div className="relative">
                                    <LockKeyhole
                                        size={19}
                                        strokeWidth={1.7}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#93a59c]"
                                    />

                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        minLength={6}
                                        autoComplete="new-password"
                                        placeholder="Create a password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className={inputClass}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label={
                                            showPassword ? "Hide password" : "Show password"
                                        }
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#93a59c] transition hover:text-[#0b5547]"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={19} />
                                        ) : (
                                            <Eye size={19} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="mb-2 block text-[13px] font-semibold text-[#27483e]"
                                >
                                    Confirm Password
                                </label>

                                <div className="relative">
                                    <LockKeyhole
                                        size={19}
                                        strokeWidth={1.7}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#93a59c]"
                                    />

                                    <input
                                        id="confirmPassword"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        minLength={6}
                                        autoComplete="new-password"
                                        placeholder="Confirm your password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            {/* Terms checkbox */}
                            <label className="flex cursor-pointer items-start gap-3 pt-1">
                                <input
                                    type="checkbox"
                                    checked={agreeTerms}
                                    onChange={(e) => setAgreeTerms(e.target.checked)}
                                    required
                                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#0b5547]"
                                />

                                <span className="text-xs leading-5 text-[#698077]">
                                    I agree to the community guidelines and
                                    the responsible use of church directory information.
                                </span>
                            </label>

                            {/* Error Message */}
                            {error && (
                                <p
                                    role="alert"
                                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-600"
                                >
                                    {error}
                                </p>
                            )}

                            {/* Signup Button */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.015 }}
                                whileTap={{ scale: 0.985 }}
                                className="group flex h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-[#0b5547] text-sm font-semibold text-white shadow-lg shadow-[#0b5547]/15 transition-colors hover:bg-[#073e36]"
                            >
                                Create Account
                                <ArrowRight
                                    size={19}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </motion.button>
                        </form>

                        {/* Divider */}
                        <div className="my-6 flex items-center gap-4">
                            <div className="h-px flex-1 bg-[#e1e8e3]" />
                            <span className="text-xs text-[#98a8a0]">
                                or continue with
                            </span>
                            <div className="h-px flex-1 bg-[#e1e8e3]" />
                        </div>

                        {/* Google Signup - Demo */}
                        <button
                            type="button"
                            onClick={handleGoogleSignup}
                            className="flex h-[54px] w-full items-center justify-center gap-3 rounded-xl border border-[#dce5df] bg-white text-sm font-semibold text-[#27483e] transition hover:border-[#a4c0b0] hover:bg-[#f6faf7]"
                        >
                            <svg
                                width="21"
                                height="21"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                    fill="#EA4335"
                                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                                />
                                <path
                                    fill="#4285F4"
                                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.25 5.48-4.76 7.18l7.73 6C44.42 38.03 46.98 31.88 46.98 24.55z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19C6.51 13.72 3.75 18.56 3.75 24s2.76 10.28 6.78 13.41l7.97-6.19A14.4 14.4 0 0 1 10.53 28.59z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M24 48c6.48 0 11.92-2.13 15.89-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                                />
                            </svg>
                            Continue with Google
                        </button>

                        {/* Account Switch */}
                        <p className="mt-7 text-center text-sm text-[#698077]">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="font-semibold text-[#0b5547] hover:underline"
                            >
                                Sign In
                            </Link>
                        </p>

                        {/* Security Note */}
                        <div className="mt-7 flex items-center justify-center gap-2 text-[#9aa9a1]">
                            <ShieldCheck size={15} />
                            <p className="text-[11px]">
                                SPC Dubai · Member Registration
                            </p>
                        </div>
                    </motion.div>

                    {/* Footer */}
                    <div className="text-center text-[11px] text-[#a2afa7] lg:text-left">
                        © SPC Dubai. All rights reserved.
                    </div>
                </section>
            </div>
        </main>
    );
}
