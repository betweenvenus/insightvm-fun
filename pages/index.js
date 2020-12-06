// Built-in components
import Head from "next/head";

// Custom components
import Banner from "../components/Banner.js";
import APIPath from "../components/APIPath.js";
import AssetData from "../components/AssetData.js";
import SiteData from "../components/SiteData.js";
import UserData from "../components/UserData.js";

// Global constants
const ivmCredentials = Buffer.from(process.env.IVM_CREDENTIALS).toString(
  "base64"
);
const apiURL = "https://localhost:3780";

const requestHeaders = {
  headers: {
    Authorization: `Basic ${ivmCredentials}`,
  },
};

export async function getStaticProps() {
  const IVMRequest = await Promise.all([
    // Asset data
    fetch(`${apiURL}/api/3/assets/1`, requestHeaders),
    // Site data
    fetch(`${apiURL}/api/3/sites/1`, requestHeaders),
    // User data
    fetch(`${apiURL}/api/3/users/1`, requestHeaders),
  ]);

  // Promise.all is required here because a Body.json() returns a *Promise*,
  // thus IVMData.map() returns an array of Promises
  const IVMData = await Promise.all(IVMRequest.map((data) => data.json()));

  return {
    props: {
      IVMData,
    },
  };
}

export default function Home({ IVMData }) {
  console.info(IVMData);
  const [assetData, siteData, userData] = IVMData;
  return (
    <main>
      <Head>
        <title>InsightVM API Thing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      {/* Asset block */}
      <h2 style={{ fontWeight: "bold" }}>Asset Data</h2>
      <APIPath path="/api/3/assets/1" />
      <AssetData data={assetData} />

      {/* Site block */}
      <h2 style={{ fontWeight: "bold" }}>Site Data</h2>
      <APIPath path="/api/3/sites/1" />
      <SiteData data={siteData} />

      {/* User block */}
      <h2 style={{ fontWeight: "bold" }}>User Data</h2>
      <APIPath path="/api/3/users/1" />
      <UserData data={userData} />
    </main>
  );
}
