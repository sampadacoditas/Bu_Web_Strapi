import { ComponentType, Fragment } from "react";
import Head from "next/head";
import { getImageUrl } from "@/utils/helper";

const withMetaInfo = (WrappedComponent: ComponentType<any>) => {
  const containerChildren = (moreProps: any) => {
    const {attributes: metaData} = moreProps?.metaTags;
    return (
    <Fragment>
      <Head>
        <title>{moreProps?.metaTags?.title}</title>
        <meta name="description" content={metaData?.description} key="description" />
        <meta name="image" content={getImageUrl(metaData?.image)} key="image" />
        <meta property="og:title" content={metaData?.title} key="og:title" />
        <meta property="og:description" content={metaData?.description} key="og:description" />
        <meta property="og:image" content={getImageUrl(metaData?.image)} key="og:image" />
      </Head>
      <WrappedComponent {...moreProps} />
    </Fragment>
  )
  };
  return containerChildren;
};

export default withMetaInfo;
