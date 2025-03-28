import Hero from '@/components/hero';
import MainContentWrapper from '@/components/main-content-wrapper';
import ArticleService from '@/lib/article-service';

export default async function DiscoverLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const length = ArticleService.getArticles().length;

  return (
    <>
      <Hero length={length} />
      <MainContentWrapper pt={6}>{children}</MainContentWrapper>
    </>
  );
}
