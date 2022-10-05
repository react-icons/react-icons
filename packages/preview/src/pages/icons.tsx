import IconsPageComponent from "@components/pages/icons";
import { useRouter } from "next/router";

export default function IconsPage() {
  const router = useRouter();
  const { name } = router.query;

  return <>{name && <IconsPageComponent iconId={name} />}</>;
}
