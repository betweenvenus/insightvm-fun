import styled from "styled-components";
import InfoBlock from "./InfoBlock.js";
import InfoImage from "./InfoImage.js";
import InfoDetails from "./InfoDetails.js";

export default function AssetData({ data }) {
  const {
    name,
    email,
    role
  } = data;
  return (
    <InfoBlock>
      <InfoImage src="/windows-96.png" />
      <InfoDetails>
        <div>
          <span class="subtitle">USER</span>
          <h2>{ name }</h2>
        </div>
      </InfoDetails>
    </InfoBlock>
  );
}
