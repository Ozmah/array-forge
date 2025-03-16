import React from "react";
import { useTheme } from "./Theme/ThemeContext";

const Experience = ({ viewport }) => {
    const { currentTheme } = useTheme();

    // Experiencia profesional
    const experiences = [
        {
            role: "Lead PHP Developer",
            company: "Internet Brands",
            period: "April 2015 - Presente",
            description:
                "As a Lead Developer at Internet Brands, I have directed multiple responsive web design projects, implementing robust and scalable solutions. My work has focused on development with PHP and frameworks like Laravel, where I have optimized application architectures and designed RESTful APIs for integration with external services. I have led the implementation of modern user interfaces using CSS and JavaScript, always maintaining a balance between functionality and user experience. During my time here, I have mentored development teams, fostering clean code practices and agile methodologies, while maintaining fluid communication with clients to ensure projects met their expectations and technical requirements.",
        },
        {
            role: "Technical Leader/Senior PHP Developer",
            company: "Alcatel One Touch",
            period: "September 2013 - March 2015",
            description:
                "At Alcatel One Touch, I led the development of a complex ERP system designed to manage product lifecycles. Using Symfony 2 as the main framework, I implemented MVC architectures and designed optimized database systems with Doctrine ORM and SQL Server. I developed key system components, including authentication modules, inventory management, and custom administrative dashboards. My work included creating internal APIs to facilitate communication between system modules, as well as implementing responsive user interfaces with Bootstrap, HTML and CSS. This position allowed me to strengthen my technical leadership skills while continuing to deepen my backend development expertise with PHP.",
        },
        {
            role: "PHP Developer",
            company: "Softtek",
            period: "January 2011 - May 2013",
            description:
                "During my time at Softtek, I specialized in developing components for high-security financial applications. I worked extensively with PHP 5 and Zend Framework, designing and implementing SOAP web services for integration with external systems. I developed robust solutions for handling sensitive information, implementing security protocols and optimizing queries in Oracle and MySQL databases. I actively participated in creating web interfaces using HTML, CSS and jQuery, with special attention to usability and user experience. My role also included technical support for applications in production and management of critical requirements for international clients, which allowed me to gain valuable experience in technical communication and client expectation management.",
        },
    ];

    return (
        <section className="mb-20">
            <div className="flex items-end justify-between mb-8">
                <div>
                    <div className="text-sm font-medium text-primary">
                        TIMELINE
                    </div>
                    <h2
                        className={`
            text-2xl md:text-3xl font-bold text-text
            ${currentTheme === "retro90s" ? "retro-text" : ""}
          `}
                    >
                        Professional Experience
                    </h2>
                </div>
            </div>

            <div
                className={`
          rounded-2xl overflow-hidden relative
          bg-background border border-border
          ${currentTheme === "retro90s" ? "retro-border" : ""}
        `}
                style={{
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
                }}
            >
                {/* Línea de tiempo */}
                {viewport !== "mobile" && (
                    <div
                        className="absolute left-1/4 top-0 bottom-0 w-px"
                        style={{
                            backgroundColor: currentTheme.endsWith("-dark")
                                ? "rgba(2, 122, 255, 0.2)"
                                : "rgba(2, 122, 255, 0.3)",
                        }}
                    ></div>
                )}

                <div className="p-8 space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`flex ${
                                viewport === "mobile"
                                    ? "flex-col gap-4"
                                    : "flex-row"
                            }`}
                        >
                            {viewport !== "mobile" && (
                                <div className="w-1/4 pr-8 text-right relative">
                                    <div
                                        className="absolute right-0 w-4 h-4 rounded-full transform translate-x-2"
                                        style={{
                                            backgroundColor:
                                                index === 0
                                                    ? "var(--color-primary)"
                                                    : index === 1
                                                    ? "var(--color-secondary)"
                                                    : "var(--color-accent)",
                                            top: "0.375rem",
                                            right: "-0.125rem",
                                        }}
                                    ></div>

                                    <div className="font-bold text-primary">
                                        {exp.period}
                                    </div>
                                    <div className="text-sm text-text-secondary">
                                        {exp.company}
                                    </div>
                                </div>
                            )}

                            <div
                                className={
                                    viewport === "mobile" ? "" : "w-3/4 pl-12"
                                }
                            >
                                {viewport === "mobile" && (
                                    <div className="flex items-center gap-3 mb-2">
                                        <div
                                            className="w-3 h-3 rounded-full flex-shrink-0"
                                            style={{
                                                backgroundColor:
                                                    index === 0
                                                        ? "var(--color-primary)"
                                                        : index === 1
                                                        ? "var(--color-secondary)"
                                                        : "var(--color-accent)",
                                            }}
                                        ></div>
                                        <div>
                                            <div className="font-bold text-primary">
                                                {exp.period}
                                            </div>
                                            <div className="text-sm text-text-secondary">
                                                {exp.company}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div
                                    className={`
                    p-5 rounded-xl
                    ${currentTheme === "retro90s" ? "retro-border" : ""}
                  `}
                                    style={{
                                        backgroundColor: currentTheme.endsWith(
                                            "-dark"
                                        )
                                            ? "rgba(34, 43, 69, 0.7)"
                                            : "rgba(247, 249, 252, 0.7)",
                                        boxShadow:
                                            "0 4px 12px rgba(0, 0, 0, 0.03)",
                                    }}
                                >
                                    <h3 className="text-xl font-bold mb-2 text-text">
                                        {exp.role}
                                    </h3>
                                    <p className="text-text-secondary">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
