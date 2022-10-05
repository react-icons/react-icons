import Container from "@components/@core/container";
import IconSetImport from "./iconset-import";
import IconSetInfo from "./iconset-info";
import IconSetViewer from "./iconset-viewer";
import { getIconById } from "@utils/icon";

export default function IconsPageComponent({ iconId }) {
  const icon = getIconById(iconId);

  return (
    <Container title={icon.name}>
      <IconSetInfo icon={icon} />
      <IconSetImport iconId={icon.id} />
      <IconSetViewer icon={icon} />
    </Container>
  );
}
