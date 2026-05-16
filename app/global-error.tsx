"use client";

import { useEffect } from "react";

export default function GlobalError({
    error,
    unstable_retry,
}: {
    error: Error & { digest?: string };
    unstable_retry: () => void;
}) {
    useEffect(() => {
        console.error("[GlobalError]", error);
    }, [error]);

    return (
        <html lang="en">
            <body
                style={{
                    margin: 0,
                    padding: 0,
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#050505",
                    color: "#ffffff",
                    fontFamily:
                        "'Inter', system-ui, -apple-system, sans-serif",
                }}
            >
                <div
                    style={{
                        textAlign: "center",
                        maxWidth: "480px",
                        padding: "40px 24px",
                    }}
                >
                    {/* Logo Mark */}
                    <div
                        style={{
                            width: "56px",
                            height: "56px",
                            margin: "0 auto 24px",
                            borderRadius: "14px",
                            background:
                                "linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "24px",
                            fontWeight: 700,
                            color: "#fff",
                            letterSpacing: "-1px",
                        }}
                    >
                        S
                    </div>

                    <h2
                        style={{
                            fontSize: "24px",
                            fontWeight: 700,
                            margin: "0 0 12px",
                            letterSpacing: "-0.5px",
                        }}
                    >
                        Something went wrong
                    </h2>

                    <p
                        style={{
                            fontSize: "15px",
                            color: "#a3a3a3",
                            lineHeight: 1.6,
                            margin: "0 0 32px",
                        }}
                    >
                        We encountered an unexpected error. Please try again —
                        if the issue persists, contact us at{" "}
                        <a
                            href="mailto:info@simplicityweb.ca"
                            style={{ color: "#a78bfa", textDecoration: "none" }}
                        >
                            info@simplicityweb.ca
                        </a>
                    </p>

                    <button
                        onClick={() => unstable_retry()}
                        style={{
                            padding: "12px 32px",
                            background:
                                "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "14px",
                            fontWeight: 600,
                            cursor: "pointer",
                            letterSpacing: "0.5px",
                            transition: "opacity 0.2s",
                        }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.opacity = "0.85")
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.opacity = "1")
                        }
                    >
                        Try Again
                    </button>
                </div>
            </body>
        </html>
    );
}
