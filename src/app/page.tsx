import WeeklyCalendar from '@/components/home/weekly-calendar';

export default function Home() {
  return (
    <main className="w-full">
      <h1 className="mt-12 text-3xl font-bold">내 학습</h1>
      <WeeklyCalendar />
    </main>
  );
}
