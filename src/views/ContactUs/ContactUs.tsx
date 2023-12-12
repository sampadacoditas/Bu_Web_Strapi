import { ContactUsForm, HeroSection, OurOffices } from "@/components";
import { CONTACT_US_INITIAL_VALUES, CONTACT_US_SCHEMA } from "@/components/ContactUsForm/ContactUsForm.helper";
import { CONTACT_US_FORM } from "@/constants/constants";
import style from "./ContactUs.module.scss";
import { getImageUrl, mapArrayImages } from "@/utils/helper";

const ContactUs = (props: any) => {
  const { attributes: pageData } = props;

  const [ formDataObject, ourOffices, svgObject] = pageData?.pageComponents;
  const commonSvgs = mapArrayImages(svgObject)
 
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
    title: formDataObject?.formTitle,
    description: formDataObject?.formDesc,
    formContents: pageData?.formContents,
    commonSvgs: commonSvgs,
  };

  const ourOfficesData = {
    title: ourOffices?.heading,
    addressData: ourOffices?.ourOffice || [],
    map: getImageUrl(ourOffices?.map),
    commonSvgs: commonSvgs || {},
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
