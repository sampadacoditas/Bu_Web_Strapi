import { ContactUsForm, HeroSection, OurOffices } from "@/components";
import { CONTACT_US_INITIAL_VALUES, CONTACT_US_SCHEMA } from "@/components/ContactUsForm/ContactUsForm.helper";
import { CONTACT_US_FORM } from "@/constants/constants";
import style from "./ContactUs.module.scss";
import { getImageUrl } from "@/utils/helper";

const ContactUs = (props: any) => {
  const { attributes: pageData } = props;

  const getFormattedData = (data: any) => {
    const formattedData = {
      ...data,
      enquiry: data.enquiry.value,
    };
    return formattedData;
  };

  const heroSectionData = {
    title: pageData?.heroBannerSection?.bannerTitle,
    description: pageData?.heroBannerSection?.bannerSubText,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    buttonText: pageData?.heroBannerSection?.buttonText,
    buttonSvg: pageData?.heroBannerSection?.buttonSvgImg?.data?.attributes?.url,
  };

  const formData = {
    title: pageData?.sectionTitle1,
    description: pageData?.description1,
    formContents: pageData?.formContents,
    commonSvgs: pageData?.commonSvgs,
  };

  const ourOfficesData = {
    title: pageData?.sectionTitle6,
    addressData: pageData?.officeLocations,
    map: getImageUrl(pageData?.map),
    commonSvgs: pageData?.commonSvgs || {},
    mappedSvgs: pageData?.mappedSvgs || {},
  };

  return (
    <div className={style.contactUsPage}>
      <HeroSection
        {...heroSectionData}
        contentContainerStyle={style.heroSectionContentContainer}
        heroSectionGradientStyle={style.heroSectionGradient}
      />
      <ContactUsForm
        {...formData}
        getFormattedData={getFormattedData}
        contentContainerStyle={style.contactUsContainer}
        constant={CONTACT_US_FORM}
        fields={pageData?.cardArray3}
        schema={CONTACT_US_SCHEMA}
        initialValues={CONTACT_US_INITIAL_VALUES}
        handleSubmit={() => {
          return;
        }}
      />
      <OurOffices {...ourOfficesData} map={ourOfficesData?.map} />
    </div>
  );
};

export default ContactUs;
