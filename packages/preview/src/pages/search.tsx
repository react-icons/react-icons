import Container from "@components/@core/container";
import SearchPageComponent from "@components/pages/search";
import { Context } from "@utils/search-context";
import { useContext } from "react";
import { useRouter } from "next/router";

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;
  const { query, setQuery } = useContext(Context);

  if (!query && q) setQuery(q as any);

  return (
    <Container title="🔍 Search">
      <SearchPageComponent />
    </Container>
  );
}
