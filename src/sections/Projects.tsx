import coverKoperasi from "@/assets/images/cover_koperasi.png";
import coverRental from "@/assets/images/cover_rental.jpg";
import arsitekturArbitrans from "@/assets/images/arsitektur_arbitrans.jpg";
import arsitekturBackendPng from "@/assets/images/arsitekture-backend.png";
import erdDesign from "@/assets/images/erd-design.png";
import dashboardKoperasi from "@/assets/images/dashboard_koperasi.png";
import pegawaiKoperasi from "@/assets/images/pegawai_koperasi.png";
import keanggotaanKoperasi from "@/assets/images/keanggotaan koperasi.png";
import transaksiKoperasi from "@/assets/images/transaksi_koperasi.png";
import laporanKeuanganKoperasi from "@/assets/images/laporanKeuangan_koperasi.png";
import auditTrail from "@/assets/images/audit_koperasi.png";
import settings from "@/assets/images/Pengaturan_koperasi.png";
import rentalDashboardAdmin from "@/assets/images/Rental_dashboardAdmin.png";
import rentalDetailKendaraan from "@/assets/images/Rental_DetailKendaraan.png";
import rentalFormSewa from "@/assets/images/Rental_formSewa.png";
import rentalJadwalSewa from "@/assets/images/Rental_jadwalSewa.png";
import rentalKendaraanManagement from "@/assets/images/Rental_KendaraanManagment.png";
import rentalSearchKendaraan from "@/assets/images/Rental_SearchKendaraan.png";
import rentalSewaManagement from "@/assets/images/Rental_sewamanagment.png";
import { SectionHeader } from "@/components/SeactionHeader";
import { ProjectCard, type Project } from "@/components/ProjectCard";

const portfolioProjects: Project[] = [
  {
    title: "Koperasi Financial Information System  ",
    organization: "KSP PRIMKOPPABRI Kusuma Bangsa",
    period: "Jan - Apr 2026",
    role: "Backend Engineer",
    context:
      "Reduced financial reporting time from 2–3 days to real-time by building a centralized backend system for cooperative financial operations.",
    problem:
      "The cooperative relied on manual and fragmented financial recording processes, leading to duplicate data entry, delayed reporting, and error-prone reconciliation. Financial reports required 2–3 days to complete, limiting real-time decision making.",
    approach:
      "Conducted field observations and stakeholder interviews to map real workflows, then translated them into structured functional and non-functional requirements. Designed system models using UML and ERD to align business processes with system behavior before implementation.",
    architecture:
      "Designed and implemented a modular monolith architecture using NestJS with Controller-Service-Repository layers. PostgreSQL and Prisma handle data persistence, Redis optimizes performance through caching, and MinIO manages document storage. Implemented JWT-based authentication, role-based access control (RBAC), and audit logging to ensure system security and traceability.",
    architectureMedia: [
      {
        label: "Architecture Diagram",
        caption:
          "High-level system architecture showing the NestJS modular monolith, persistence layer, cache, and object storage flow.",
        src: arsitekturBackendPng,
      },
      {
        label: "ERD",
        caption:
          "Entity-relationship model for cooperative members, savings, loans, transactions, and audit records.",
        src: erdDesign,
      },
    ],
    features: [
      "Authentication and authorization with JWT and RBAC",
      "Employee and customer management",
      "Savings and loan lifecycle management",
      "Transaction processing with automated calculations",
      "Real-time financial reporting",
      "Dashboard analytics for management",
      "Audit trail for sensitive actions",
      "System configuration and role policies",
    ],
    keyImpact: [
      "Reduced reporting time from 2–3 days to real-time",
      "Eliminated duplicate data entry",
      "Minimized human error through automation",
    ],
    impact: [
      "Reduced reporting time from 2–3 days to real-time",
      "Eliminated duplicate data entry through centralized workflows",
      "Minimized human error via automated financial calculations",
      "Improved accountability with RBAC and audit trails",
      "Achieved high reliability with 179 black-box and 153 integration tests (100% pass rate)",
    ],
    techStack: [
      "NestJS (Node.js)",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "MinIO (Object Storage)",
      "JWT Authentication",
      "RBAC Authorization",
      "REST API",
      "Nginx (Deployment)",
    ],
    uiPreview: [
      {
        label: "Dashboard Overview",
        caption:
          "A real-time overview of financial performance, key metrics, and recent activities to support quick monitoring and decision-making.",
        src: dashboardKoperasi,
      },
      {
        label: "Employee & Member Management",
        caption:
          "Centralized management of staff and member data, including role assignment, access control, and streamlined data operations.",
        src: pegawaiKoperasi,
      },
      {
        label: "Member Savings",
        caption:
          "Efficient savings management with structured input, automated calculations, and clear tracking of member balances.",
        src: keanggotaanKoperasi,
      },
      {
        label: "Transaction Processing",
        caption:
          "End-to-end transaction handling with real-time updates, validation, and automated financial computations.",
        src: transaksiKoperasi,
      },
      {
        label: "Financial Reports",
        caption:
          "Comprehensive financial reporting with real-time data visualization to support transparency and informed decision-making.",
        src: laporanKeuanganKoperasi,
      },
      {
        label: "Audit Trail",
        caption:
          "Detailed activity logs that track system changes and user actions to ensure accountability and data integrity.",
        src: auditTrail,
      },
      {
        label: "Settings",
        caption:
          "Configurable system settings for managing application preferences, user roles, and operational parameters.",
        src: settings,
      },
    ],
    links: [
      {
        label: "Live Demo Website",
        url: "https://ksp-primkoppabri-kusuma-bangsa-app.vercel.app/",
      },
      {
        label:
          "Document Spesifikasi dan Perancangan Sistem Koperasi Simpan Pinjam",
        url: "https://drive.google.com/file/d/1S2qzQNI7V41iE1PrpxPqPGS38P1jvs9E/view?usp=sharing",
      },
      {
        label: "Backend Repository",
        url: "https://github.com/Yogihafidh/BE-Sistem-Informasi-Koperasi-Kusuma-Bangsa.git",
      },
      {
        label: "Frontend Repository",
        url: "https://github.com/Yogihafidh/FE-Sistem-Informasi-Koperasi-Kusuma-Bangsa.git",
      },
    ],
    media: [coverKoperasi],
  },
  {
    title: "Vehicle Rental Management Platform",
    organization: "PT ARBITRANS",
    period: "Aug 2025 - Dec 2025",
    role: "Fullstack Developer",

    context:
      "Transformed a manual vehicle rental process (WhatsApp-based booking and handwritten records) into a structured web-based system to improve booking efficiency and operational visibility.",

    keyImpact: [
      "Replaced manual booking and record-keeping with a centralized digital system",
      "Improved customer accessibility through an online booking interface",
      "Reduced dependency on manual coordination between staff and customers",
      "Increased transparency in vehicle availability, pricing, and booking status",
    ],

    problem:
      "The rental process relied entirely on WhatsApp communication and manual record-keeping, making booking tracking inconsistent, slowing customer response time, and limiting operational visibility for staff.",

    approach:
      "Designed a dual-application system consisting of a customer-facing booking platform and an internal admin dashboard. Mapped user and staff workflows to ensure a seamless booking experience while aligning with existing business processes.",

    architecture:
      "Built a full-stack application using Next.js, React, and Tailwind CSS for the frontend. Supabase (PostgreSQL and Auth) was used to manage backend services, ensuring centralized data management, authentication, and consistent data flow across both user and admin applications.",
    architectureMedia: [
      {
        label: "Architecture Diagram",
        caption:
          "System architecture illustrating the interaction between the customer-facing web application, admin dashboard, and Supabase backend. It highlights how booking data flows from user input into a centralized PostgreSQL database, with authentication and data management handled by Supabase, while WhatsApp integration maintains the real-world communication workflow.",
        src: arsitekturArbitrans,
      },
    ],

    features: [
      "Vehicle catalog with detailed specifications",
      "Booking flow integrated with WhatsApp for customer communication",
      "Admin dashboard for managing vehicles and booking data",
      "Invoice generation and booking status tracking",
      "Rental analytics and operational reporting",
    ],

    impact: [
      "Replaced manual booking and record-keeping with a structured digital system",
      "Improved customer accessibility through an online booking interface",
      "Reduced dependency on manual coordination between staff and customers",
      "Increased transparency in vehicle availability, pricing, and booking status",
    ],

    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "WhatsApp API",
    ],

    uiPreview: [
      {
        label: "Customer Vehicle Search",
        caption:
          "Search and filter available vehicles with clear pricing and specs to speed up discovery.",
        src: rentalSearchKendaraan,
      },
      {
        label: "Vehicle Detail",
        caption:
          "Detailed vehicle profile with photos, features, and rental terms before booking.",
        src: rentalDetailKendaraan,
      },
      {
        label: "Rental Booking Form",
        caption:
          "Structured booking form to capture rental dates, customer data, and requirements.",
        src: rentalFormSewa,
      },
      {
        label: "Rental Schedule",
        caption:
          "Calendar-style schedule to track availability and prevent overlapping bookings.",
        src: rentalJadwalSewa,
      },
      {
        label: "Admin Dashboard",
        caption:
          "Operational overview for bookings, revenue, and vehicle status in one place.",
        src: rentalDashboardAdmin,
      },
      {
        label: "Vehicle Management",
        caption:
          "Admin interface to manage vehicle inventory, pricing, and availability.",
        src: rentalKendaraanManagement,
      },
      {
        label: "Rental Management",
        caption:
          "Centralized booking management with status updates and invoice tracking.",
        src: rentalSewaManagement,
      },
    ],

    links: [
      { label: "View Live Website User", url: "https://arbitrans.site/" },
      {
        label: "View Live Website Admin",
        url: "https://arbitrans-admin.vercel.app/login",
      },
      {
        label: "Document SRS",
        url: "https://drive.google.com/file/d/1uDkBsyWNsDFhuFG7KzSL3n941pCZyXv8/view?usp=drive_link",
      },
      {
        label: "Document SDD",
        url: "https://drive.google.com/file/d/1rnwfxmoMRlIVfu2de3zA8-KeXOmkgje8/view?usp=sharing",
      },
      {
        label: "Repository Admin",
        url: "https://github.com/Yogihafidh/Website-Admin-Sewa-Kendaraan-ARBITRANS.git",
      },
      {
        label: "Repository User",
        url: "https://github.com/Yogihafidh/Website-Sewa-Kendaraan-ARBITRANS.git",
      },
    ],

    media: [coverRental],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="container text-center section-rhythm">
      <SectionHeader
        eyebrow="Case Study"
        title="Featured Engineering Work"
        description="Real-world systems I built to solve operational problems, focusing on scalability, architecture, and measurable impact."
      />

      <div className="flex flex-col gap-10 text-left">
        {portfolioProjects.map((project, projectIndex) => (
          <ProjectCard
            project={project}
            projectIndex={projectIndex}
            key={project.title}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-3">
        <a
          href="https://github.com/Yogihafidh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-fit font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 px-3 md:px-6 py-2 md:py-3 rounded-full cursor-pointer">
            Explore GitHub Repository ↗
          </button>
        </a>
        <a
          href="https://www.behance.net/yogihafidh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-fit font-semibold border-2 border-gray-300 hover:bg-gray-200 px-3 md:px-6 py-2 md:py-3 rounded-full cursor-pointer">
            Design Thinking & Prototypes ↗
          </button>
        </a>
      </div>
    </section>
  );
};
