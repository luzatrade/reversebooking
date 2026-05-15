"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

type AppDatePickerProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  minDate?: string;
  className?: string;
};

const monthFormatter = new Intl.DateTimeFormat("it-IT", { month: "long", year: "numeric" });
const dayFormatter = new Intl.DateTimeFormat("it-IT", { day: "2-digit", month: "short", year: "numeric" });
const weekDays = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];

function toDateOnly(value: string) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

function toInputValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function sameDay(first: Date, second: Date) {
  return first.getFullYear() === second.getFullYear() && first.getMonth() === second.getMonth() && first.getDate() === second.getDate();
}

function startOfMonth(value: Date) {
  return new Date(value.getFullYear(), value.getMonth(), 1);
}

function buildMonthDays(monthDate: Date) {
  const firstDay = startOfMonth(monthDate);
  const mondayOffset = (firstDay.getDay() + 6) % 7;
  const start = new Date(firstDay);
  start.setDate(firstDay.getDate() - mondayOffset);
  return Array.from({ length: 42 }).map((_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return date;
  });
}

export function AppDatePicker({ label, value, onChange, minDate, className }: AppDatePickerProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const selectedDate = useMemo(() => toDateOnly(value), [value]);
  const minimumDate = useMemo(() => toDateOnly(minDate ?? ""), [minDate]);
  const [open, setOpen] = useState(false);
  const [visibleMonth, setVisibleMonth] = useState(() => startOfMonth(selectedDate ?? minimumDate ?? new Date()));

  useEffect(() => {
    function onDocumentClick(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocumentClick);
    return () => document.removeEventListener("mousedown", onDocumentClick);
  }, []);

  useEffect(() => {
    if (selectedDate) setVisibleMonth(startOfMonth(selectedDate));
  }, [selectedDate]);

  const days = useMemo(() => buildMonthDays(visibleMonth), [visibleMonth]);
  const displayValue = selectedDate ? dayFormatter.format(selectedDate) : "Seleziona data";

  function changeMonth(delta: number) {
    setVisibleMonth((current) => new Date(current.getFullYear(), current.getMonth() + delta, 1));
  }

  function selectDate(date: Date) {
    if (minimumDate && date < minimumDate) return;
    onChange(toInputValue(date));
    setOpen(false);
  }

  return (
    <div ref={wrapperRef} className={`relative ${className ?? ""}`}>
      <label className="text-xs font-semibold text-zinc-500">{label}</label>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="mt-2 flex h-14 w-full items-center justify-between rounded-2xl border border-zinc-300 bg-white px-4 text-left text-sm font-semibold text-zinc-950 outline-none transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
      >
        <span>{displayValue}</span>
        <CalendarDays className="h-4 w-4 text-zinc-500" />
      </button>
      {open ? (
        <div className="absolute left-0 z-50 mt-3 w-[340px] rounded-3xl border border-zinc-200 bg-white p-4 text-zinc-950 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 dark:text-white sm:w-[390px]">
          <div className="flex items-center justify-between gap-3">
            <button type="button" onClick={() => changeMonth(-1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900" aria-label="Mese precedente">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <p className="text-base font-semibold capitalize">{monthFormatter.format(visibleMonth)}</p>
            <button type="button" onClick={() => changeMonth(1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900" aria-label="Mese successivo">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs font-semibold text-zinc-500">
            {weekDays.map((day) => <div key={day} className="py-2">{day}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((date) => {
              const isCurrentMonth = date.getMonth() === visibleMonth.getMonth();
              const isSelected = selectedDate ? sameDay(date, selectedDate) : false;
              const isDisabled = Boolean(minimumDate && date < minimumDate);
              return (
                <button
                  key={toInputValue(date)}
                  type="button"
                  disabled={isDisabled}
                  onClick={() => selectDate(date)}
                  className={`h-11 rounded-2xl text-sm font-semibold transition ${isSelected ? "bg-[#0f4c81] text-white" : "bg-white text-zinc-800 hover:bg-zinc-100 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"} ${!isCurrentMonth ? "opacity-40" : ""} ${isDisabled ? "cursor-not-allowed opacity-25" : ""}`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
          <div className="mt-4 flex justify-end">
            <button type="button" onClick={() => setOpen(false)} className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">Chiudi</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
