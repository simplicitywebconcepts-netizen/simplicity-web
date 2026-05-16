import Logo from "@/components/ui/Logo";

export default function Loading() {
    return (
        <div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
            style={{ backgroundColor: "#050505" }}
        >
            {/* Logo with pulse animation */}
            <div className="animate-pulse">
                <Logo className="w-16 h-16 drop-shadow-lg" />
            </div>

            {/* Brand name */}
            <div className="mt-5 flex flex-col items-center leading-none">
                <span className="font-bold text-sm tracking-widest uppercase text-foreground">
                    SIMPLICITY
                </span>
                <span className="text-[8px] tracking-[0.3em] uppercase text-muted mt-0.5">
                    WEB INC
                </span>
            </div>

            {/* Subtle loading bar */}
            <div className="mt-8 w-32 h-0.5 rounded-full bg-border overflow-hidden">
                <div
                    className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary-light"
                    style={{
                        animation: "loadingSlide 1.5s ease-in-out infinite",
                        width: "40%",
                    }}
                />
            </div>

            <style>{`
                @keyframes loadingSlide {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(350%); }
                }
            `}</style>
        </div>
    );
}
