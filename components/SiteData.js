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
          <span className="subtitle">SITE</span>
          <h2>{ name }</h2>
          <code>
            <b>Last scan time: </b> 
            <br />
            { lastScanTime }
          </code>
          <code>
            <b>Importance: </b> { importance }
          </code>
          <code>
            <b>Number of assets: </b> { assets }
          </code>
          <code>
            <b>Scan template: </b>
            <br />
            <span>{ scanTemplate }</span>
          </code>
          <code>
            <b>Type: </b> { type }
          </code>
        </div>
      </InfoDetails>
      <InfoImage src="/network.png" alt="Drawing depicting interconnected nodes"/>
    </InfoBlock>
  );
}
