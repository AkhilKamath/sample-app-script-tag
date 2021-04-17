import { useAppBridge } from "@shopify/app-bridge-react";
import { getSessionToken } from "@shopify/app-bridge-utils";
import { Layout, Page, SettingToggle, TextStyle } from "@shopify/polaris";
import axios from "axios";
import { useState } from "react";
import NavigationBar from "../components/NavigationBar";

const Install = () => {
  const app = useAppBridge();
  const [isInstalled, setisInstalled] = useState(null);
  const titleDescription = isInstalled ? 'Uninstall' : 'Install';
  const bodyDescription = isInstalled ? 'installed' : 'uninstalled';

  async function handleAction() {
    if(!isInstalled)
    {
      const token = await getSessionToken(app);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      console.log("PROCESS ENV ", process.env.HOSTLT);
      await axios.post(`https://lw-shopify.loca.lt/script-tag`,{}, config);
    }
    setisInstalled(value => !value);
  }
  
  return  (
    <Page>
      <Layout>
        <NavigationBar />
        Install
      </Layout>
      <Layout.AnnotatedSection
        title={`${titleDescription} banner`}
        description="Toggle banner installation on your shop">
          <SettingToggle
            action={{
              content: titleDescription,
              onAction: handleAction
            }}
            enabled={true}>
              The banner script is{" "}
              <TextStyle variation="strong">{bodyDescription}</TextStyle>
            </SettingToggle>
      </Layout.AnnotatedSection>
    </Page>
  );
}

export default Install;