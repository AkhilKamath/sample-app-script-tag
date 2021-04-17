import { Button, Card, EmptyState, Frame, Heading, Layout, Page, ResourceItem, ResourceList, TextStyle } from "@shopify/polaris";
import { useState } from "react";
import NavigationBar from "../components/NavigationBar";

const SellingPlans = () => {
 
  return (
    <Page>
      <Layout>
        <NavigationBar />
        Subscription Plans
      </Layout>
    </Page>
  );

}

export default SellingPlans;