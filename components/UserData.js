import InfoBlock from "./InfoBlock.js";
import InfoImage from "./InfoImage.js";
import InfoDetails from "./InfoDetails.js";

export default function AssetData({ data }) {
  const { name, email, role } = data;
  return (
    <InfoBlock>
      <InfoImage src="/smile.png" alt="A drawing of a smiley face :)." />
      <InfoDetails>
        <div>
          <span className="subtitle">USER</span>
          <h2>{name}</h2>
          <code>
            <b>Email: </b> <a href={"mailto:" + email}>{ email }</a>
          </code>
          <code>
            <b>Role: </b> { role.name }
          </code>
          <code>
            <b>Priveleges: </b> { role.privileges.length }
          </code>
          <code>
            <b>Is superuser?: </b> { role.superuser.toString() }
          </code>
        </div>
      </InfoDetails>
    </InfoBlock>
  );
}
