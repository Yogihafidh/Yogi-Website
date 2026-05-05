"use client";

import { SectionHeader } from "@/components/SeactionHeader";

const articles = [
  {
    category: "SYSTEM DESIGN",
    title: "From Manual Process to Real-Time System",
    description:
      "How I transformed a cooperative financial workflow into a scalable backend system using structured system design.",
    tags: ["Engineering Mindset", "Architecture"],
    link: "https://medium.com/@hafidhyogi/how-i-redesigned-a-broken-financial-workflow-into-a-scalable-backend-system-79e58a88c1cd",
  },
  {
    category: "SYSTEM DESIGN",
    title:
      "From Requirements to Architecture: Designing Scalable Backend Systems",
    description:
      "How I translate business requirements into scalable backend architecture using modular design, clean separation of concerns, and system constraints.",
    tags: [
      "System Design",
      "Backend",
      "Architecture",
      "Scalability",
      "Clean Code",
    ],
    link: "https://medium.com/@hafidhyogi/from-requirements-to-architecture-designing-scalable-backend-systems-371b58fb0859",
  },
  {
    category: "PRODUCT THINKING",
    title: "Product Thinking for Engineers",
    description:
      "How understanding user needs influences system design and improves real-world usability.",
    tags: ["UX", "Product", "Engineering"],
    link: "https://medium.com/@hafidhyogi/product-thinking-for-engineers-pelajaran-yang-mengubah-cara-saya-melihat-software-6822d2574653",
  },
];

export const EngineeringThoughtsSection = () => {
  return (
    <section
      id="engineering-thoughts"
      className="container text-center section-rhythm"
    >
      <SectionHeader
        eyebrow="Proof I Think"
        title="Engineering Thoughts"
        description="I write about software engineering, system design, and product thinking—sharing how I approach solving real-world problems and building scalable systems."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {articles.map((article, index) => (
          <a
            key={article.title}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-2xl border p-6 cursor-pointer text-left transition-all duration-300 ease-in-out ${
              index === 0
                ? "lg:col-span-2 md:col-span-2 border-gray-300 bg-gradient-to-br from-gray-50 to-white hover:shadow-xl hover:-translate-y-2"
                : "border-gray-200 bg-white hover:shadow-lg hover:-translate-y-1"
            }`}
          >
            <p
              className={`uppercase tracking-wide mb-3 ${
                index === 0
                  ? "text-xs font-bold text-gray-700"
                  : "text-xs text-gray-500"
              }`}
            >
              {article.category}
            </p>

            <h3
              className={`font-semibold mb-3 text-gray-950 ${
                index === 0 ? "text-2xl" : "text-lg"
              }`}
            >
              {article.title}
            </h3>

            <p
              className={`text-gray-600 mb-4 ${
                index === 0 ? "text-base line-clamp-3" : "text-sm line-clamp-2"
              }`}
            >
              {article.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className={`${
                    index === 0
                      ? "text-xs font-medium text-gray-600"
                      : "text-xs text-gray-400"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <a
          href="https://medium.com/@hafidhyogi"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-300 rounded-full px-6 py-3 text-gray-950 font-semibold hover:bg-gray-100 transition-all duration-300"
        >
          Read Articles on Medium ↗
        </a>
      </div>
    </section>
  );
};
