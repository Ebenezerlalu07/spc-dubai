
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    ArrowLeft,
    Search,
    UsersRound,
    MapPin,
    Phone,
    Mail,
    X,
    SlidersHorizontal,
    UserRound,
    ChevronDown,
    MapPinned,
    House,
    Grid2X2,
    List,
} from "lucide-react";

// ========================================
// LOCATION COLORS
// ========================================

const locations = [
    {
        id: "ajman",
        name: "Ajman, UAQ",
        color: "#78539B",
        light: "#F2EDF8",
    },
    {
        id: "awir",
        name: "Awir",
        color: "#B7792F",
        light: "#FCF2E7",
    },
    {
        id: "warqa",
        name: "Warqa & Mirdif",
        color: "#36846D",
        light: "#EAF6F0",
    },
    {
        id: "burdubai",
        name: "Bur Dubai",
        subtitle: "Bur Dubai · Karama · Oud Metha · Satwa",
        color: "#BC8844",
        light: "#FBF3E6",
    },
    {
        id: "deira",
        name: "Deira",
        color: "#2587A4",
        light: "#EAF6FA",
    },
    {
        id: "dip",
        name: "D.I.P.",
        color: "#6573BB",
        light: "#EFF0FA",
    },
    {
        id: "jebelali",
        name: "Jebel Ali & Al Barsha",
        color: "#40987C",
        light: "#EAF7F1",
    },
    {
        id: "muhaisnah",
        name: "Muhaisnah",
        color: "#B56781",
        light: "#FBEEF2",
    },
    {
        id: "alnahda",
        name: "Al Nahda",
        color: "#72873E",
        light: "#F1F5E7",
    },
    {
        id: "alquoz",
        name: "Al Quoz",
        color: "#B26B50",
        light: "#FBF0E9",
    },
    {
        id: "qusais",
        name: "Qusais",
        color: "#4975A9",
        light: "#EBF2FA",
    },
    {
        id: "sharjah",
        name: "Sharjah",
        color: "#9B5891",
        light: "#F8EDF6",
    },
] as const;

type LocationId = (typeof locations)[number]["id"];

type Family = {
    id: number;
    name: string;
    location: LocationId;
    area: string;
    phone?: string;
    email?: string;
    uaeAddress?: string;
    indiaAddress?: string;
    family: string[];
    familyImage?: string;
};

// ========================================
// FICTIONAL SAMPLE FAMILIES
// ========================================

const families: Family[] = [
    {
        id: 1,
        name: "Sample Family One",
        location: "ajman",
        area: "Ajman",
        family: ["Family Member A", "Family Member B"],
        familyImage: "/public/images/Ajman1.jpg",
    },
    {
        id: 2,
        name: "Sample Family Two",
        location: "ajman",
        area: "Umm Al Quwain",
        family: ["Family Member A"],
        familyImage: "/families/family-02.jpg",
    },
    {
        id: 3,
        name: "Sample Family Three",
        location: "awir",
        area: "Al Awir",
        family: ["Family Member A", "Family Member B"],
        familyImage: "/families/family-03.jpg",
    },
    {
        id: 4,
        name: "Sample Family Four",
        location: "warqa",
        area: "Al Warqa",
        family: ["Family Member A", "Family Member B"],
        familyImage: "/families/family-04.jpg",
    },
    {
        id: 5,
        name: "Sample Family Five",
        location: "burdubai",
        area: "Karama",
        family: ["Family Member A", "Family Member B"],
        familyImage: "/families/family-05.jpg",
    },
    {
        id: 6,
        name: "Sample Family Six",
        location: "burdubai",
        area: "Oud Metha",
        family: ["Family Member A"],
        familyImage: "/families/family-06.jpg",
    },
    {
        id: 7,
        name: "Sample Family Seven",
        location: "deira",
        area: "Deira",
        family: ["Family Member A", "Family Member B"],
        familyImage: "/families/family-07.jpg",
    },
    {
        id: 8,
        name: "Sample Family Eight",
        location: "dip",
        area: "Dubai Investments Park",
        family: ["Family Member A"],
        familyImage: "/families/family-08.jpg",
    },
    {
        id: 9,
        name: "Sample Family Nine",
        location: "jebelali",
        area: "Al Barsha",
        family: ["Family Member A", "Family Member B"],
        familyImage: "/families/family-09.jpg",
    },
    {
        id: 10,
        name: "Sample Family Ten",
        location: "muhaisnah",
        area: "Muhaisnah",
        family: ["Family Member A"],
        familyImage: "/families/family-10.jpg",
    },
    {
        id: 11,
        name: "Sample Family Eleven",
        location: "alnahda",
        area: "Al Nahda",
        family: ["Family Member A", "Family Member B"],
        familyImage: "/families/family-11.jpg",
    },
    {
        id: 12,
        name: "Sample Family Twelve",
        location: "alquoz",
        area: "Al Quoz",
        family: ["Family Member A"],
        familyImage: "/families/family-12.jpg",
    },
    {
        id: 13,
        name: "Sample Family Thirteen",
        location: "qusais",
        area: "Al Qusais",
        family: ["Family Member A", "Family Member B"],
        familyImage: "/families/family-13.jpg",
    },
    {
        id: 14,
        name: "Sample Family Fourteen",
        location: "sharjah",
        area: "Sharjah",
        family: ["Family Member A", "Family Member B"],
        familyImage: "/families/family-14.jpg",
    },
];

// ========================================
// IMAGE WITH FALLBACK
// ========================================

function FamilyPhoto({
    family,
    className = "",
}: {
    family: Family;
    className?: string;
}) {
    const [failed, setFailed] = useState(false);

    const location = locations.find(
        (item) => item.id === family.location
    )!;

    useEffect(() => {
        setFailed(false);
    }, [family.familyImage]);

    if (!family.familyImage || failed) {
        return (
            <div
                className={`flex h-full w-full flex-col items-center justify-center gap-3 ${className}`}
                style={{ backgroundColor: location.light }}
            >
                <UsersRound
                    size={52}
                    strokeWidth={1.3}
                    style={{ color: location.color }}
                />
                <p
                    className="text-xs font-medium"
                    style={{ color: location.color }}
                >
                    Family Photograph
                </p>
            </div>
        );
    }

    return (
        <Image
            src={family.familyImage}
            alt={`${family.name} family photograph`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className={`object-cover ${className}`}
            onError={() => setFailed(true)}
        />
    );
}

// ========================================
// FAMILY CARD
// ========================================

function FamilyCard({
    family,
    onView,
    view,
}: {
    family: Family;
    onView: (family: Family) => void;
    view: "grid" | "list";
}) {
    const location = locations.find(
        (item) => item.id === family.location
    )!;

    const isList = view === "list";

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className={`group overflow-hidden rounded-[26px] border border-[#e5ebe4] bg-white shadow-[0_6px_30px_rgba(10,50,35,0.045)] transition-shadow duration-300 hover:shadow-[0_20px_55px_rgba(10,50,35,0.11)] ${isList ? "sm:flex" : ""
                }`}
        >
            {/* Family photo */}
            <div
                className={`relative overflow-hidden ${isList
                        ? "h-[230px] sm:h-auto sm:min-h-[230px] sm:w-[35%]"
                        : "h-[240px] sm:h-[260px]"
                    }`}
                style={{ backgroundColor: location.light }}
            >
                <FamilyPhoto
                    family={family}
                    className="transition-transform duration-700 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div
                    className="absolute bottom-4 left-4 flex max-w-[calc(100%-2rem)] items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold text-white shadow-lg"
                    style={{ backgroundColor: location.color }}
                >
                    <MapPin size={13} className="shrink-0" />
                    <span className="truncate">{location.name}</span>
                </div>
            </div>

            {/* Card content */}
            <div
                className={`flex flex-1 flex-col p-5 sm:p-6 ${isList ? "sm:justify-center" : ""
                    }`}
            >
                <h3 className="font-aligra text-[29px] leading-tight text-[#173b30]">
                    {family.name}
                </h3>

                <p className="mt-2 flex items-center gap-2 text-xs text-[#82968a]">
                    <MapPin size={14} />
                    {family.area}, UAE
                </p>

                <div className="my-5 h-px bg-[#e9eee8]" />

                {/* Family member names */}
                <div className="flex items-start gap-3">
                    <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                        style={{
                            backgroundColor: location.light,
                            color: location.color,
                        }}
                    >
                        <UsersRound size={19} />
                    </div>

                    <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#97a79b]">
                            Family Members
                        </p>

                        <p className="mt-1 line-clamp-2 text-sm leading-6 text-[#536a5d]">
                            {family.family.length
                                ? family.family.join(", ")
                                : "No family members listed"}
                        </p>
                    </div>
                </div>

                {/* Button */}
                <button
                    type="button"
                    onClick={() => onView(family)}
                    className="mt-6 flex w-full items-center justify-between rounded-xl px-5 py-3.5 text-sm font-semibold transition-all hover:brightness-95"
                    style={{
                        backgroundColor: location.light,
                        color: location.color,
                    }}
                >
                    View Family Details
                    <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </button>
            </div>
        </motion.article>
    );
}

// ========================================
// FAMILY DETAIL MODAL
// ========================================

function FamilyDetails({
    family,
    onClose,
}: {
    family: Family;
    onClose: () => void;
}) {
    const location = locations.find(
        (item) => item.id === family.location
    )!;

    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
        }

        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onClose]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#061e19]/75 p-3 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={`${family.name} details`}
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 20 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[92dvh] w-full max-w-[650px] overflow-y-auto rounded-[26px] bg-white shadow-2xl"
            >
                {/* Large family image */}
                <div className="relative h-[250px] overflow-hidden sm:h-[330px]">
                    <FamilyPhoto family={family} />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20" />

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close family details"
                        className="absolute right-5 top-5 rounded-full bg-white/95 p-2.5 text-[#173b30] shadow-md transition hover:bg-white"
                    >
                        <X size={20} />
                    </button>

                    <div className="absolute bottom-6 left-6 right-6">
                        <span
                            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white"
                            style={{ backgroundColor: location.color }}
                        >
                            <MapPin size={13} />
                            {location.name}
                        </span>

                        <h2 className="font-aligra mt-3 text-3xl text-white sm:text-4xl">
                            {family.name}
                        </h2>

                        <p className="mt-1 text-sm text-white/80">
                            {family.area}, UAE
                        </p>
                    </div>
                </div>

                {/* Family details */}
                <div className="space-y-7 p-6 sm:p-8">
                    <div>
                        <h3 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#829589]">
                            <UsersRound size={17} />
                            Family Members
                        </h3>

                        <div
                            className="rounded-2xl p-5"
                            style={{ backgroundColor: location.light }}
                        >
                            {family.family.length ? (
                                <div className="space-y-2">
                                    {family.family.map((person, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 text-sm text-[#355246]"
                                        >
                                            <span
                                                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold"
                                                style={{ color: location.color }}
                                            >
                                                {index + 1}
                                            </span>
                                            {person}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-sm text-[#829589]">
                                    No family information added yet.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Contact information */}
                    <div>
                        <h3 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#829589]">
                            <Phone size={17} />
                            Contact Information
                        </h3>

                        <div className="space-y-4">
                            {family.phone && (
                                <a
                                    href={`tel:${family.phone.replace(/[^\d+]/g, "")}`}
                                    className="flex items-center gap-3 text-sm text-[#355246] hover:underline"
                                >
                                    <Phone size={17} style={{ color: location.color }} />
                                    {family.phone}
                                </a>
                            )}

                            {family.email && (
                                <a
                                    href={`mailto:${family.email}`}
                                    className="flex items-center gap-3 break-all text-sm text-[#355246] hover:underline"
                                >
                                    <Mail size={17} style={{ color: location.color }} />
                                    {family.email}
                                </a>
                            )}

                            {!family.phone && !family.email && (
                                <p className="text-sm text-[#89998e]">
                                    Contact details not added yet.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Addresses */}
                    <div>
                        <h3 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#829589]">
                            <MapPinned size={17} />
                            Addresses
                        </h3>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-xl bg-[#f6f8f5] p-4">
                                <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#97a69d]">
                                    Address in UAE
                                </p>
                                <p className="text-sm leading-6 text-[#355246]">
                                    {family.uaeAddress || "Not added yet"}
                                </p>
                            </div>

                            <div className="rounded-xl bg-[#f6f8f5] p-4">
                                <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#97a69d]">
                                    Address in India
                                </p>
                                <p className="text-sm leading-6 text-[#355246]">
                                    {family.indiaAddress || "Not added yet"}
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="w-full rounded-xl bg-[#0b5547] py-3.5 text-sm font-semibold text-white transition hover:bg-[#073e36]"
                    >
                        Close Details
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ========================================
// MAIN DIRECTORY PAGE
// ========================================

export default function DirectoryPage() {
    const [search, setSearch] = useState("");
    const [selectedLocation, setSelectedLocation] =
        useState<LocationId | "all">("all");
    const [selectedFamily, setSelectedFamily] =
        useState<Family | null>(null);
    const [showLocations, setShowLocations] = useState(false);
    const [view, setView] = useState<"grid" | "list">("grid");

    const filteredFamilies = useMemo(() => {
        const query = search.trim().toLowerCase();

        return families.filter((family) => {
            const location = locations.find(
                (item) => item.id === family.location
            )!;

            const matchesLocation =
                selectedLocation === "all" ||
                family.location === selectedLocation;

            const searchableText = [
                family.name,
                family.area,
                location.name,
                "subtitle" in location ? location.subtitle : "",
                family.phone || "",
                family.email || "",
                family.uaeAddress || "",
                family.indiaAddress || "",
                ...family.family,
            ]
                .join(" ")
                .toLowerCase();

            return matchesLocation && searchableText.includes(query);
        });
    }, [search, selectedLocation]);

    const activeLocation =
        selectedLocation === "all"
            ? null
            : locations.find((item) => item.id === selectedLocation);

    function clearFilters() {
        setSearch("");
        setSelectedLocation("all");
    }

    return (
        <main className="min-h-screen bg-[#f7f8f5] text-[#173b30]">

            {/* NAVBAR */}
            <header className="sticky top-0 z-30 border-b border-[#e6ebe5] bg-white/95 backdrop-blur-xl">
                <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">

                    <Link href="/" className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e5efe9]">
                            <UsersRound
                                size={23}
                                className="text-[#0b5547]"
                            />
                        </div>

                        <div>
                            <h1 className="font-aligra text-2xl leading-none">
                                SPC Dubai
                            </h1>
                            <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#8a9c91]">
                                Family Directory
                            </p>
                        </div>
                    </Link>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full border border-[#dce5df] px-4 py-2.5 text-xs font-semibold text-[#0b5547] transition hover:bg-[#edf4ee]"
                    >
                        <ArrowLeft size={16} />
                        <span className="hidden sm:inline">Back to Home</span>
                        <span className="sm:hidden">Home</span>
                    </Link>
                </div>
            </header>

            {/* HERO */}
            <section className="relative overflow-hidden bg-[#073e36] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,#206858_0%,transparent_55%)]" />

                <div className="pointer-events-none absolute -right-32 -top-36 h-96 w-96 rounded-full border border-[#d9b877]/15" />
                <div className="pointer-events-none absolute -bottom-48 -left-24 h-96 w-96 rounded-full border border-white/10" />

                <div className="relative mx-auto max-w-[1320px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65 }}
                    >
                        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#d9b877]">
                            Satwa Pentecostal Church of God
                        </p>

                        <h2 className="font-aligra text-5xl leading-tight sm:text-6xl lg:text-7xl">
                            Family{" "}
                            <span className="text-[#d9b877]">
                                Directory
                            </span>
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                            Stay connected with our church families
                            across Dubai, Sharjah, Ajman and
                            Umm Al Quwain.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/85">
                                <UsersRound size={15} />
                                {families.length} Sample Families
                            </span>

                            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/85">
                                <MapPin size={15} />
                                {locations.length} Locations
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="mx-auto max-w-[1320px] px-5 py-10 sm:px-8 lg:px-10 lg:py-12">

                {/* SEARCH BAR */}
                <div className="mb-8 flex flex-col gap-4 sm:flex-row">
                    <div className="relative flex-1">
                        <Search
                            size={21}
                            className="absolute left-5 top-1/2 -translate-y-1/2 text-[#95a79c]"
                        />

                        <input
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search families, members or locations..."
                            aria-label="Search family directory"
                            className="h-[58px] w-full rounded-2xl border border-[#e0e7df] bg-white pl-14 pr-5 text-sm text-[#173b30] shadow-sm outline-none transition placeholder:text-[#9ca9a0] focus:border-[#0b5547] focus:ring-4 focus:ring-[#0b5547]/5"
                        />
                    </div>

                    <button
                        type="button"
                        onClick={() => setShowLocations(!showLocations)}
                        className="flex h-[58px] items-center justify-center gap-2 rounded-2xl border border-[#e0e7df] bg-white px-6 text-sm font-semibold text-[#355c4a] shadow-sm transition hover:bg-[#f1f5ef]"
                    >
                        <SlidersHorizontal size={18} />
                        Browse Locations
                        <ChevronDown
                            size={17}
                            className={`transition-transform ${showLocations ? "rotate-180" : ""
                                }`}
                        />
                    </button>
                </div>

                {/* LOCATION FILTERS */}
                <div className="mb-10">
                    <div className="mb-5 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-bold">
                                Browse by Location
                            </h3>
                            <p className="mt-1 text-xs text-[#82948a]">
                                Choose your preferred church area
                            </p>
                        </div>

                        {(search || selectedLocation !== "all") && (
                            <button
                                type="button"
                                onClick={clearFilters}
                                className="text-xs font-semibold text-[#0b5547] hover:underline"
                            >
                                Clear Filters
                            </button>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                        <button
                            type="button"
                            onClick={() => setSelectedLocation("all")}
                            className={`rounded-full px-5 py-3 text-xs font-semibold transition ${selectedLocation === "all"
                                    ? "bg-[#0b5547] text-white shadow-md"
                                    : "border border-[#e1e7df] bg-white text-[#577064] hover:bg-[#edf3ed]"
                                }`}
                        >
                            All Locations
                        </button>

                        {locations.map((location) => {
                            const selected = selectedLocation === location.id;

                            return (
                                <button
                                    key={location.id}
                                    type="button"
                                    onClick={() => setSelectedLocation(location.id)}
                                    className="rounded-full border px-4 py-3 text-xs font-semibold transition hover:-translate-y-0.5"
                                    style={{
                                        backgroundColor: selected
                                            ? location.color
                                            : location.light,
                                        color: selected ? "#ffffff" : location.color,
                                        borderColor: selected
                                            ? location.color
                                            : `${location.color}25`,
                                    }}
                                >
                                    {location.name}
                                </button>
                            );
                        })}
                    </div>

                    {/* EXPANDED AREA GRID */}
                    <AnimatePresence>
                        {showLocations && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                                    {locations.map((location) => {
                                        const count = families.filter(
                                            (family) => family.location === location.id
                                        ).length;

                                        return (
                                            <button
                                                key={location.id}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedLocation(location.id);
                                                    setShowLocations(false);
                                                }}
                                                className="rounded-2xl border p-4 text-left transition hover:-translate-y-1"
                                                style={{
                                                    backgroundColor: location.light,
                                                    borderColor: `${location.color}25`,
                                                }}
                                            >
                                                <MapPin
                                                    size={20}
                                                    style={{ color: location.color }}
                                                />

                                                <p
                                                    className="mt-3 text-sm font-bold"
                                                    style={{ color: location.color }}
                                                >
                                                    {location.name}
                                                </p>

                                                <p className="mt-1 text-xs text-[#819288]">
                                                    {count} sample families
                                                </p>
                                            </button>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* RESULT HEADER */}
                <div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-b border-[#e5eae4] pb-5">
                    <div className="flex items-center gap-3">
                        {activeLocation && (
                            <div
                                className="h-12 w-1.5 rounded-full"
                                style={{ backgroundColor: activeLocation.color }}
                            />
                        )}

                        <div>
                            <h3 className="font-aligra text-3xl sm:text-4xl">
                                {activeLocation
                                    ? activeLocation.name
                                    : "All Church Families"}
                            </h3>

                            {activeLocation &&
                                "subtitle" in activeLocation && (
                                    <p className="mt-1 text-xs text-[#82948a]">
                                        {activeLocation.subtitle}
                                    </p>
                                )}
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#71857a]">
                            {filteredFamilies.length} Results
                        </span>

                        {/* GRID / LIST SWITCH */}
                        <div className="flex items-center rounded-xl border border-[#e1e7df] bg-white p-1">
                            <button
                                type="button"
                                onClick={() => setView("grid")}
                                aria-label="Grid view"
                                aria-pressed={view === "grid"}
                                className={`rounded-lg p-2 ${view === "grid"
                                        ? "bg-[#e8f1ea] text-[#0b5547]"
                                        : "text-[#9aaa9e]"
                                    }`}
                            >
                                <Grid2X2 size={17} />
                            </button>

                            <button
                                type="button"
                                onClick={() => setView("list")}
                                aria-label="List view"
                                aria-pressed={view === "list"}
                                className={`rounded-lg p-2 ${view === "list"
                                        ? "bg-[#e8f1ea] text-[#0b5547]"
                                        : "text-[#9aaa9e]"
                                    }`}
                            >
                                <List size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* FAMILY CARDS */}
                {filteredFamilies.length > 0 ? (
                    <motion.div
                        layout
                        className={
                            view === "grid"
                                ? "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
                                : "grid grid-cols-1 gap-5 lg:grid-cols-2"
                        }
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredFamilies.map((family) => (
                                <FamilyCard
                                    key={family.id}
                                    family={family}
                                    onView={setSelectedFamily}
                                    view={view}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <div className="rounded-3xl border border-[#e3e9e1] bg-white px-6 py-20 text-center">
                        <Search size={36} className="mx-auto text-[#a1b0a5]" />

                        <h3 className="mt-5 text-xl font-bold text-[#254638]">
                            No Families Found
                        </h3>

                        <p className="mt-2 text-sm text-[#899a8e]">
                            Try another name or choose a different location.
                        </p>

                        <button
                            type="button"
                            onClick={clearFilters}
                            className="mt-6 rounded-full bg-[#0b5547] px-6 py-3 text-xs font-semibold text-white"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </section>

            {/* FAMILY DETAIL POPUP */}
            <AnimatePresence>
                {selectedFamily && (
                    <FamilyDetails
                        key={selectedFamily.id}
                        family={selectedFamily}
                        onClose={() => setSelectedFamily(null)}
                    />
                )}
            </AnimatePresence>
        </main>
    );
}
