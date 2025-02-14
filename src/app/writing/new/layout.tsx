export default function WritingNewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="mb-12 flex w-full flex-col">{children}</main>;
}
