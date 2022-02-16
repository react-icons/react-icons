import codegen from "babel-plugin-codegen/macro";

const fn = codegen`
const { IconsManifest } = require("react-icons/lib/cjs");
const l = IconsManifest.length

let codes = "(function (id) { switch (id) {";
for(let i = 0; i<l;i++){
  const icon = IconsManifest[i]

  codes += 'case "' + icon.id + '":\\nreturn import("react-icons/' + icon.id +'/index");\\n'

}

codes += '}})';

module.exports = codes;
// module.exports = "import('react-icons/fa/index')"
`;

export function getIcons(iconsId) {
  /*
  Dynamic Import with improved performance.
  Macros are used to avoid bundling unnecessary modules.

  Similar to this code
  ```
  return import(`react-icons/${iconsId}/index`);
  ```
  */

  return fn(iconsId);
}
