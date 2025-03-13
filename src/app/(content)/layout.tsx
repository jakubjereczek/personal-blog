import MainContentWrapper from '@/components/main-content-wrapper';

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainContentWrapper pt={24}>{children}</MainContentWrapper>;
}
