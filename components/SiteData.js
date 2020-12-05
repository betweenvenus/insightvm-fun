import styled from "styled-components";
import InfoBlock from "./InfoBlock.js";
import InfoImage from "./InfoImage.js";
import InfoDetails from "./InfoDetails.js";

export default function AssetData({ data }) {
  const {
    assets,
    importance,
    lastScanTime,
    name,
    scanTemplate,
    type,
  } = data;
  return (
    <InfoBlock>
      <InfoDetails>
        <div>
          <span class="subtitle">SITE</span>
          <h2>{ name }</h2>
        </div>
      </InfoDetails>
      <InfoImage src="/windows-96.png" />
    </InfoBlock>
  );
}
