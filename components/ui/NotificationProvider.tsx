"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Notification from "@/components/ui/Notification";

type NotificationType = "success" | "error";

type NotifyInput = {
  type: NotificationType;
  message: string;
  title?: string;
  durationMs?: number;
};

type ActiveNotification = {
  type: NotificationType;
  message: string;
  title?: string;
};

type NotificationContextValue = {
  notify: (input: NotifyInput) => void;
  clearNotification: () => void;
};

const NotificationContext = createContext<NotificationContextValue | null>(null);

const DEFAULT_DURATION_MS = 4000;

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [activeNotification, setActiveNotification] =
    useState<ActiveNotification | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearNotification = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setActiveNotification(null);
  }, []);

  const notify = useCallback(
    ({ type, message, title, durationMs = DEFAULT_DURATION_MS }: NotifyInput) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      setActiveNotification({ type, message, title });

      timeoutRef.current = setTimeout(() => {
        setActiveNotification(null);
        timeoutRef.current = null;
      }, durationMs);
    },
    []
  );

  const value = useMemo(
    () => ({ notify, clearNotification }),
    [notify, clearNotification]
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <Notification
        show={Boolean(activeNotification)}
        type={activeNotification?.type || "success"}
        title={activeNotification?.title}
        message={activeNotification?.message || ""}
        className="fixed top-6 right-6 z-[100] w-[calc(100vw-3rem)] max-w-sm"
      />
    </NotificationContext.Provider>
  );
}

export function useNotification(): NotificationContextValue {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error("useNotification must be used within NotificationProvider");
  }

  return context;
}
