export default function MainContentWrapper({
  pt,
  children,
}: Readonly<{
  pt: number;
  children: React.ReactNode;
}>) {
  return (
    <main className={`mx-auto w-full max-w-4xl flex-1 px-4 py-12 pt-${pt}`}>
      {children}
    </main>
  );
}
