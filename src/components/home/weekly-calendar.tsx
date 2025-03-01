'use client';

import React, { useState } from 'react';
import { CgChevronLeft, CgChevronRight, CgCheck } from 'react-icons/cg';

const studyData: Record<string, boolean> = {
  '2025-02-12': true,
  '2025-02-13': true,
  '2025-02-14': false,
  '2025-02-16': false,
  '2025-02-17': true,
  '2025-02-18': false,
};

function WeeklyCalendar() {
  const [currentWeek, setCurrentWeek] = useState<Date>(new Date());

  function getMonday(date: Date): Date {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  }

  const getWeekDates = (date: Date): Date[] => {
    const dates: Date[] = [];
    const monday = getMonday(date);
    for (let i = 0; i < 7; i++) {
      const day = new Date(monday);
      day.setDate(monday.getDate() + i - 1);
      dates.push(day);
    }
    return dates;
  };

  function navigateWeek(direction: number): void {
    const newDate = new Date(currentWeek);
    newDate.setDate(currentWeek.getDate() + direction * 7);
    setCurrentWeek(newDate);
  }

  function formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  const weekDates = getWeekDates(currentWeek);

  return (
    <section className="mt-10 w-full border p-6 text-base text-neutral-600">
      <h2 className="text-xl font-semibold text-neutral-800">주간 학습(예시)</h2>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigateWeek(-1)}
            className="p-2 transition-opacity hover:opacity-50"
          >
            <CgChevronLeft className="h-6 w-6" />
          </button>
          <div className="text-lg font-medium text-neutral-800">
            {`${weekDates[0].toLocaleDateString('ko-KR', { year: '2-digit', month: 'long', day: 'numeric' })}  - ${weekDates[6].toLocaleDateString('ko-KR', { year: '2-digit', month: 'long', day: 'numeric' })}`}
          </div>
          <button
            onClick={() => navigateWeek(1)}
            className="p-2 transition-opacity hover:opacity-50"
          >
            <CgChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-3">
        {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
          <div
            key={day}
            className={`text-center ${
              index === 0 ? 'text-red-500' : index === 6 && 'text-blue-500'
            }`}
          >
            {day}
          </div>
        ))}
        {weekDates.map((date, index) => {
          const dateString = formatDate(date);
          const hasStudied = studyData[dateString];

          return (
            <div
              key={dateString}
              className={`flex flex-col items-center border py-3 ${hasStudied ? 'bg-green-100' : 'bg-slate-50'} ${index === 0 && 'text-red-500'} ${index === 6 && 'text-blue-500'}`}
            >
              <div className="text-base">{date.getDate()}</div>
              <div className="mt-2 h-10 w-10">
                {hasStudied && <CgCheck className="h-full w-full text-green-500" />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WeeklyCalendar;
