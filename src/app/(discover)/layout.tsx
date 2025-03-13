import Hero from '@/components/hero';
import MainContentWrapper from '@/components/main-content-wrapper';

export default function DiscoverLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Hero />
      <MainContentWrapper pt={6}>{children}</MainContentWrapper>
    </>
  );
}
