
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    ChevronDown,
    Grid2X2,
    List,
    Mail,
    MapPin,
    MapPinned,
    Phone,
    Search,
    SlidersHorizontal,
    UserRound,
    UsersRound,
    X,
} from "lucide-react";

// ========================================
// LOCATION THEMES
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

type Member = {
    id: number;
    name: string;
    location: LocationId;
    area: string;
    phone?: string;
    residencePhone?: string;
    email?: string;
    uaeAddress?: string;
    indiaAddress?: string;
    family: string[];
    image?: string;
};

// ========================================
// FICTIONAL SAMPLE DIRECTORY DATA
// ========================================

const members: Member[] = [
    {
        id: 1,
        name: "Sherin Mathew",
        location: "ajman",
        area: "Ajman",
        phone: "+971501234567",
        email: "sample1@example.com",
        family: ["Spouse A", "Child A", "Child B"],
        uaeAddress: "Sample address, Ajman, UAE",
        indiaAddress: "Sample address, Kerala, India",
        image: "/images/sherin.jpg",
    },
    {
        id: 2,
        name: "Sample Member Two",
        location: "ajman",
        area: "Umm Al Quwain",
        family: ["Spouse B"],
        image: "/members/member-02.jpg",
    },
    {
        id: 3,
        name: "Sample Member Three",
        location: "awir",
        area: "Al Awir",
        family: ["Spouse C", "Child C"],
        image: "/members/member-03.jpg",
    },
    {
        id: 4,
        name: "Sample Member Four",
        location: "warqa",
        area: "Mirdif",
        family: ["Spouse D", "Child D"],
        image: "/members/member-04.jpg",
    },
    {
        id: 5,
        name: "Sample Member Five",
        location: "burdubai",
        area: "Karama",
        family: ["Spouse E", "Child E"],
        image: "/members/member-05.jpg",
    },
    {
        id: 6,
        name: "Sample Member Six",
        location: "burdubai",
        area: "Oud Metha",
        family: ["Spouse F"],
        image: "/members/member-06.jpg",
    },
    {
        id: 7,
        name: "Sample Member Seven",
        location: "deira",
        area: "Deira",
        family: ["Spouse G", "Child G"],
        image: "/members/member-07.jpg",
    },
    {
        id: 8,
        name: "Sample Member Eight",
        location: "dip",
        area: "Dubai Investments Park",
        family: ["Spouse H"],
        image: "/members/member-08.jpg",
    },
    {
        id: 9,
        name: "Sample Member Nine",
        location: "jebelali",
        area: "Al Barsha",
        family: ["Spouse I", "Child I"],
        image: "/members/member-09.jpg",
    },
    {
        id: 10,
        name: "Sample Member Ten",
        location: "muhaisnah",
        area: "Muhaisnah",
        family: ["Spouse J"],
        image: "/members/member-10.jpg",
    },
    {
        id: 11,
        name: "Sample Member Eleven",
        location: "alnahda",
        area: "Al Nahda",
        family: ["Spouse K", "Child K"],
        image: "/members/member-11.jpg",
    },
    {
        id: 12,
        name: "Sample Member Twelve",
        location: "alquoz",
        area: "Al Quoz",
        family: ["Spouse L"],
        image: "/members/member-12.jpg",
    },
    {
        id: 13,
        name: "Sample Member Thirteen",
        location: "qusais",
        area: "Al Qusais",
        family: ["Spouse M", "Child M"],
        image: "/members/member-13.jpg",
    },
    {
        id: 14,
        name: "Sample Member Fourteen",
        location: "sharjah",
        area: "Sharjah",
        family: ["Spouse N", "Child N"],
        image: "/members/member-14.jpg",
    },
];

// ========================================
// HELPER
// ========================================

function getLocation(id: LocationId) {
    return locations.find((location) => location.id === id)!;
}

// ========================================
// SINGLE PERSON PROFILE PHOTO
// ========================================

function MemberPhoto({
    member,
    className = "",
    sizes = "(max-width: 640px) 100px, 130px",
}: {
    member: Member;
    className?: string;
    sizes?: string;
}) {
    const [failed, setFailed] = useState(false);
    const location = getLocation(member.location);

    useEffect(() => {
        setFailed(false);
    }, [member.image]);

    return (
        <div
            className={`relative h-full w-full overflow-hidden ${className}`}
            style={{ backgroundColor: location.light }}
        >
            {member.image && !failed ? (
                <Image
                    src={member.image}
                    alt={`${member.name} profile photograph`}
                    fill
                    sizes={sizes}
                    className="object-cover object-top"
                    onError={() => setFailed(true)}
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center">
                    <UserRound
                        size={43}
                        strokeWidth={1.3}
                        style={{ color: location.color }}
                    />
                </div>
            )}
        </div>
    );
}

// ========================================
// MEMBER CARD
// ========================================

function MemberCard({
    member,
    onView,
    view,
}: {
    member: Member;
    onView: (member: Member) => void;
    view: "grid" | "list";
}) {
    const location = getLocation(member.location);

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-[#e4eae4] bg-white shadow-[0_5px_24px_rgba(10,50,35,0.045)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(10,50,35,0.12)]"
        >
            {/* Location accent */}
            <div
                className="absolute inset-x-0 top-0 h-1.5"
                style={{ backgroundColor: location.color }}
            />

            <div className="flex flex-1 flex-col p-5 pt-7 sm:p-6 sm:pt-8">
                <div
                    className={`flex items-start gap-4 ${view === "list" ? "sm:gap-6" : ""
                        }`}
                >
                    {/* Person photo */}
                    <div className="h-[110px] w-[90px] shrink-0 overflow-hidden rounded-2xl border border-[#e9ece7] shadow-sm sm:h-[125px] sm:w-[105px]">
                        <MemberPhoto member={member} />
                    </div>

                    {/* Basic information */}
                    <div className="min-w-0 flex-1">
                        <h3 className="font-aligra text-[25px] leading-tight text-[#173b30] sm:text-[29px]">
                            {member.name}
                        </h3>

                        <p className="mt-2 flex items-center gap-1.5 text-xs text-[#809387]">
                            <MapPin size={14} className="shrink-0" />
                            <span className="truncate">{member.area}</span>
                        </p>

                        <span
                            className="mt-3 inline-flex max-w-full items-center rounded-full px-3 py-1.5 text-[10px] font-semibold"
                            style={{
                                backgroundColor: location.light,
                                color: location.color,
                            }}
                        >
                            <span className="truncate">{location.name}</span>
                        </span>

                        {member.phone && (
                            <a
                                href={`tel:${member.phone.replace(/[^\d+]/g, "")}`}
                                className="mt-3 flex items-center gap-2 text-xs text-[#526b5c] hover:underline"
                            >
                                <Phone size={13} className="shrink-0" />
                                {member.phone}
                            </a>
                        )}
                    </div>
                </div>

                <div className="my-5 h-px bg-[#e9eee8]" />

                {/* Family list */}
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

                    <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#97a79b]">
                            Family Members
                        </p>

                        <p className="mt-1 text-sm leading-6 text-[#536a5d]">
                            {member.family.length > 0
                                ? member.family.join(", ")
                                : "No family members listed"}
                        </p>
                    </div>
                </div>

                {/* Contact details */}
                {member.email && (
                    <div className="mt-4 flex min-w-0 items-center gap-2 text-xs text-[#70887a]">
                        <Mail size={14} className="shrink-0" />
                        <span className="truncate">{member.email}</span>
                    </div>
                )}

                {/* View details button */}
                <button
                    type="button"
                    onClick={() => onView(member)}
                    className="mt-auto flex w-full items-center justify-between rounded-xl px-5 py-3.5 pt-4 text-sm font-semibold transition hover:brightness-95"
                    style={{
                        backgroundColor: location.light,
                        color: location.color,
                        marginTop: "24px",
                    }}
                >
                    View Member Details

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
// MEMBER DETAILS MODAL
// ========================================

function MemberDetails({
    member,
    onClose,
}: {
    member: Member;
    onClose: () => void;
}) {
    const location = getLocation(member.location);

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        function handleEscape(event: KeyboardEvent) {
            if (event.key === "Escape") onClose();
        }

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleEscape);
        };
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
                aria-labelledby="member-detail-heading"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(event) => event.stopPropagation()}
                className="max-h-[92dvh] w-full max-w-[650px] overflow-y-auto rounded-[28px] bg-white shadow-2xl"
            >
                {/* Modal header */}
                <div
                    className="relative flex items-center gap-5 px-5 py-8 sm:px-8"
                    style={{ backgroundColor: location.light }}
                >
                    <div className="h-[135px] w-[105px] shrink-0 overflow-hidden rounded-2xl border border-white/70 bg-white shadow-sm sm:h-[155px] sm:w-[125px]">
                        <MemberPhoto member={member} />
                    </div>

                    <div className="min-w-0 flex-1">
                        <span
                            className="inline-flex rounded-full bg-white/70 px-3 py-1.5 text-[10px] font-semibold"
                            style={{ color: location.color }}
                        >
                            {location.name}
                        </span>

                        <h2
                            id="member-detail-heading"
                            className="font-aligra mt-3 text-2xl leading-tight text-[#173b30] sm:text-4xl"
                        >
                            {member.name}
                        </h2>

                        <p className="mt-2 flex items-center gap-1.5 text-xs text-[#708378]">
                            <MapPin size={14} />
                            {member.area}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close member details"
                        className="absolute right-3 top-3 rounded-full bg-white p-2 text-[#173b30] shadow-sm transition hover:bg-[#f7f8f5]"
                    >
                        <X size={19} />
                    </button>
                </div>

                {/* Modal content */}
                <div className="space-y-7 p-6 sm:p-8">
                    {/* Family members */}
                    <section>
                        <h3 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#829589]">
                            <UsersRound size={17} />
                            Family Members
                        </h3>

                        <div
                            className="rounded-2xl p-5"
                            style={{ backgroundColor: location.light }}
                        >
                            {member.family.length > 0 ? (
                                <div className="space-y-3">
                                    {member.family.map((person, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 text-sm text-[#355246]"
                                        >
                                            <span
                                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold"
                                                style={{ color: location.color }}
                                            >
                                                {index + 1}
                                            </span>

                                            <span>{person}</span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-sm text-[#819288]">
                                    No family information added yet.
                                </p>
                            )}
                        </div>
                    </section>

                    {/* Contact details */}
                    <section>
                        <h3 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#829589]">
                            <Phone size={17} />
                            Contact Information
                        </h3>

                        <div className="space-y-4">
                            {member.phone && (
                                <a
                                    href={`tel:${member.phone.replace(/[^\d+]/g, "")}`}
                                    className="flex items-center gap-3 text-sm text-[#355246] hover:underline"
                                >
                                    <Phone
                                        size={17}
                                        style={{ color: location.color }}
                                    />
                                    {member.phone}
                                </a>
                            )}

                            {member.residencePhone && (
                                <div className="flex items-center gap-3 text-sm text-[#355246]">
                                    <Phone
                                        size={17}
                                        style={{ color: location.color }}
                                    />
                                    Residence: {member.residencePhone}
                                </div>
                            )}

                            {member.email && (
                                <a
                                    href={`mailto:${member.email}`}
                                    className="flex items-center gap-3 break-all text-sm text-[#355246] hover:underline"
                                >
                                    <Mail
                                        size={17}
                                        style={{ color: location.color }}
                                    />
                                    {member.email}
                                </a>
                            )}

                            {!member.phone &&
                                !member.residencePhone &&
                                !member.email && (
                                    <p className="text-sm text-[#89998e]">
                                        Contact details not added yet.
                                    </p>
                                )}
                        </div>
                    </section>

                    {/* UAE / India addresses */}
                    <section>
                        <h3 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#829589]">
                            <MapPinned size={17} />
                            Addresses
                        </h3>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl bg-[#f6f8f5] p-5">
                                <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#97a69d]">
                                    Address in UAE
                                </p>

                                <p className="text-sm leading-6 text-[#355246]">
                                    {member.uaeAddress || "Not added yet"}
                                </p>
                            </div>

                            <div className="rounded-2xl bg-[#f6f8f5] p-5">
                                <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#97a69d]">
                                    Address in India
                                </p>

                                <p className="text-sm leading-6 text-[#355246]">
                                    {member.indiaAddress || "Not added yet"}
                                </p>
                            </div>
                        </div>
                    </section>

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

    const [selectedMember, setSelectedMember] =
        useState<Member | null>(null);

    const [showLocations, setShowLocations] = useState(false);
    const [view, setView] = useState<"grid" | "list">("grid");

    const filteredMembers = useMemo(() => {
        const query = search.trim().toLowerCase();

        return members.filter((member) => {
            const location = getLocation(member.location);

            const matchesLocation =
                selectedLocation === "all" ||
                member.location === selectedLocation;

            const searchableText = [
                member.name,
                member.area,
                location.name,
                "subtitle" in location ? location.subtitle : "",
                member.phone || "",
                member.email || "",
                member.uaeAddress || "",
                member.indiaAddress || "",
                ...member.family,
            ]
                .join(" ")
                .toLowerCase();

            return matchesLocation && searchableText.includes(query);
        });
    }, [search, selectedLocation]);

    const activeLocation =
        selectedLocation === "all"
            ? null
            : getLocation(selectedLocation);

    function clearFilters() {
        setSearch("");
        setSelectedLocation("all");
    }

    return (
        <main className="min-h-screen bg-[#f7f8f5] text-[#173b30]">


            {/* Hero */}
            <section className="relative overflow-hidden bg-[#073e36] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,#206858_0%,transparent_55%)]" />

                <div className="pointer-events-none absolute -right-32 -top-36 h-96 w-96 rounded-full border border-[#d9b877]/15" />

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
                            Member{" "}
                            <span className="text-[#d9b877]">
                                Directory
                            </span>
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                            Find and connect with our church families
                            across Dubai, Sharjah, Ajman and
                            Umm Al Quwain.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/85">
                                <UsersRound size={15} />
                                {members.length} Sample Members
                            </span>

                            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/85">
                                <MapPin size={15} />
                                {locations.length} Locations
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main content */}
            <section className="mx-auto max-w-[1320px] px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
                {/* Search bar */}
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
                            placeholder="Search members, families or locations..."
                            aria-label="Search member directory"
                            className="h-[58px] w-full rounded-2xl border border-[#e0e7df] bg-white pl-14 pr-5 text-sm text-[#173b30] shadow-sm outline-none transition placeholder:text-[#9ca9a0] focus:border-[#0b5547] focus:ring-4 focus:ring-[#0b5547]/5"
                        />
                    </div>

                    <button
                        type="button"
                        onClick={() => setShowLocations(!showLocations)}
                        aria-expanded={showLocations}
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

                {/* Location filters */}
                <div className="mb-10">
                    <div className="mb-5 flex items-center justify-between gap-3">
                        <div>
                            <h3 className="text-lg font-bold">
                                Browse by Location
                            </h3>

                            <p className="mt-1 text-xs text-[#82948a]">
                                Select an area to view its members
                            </p>
                        </div>

                        {(search || selectedLocation !== "all") && (
                            <button
                                type="button"
                                onClick={clearFilters}
                                className="shrink-0 text-xs font-semibold text-[#0b5547] hover:underline"
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
                            const selected =
                                selectedLocation === location.id;

                            return (
                                <button
                                    key={location.id}
                                    type="button"
                                    onClick={() =>
                                        setSelectedLocation(location.id)
                                    }
                                    aria-pressed={selected}
                                    className="rounded-full border px-4 py-3 text-xs font-semibold transition hover:-translate-y-0.5"
                                    style={{
                                        backgroundColor: selected
                                            ? location.color
                                            : location.light,
                                        color: selected
                                            ? "#ffffff"
                                            : location.color,
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

                    {/* Expanded location grid */}
                    <AnimatePresence>
                        {showLocations && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{
                                    opacity: 1,
                                    height: "auto",
                                }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                                    {locations.map((location) => {
                                        const count = members.filter(
                                            (member) =>
                                                member.location === location.id
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
                                                    {count} sample members
                                                </p>
                                            </button>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Results header */}
                <div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-b border-[#e5eae4] pb-5">
                    <div className="flex items-center gap-3">
                        {activeLocation && (
                            <div
                                className="h-12 w-1.5 rounded-full"
                                style={{
                                    backgroundColor: activeLocation.color,
                                }}
                            />
                        )}

                        <div>
                            <h3 className="font-aligra text-3xl sm:text-4xl">
                                {activeLocation
                                    ? activeLocation.name
                                    : "All Church Members"}
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
                            {filteredMembers.length} Results
                        </span>

                        {/* Grid/List toggle */}
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

                {/* Member cards */}
                {filteredMembers.length > 0 ? (
                    <motion.div
                        layout
                        className={
                            view === "grid"
                                ? "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
                                : "grid grid-cols-1 gap-5 lg:grid-cols-2"
                        }
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredMembers.map((member) => (
                                <MemberCard
                                    key={member.id}
                                    member={member}
                                    onView={setSelectedMember}
                                    view={view}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <div className="rounded-3xl border border-[#e3e9e1] bg-white px-6 py-20 text-center">
                        <Search
                            size={36}
                            className="mx-auto text-[#a1b0a5]"
                        />

                        <h3 className="mt-5 text-xl font-bold text-[#254638]">
                            No Members Found
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

            {/* Member details popup */}
            <AnimatePresence>
                {selectedMember && (
                    <MemberDetails
                        key={selectedMember.id}
                        member={selectedMember}
                        onClose={() => setSelectedMember(null)}
                    />
                )}
            </AnimatePresence>
        </main>
    );
}
