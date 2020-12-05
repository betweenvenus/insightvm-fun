import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Test from '../components/Test.js';
import credentials from "../secret.js";
import Banner from "../components/Banner.js";
// import InfoBlock from "../components/InfoBlock.js";
// import Container from "../components/Container.js";
// import AssetData from "../components/AssetData.js";

const buffer = Buffer(credentials);
const secret = buffer.toString('base64');

const API_URL = "https://localhost:3780";

const requestHeaders = {
  headers: {
    Authorization: `Basic ${secret}`
  }
}

export async function getStaticProps() {
  const IVMRequest = await Promise.all([
    // Asset data
    fetch(`${API_URL}/api/3/assets/1`, requestHeaders),
    // Site data
    fetch(`${API_URL}/api/3/sites/1`, requestHeaders),
    // User data
    fetch(`${API_URL}/api/3/users/1`, requestHeaders),
  ]);

  // Promise.all is required here because a Body.json() returns a *Promise*,
  // thus IVMData.map() returns an array of Promises
  const IVMData = await Promise.all(IVMRequest.map(data => data.json()));

  return {
    props: {
      IVMData
    }
  }
}

export default function Home({ IVMData }) {
  console.info(IVMData);
  const [assetData, siteData, userData] = IVMData;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Test data={ assetData }/>
    </div>
  );
}
