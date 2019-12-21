import React from "react";

export default function IconSetInfo({ icon }) {
  const { licenseUrl, license, projectUrl } = icon;
  return (
    <table className="iconset--info">
      <tbody>
        <tr>
          <th>License</th>
          <td>
            <a href={licenseUrl} target="_blank" rel="noopener noreferrer">
              {license}
            </a>
          </td>
        </tr>
        <tr>
          <th>Project</th>
          <td>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              {projectUrl}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
