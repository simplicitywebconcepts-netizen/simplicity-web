"use client";

import { AnimatePresence, motion } from "framer-motion";

type NotificationType = "success" | "error";

interface NotificationProps {
  show: boolean;
  type: NotificationType;
  title?: string;
  message: string;
  className?: string;
}

export default function Notification({
  show,
  type,
  title,
  message,
  className = "",
}: NotificationProps) {
  const isSuccess = type === "success";

  const resolvedTitle =
    title || (isSuccess ? "Sent successfully" : "Unable to send");

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.99 }}
          transition={{ duration: 0.2 }}
          className={className}
          role="status"
          aria-live="polite"
        >
          <div
            className={`rounded-xl border px-4 py-3 shadow-lg ${
              isSuccess
                ? "border-green-300 bg-green-50/95 text-green-900"
                : "border-red-300 bg-red-50/95 text-red-900"
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/80 text-sm font-bold">
                {isSuccess ? "✓" : "!"}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold">{resolvedTitle}</p>
                <p className="mt-1 text-sm leading-5">{message}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
