export default function WritingListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex w-full flex-col">{children}</main>;
}
