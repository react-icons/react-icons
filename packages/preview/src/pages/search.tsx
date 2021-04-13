import Container from "@components/@core/container";
import SearchPageComponent from "@components/pages/search";
import React from "react";
import { useRouter } from "next/router";
import { Context } from "@utils/search-context";

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;
  const { query, setQuery } = React.useContext(Context);

  if (!query && q) setQuery(q);

  return (
    <Container title="🔍 Search">
      <SearchPageComponent />
    </Container>
  );
}
