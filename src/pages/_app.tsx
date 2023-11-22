import { NextPage } from "next";
import { FC, ReactNode } from "react";
import { Layout } from "./Layout";

const MyApp = ({
  Component}: {
    Component: NextPage<unknown>
  }) => {

  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default MyApp
