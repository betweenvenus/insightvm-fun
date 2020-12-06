import InfoBlock from "./InfoBlock.js";
import InfoImage from "./InfoImage.js";
import InfoDetails from "./InfoDetails.js";

export default function AssetData({ data }) {
  const { id, hostName, ip, riskScore, history } = data;
  return (
    <InfoBlock>
      <InfoImage
        src="/windows-96.png"
          alt="Drawing of an old computer screen displaying the text 'Windows 96'."
      />
      <InfoDetails>
        <div>
          <span className="subtitle">HOSTNAME</span>
          <h2>{hostName}</h2>
          <code>
            <b>Asset ID: </b> {id}
          </code>
          <code>
            <b>Local IP: </b> {ip}
          </code>
          <code>
            <b>Risk score:</b> {riskScore.toFixed(2)} 😢
          </code>
          <code>
            <b>Number of scans: </b> {history.length}
          </code>
        </div>
      </InfoDetails>
    </InfoBlock>
  );
}
