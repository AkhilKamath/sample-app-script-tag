import { Card, Heading, Layout, Page, TextStyle } from "@shopify/polaris";
import NavigationBar from "../components/NavigationBar";
import store from 'store-js';

const Index = ({shopOrigin}) => {
  
  return (
    <Page>
      <Layout>
        <NavigationBar />
      </Layout>
        Getting Started
    </Page>
  );
}

export default Index;
