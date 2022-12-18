// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for AccordionItem documents */
interface AccordionitemDocumentData {
    /**
     * Title field in *AccordionItem*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: accordionitem.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Slice Zone field in *AccordionItem*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: accordionitem.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<AccordionitemDocumentDataSlicesSlice>;
}
/**
 * Slice for *AccordionItem → Slice Zone*
 *
 */
type AccordionitemDocumentDataSlicesSlice = ButtonSliceSlice | EmbedSliceSlice | ImageSliceSlice | TextSliceSlice;
/**
 * AccordionItem document from Prismic
 *
 * - **API ID**: `accordionitem`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AccordionitemDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<AccordionitemDocumentData>, "accordionitem", Lang>;
/** Content for BankPage documents */
interface BankpageDocumentData {
    /**
     * Headline field in *BankPage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: bankpage.headline
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    headline: prismicT.RichTextField;
    /**
     * Description1 field in *BankPage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: bankpage.description1
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description1: prismicT.RichTextField;
    /**
     * Description2 field in *BankPage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: bankpage.description2
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description2: prismicT.RichTextField;
    /**
     * Description3 field in *BankPage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: bankpage.description3
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description3: prismicT.RichTextField;
}
/**
 * BankPage document from Prismic
 *
 * - **API ID**: `bankpage`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BankpageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<BankpageDocumentData>, "bankpage", Lang>;
/** Content for BlogPost documents */
interface BlogpostDocumentData {
    /**
     * Title field in *BlogPost*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blogpost.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Author field in *BlogPost*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blogpost.author
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    author: prismicT.KeyTextField;
    /**
     * PublicationDate field in *BlogPost*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: blogpost.publicationdate
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    publicationdate: prismicT.DateField;
    /**
     * Description field in *BlogPost*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blogpost.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * CardImage (optional) field in *BlogPost*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: blogpost.cardimage
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    cardimage: prismicT.ImageField<never>;
    /**
     * Slice Zone field in *BlogPost*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: blogpost.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<BlogpostDocumentDataSlicesSlice>;
}
/**
 * Slice for *BlogPost → Slice Zone*
 *
 */
type BlogpostDocumentDataSlicesSlice = TextSliceSlice | EmbedSliceSlice | ImageSliceSlice | AccordionSliceSlice;
/**
 * BlogPost document from Prismic
 *
 * - **API ID**: `blogpost`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogpostDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<BlogpostDocumentData>, "blogpost", Lang>;
/** Content for CallToAction documents */
interface CalltoactionDocumentData {
    /**
     * Title field in *CallToAction*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: calltoaction.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Text field in *CallToAction*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: calltoaction.text
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
    /**
     * checklist1 field in *CallToAction*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: calltoaction.checklist1
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    checklist1: prismicT.RichTextField;
    /**
     * checklist2 field in *CallToAction*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: calltoaction.checklist2
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    checklist2: prismicT.RichTextField;
    /**
     * checklist3 field in *CallToAction*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: calltoaction.checklist3
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    checklist3: prismicT.RichTextField;
}
/**
 * CallToAction document from Prismic
 *
 * - **API ID**: `calltoaction`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CalltoactionDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<CalltoactionDocumentData>, "calltoaction", Lang>;
/** Content for CertificationPage documents */
interface CertificationpageDocumentData {
    /**
     * Slice Zone field in *CertificationPage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: certificationpage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<CertificationpageDocumentDataSlicesSlice>;
}
/**
 * Slice for *CertificationPage → Slice Zone*
 *
 */
type CertificationpageDocumentDataSlicesSlice = AccordionSliceSlice | EmbedSliceSlice | ButtonSliceSlice | ImageSliceSlice | TextSliceSlice;
/**
 * CertificationPage document from Prismic
 *
 * - **API ID**: `certificationpage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CertificationpageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<CertificationpageDocumentData>, "certificationpage", Lang>;
/** Content for ContactPage documents */
interface ContactpageDocumentData {
    /**
     * Description field in *ContactPage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contactpage.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * ContactPage document from Prismic
 *
 * - **API ID**: `contactpage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactpageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<ContactpageDocumentData>, "contactpage", Lang>;
/** Content for DisclaimerPage documents */
interface DisclaimerpageDocumentData {
    /**
     * Slice Zone field in *DisclaimerPage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: disclaimerpage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<DisclaimerpageDocumentDataSlicesSlice>;
}
/**
 * Slice for *DisclaimerPage → Slice Zone*
 *
 */
type DisclaimerpageDocumentDataSlicesSlice = TextSliceSlice;
/**
 * DisclaimerPage document from Prismic
 *
 * - **API ID**: `disclaimerpage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type DisclaimerpageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<DisclaimerpageDocumentData>, "disclaimerpage", Lang>;
/** Content for FAQPage documents */
interface FaqpageDocumentData {
    /**
     * Introduction field in *FAQPage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: faqpage.introduction
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    introduction: prismicT.RichTextField;
    /**
     * Slice Zone field in *FAQPage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: faqpage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<FaqpageDocumentDataSlicesSlice>;
}
/**
 * Slice for *FAQPage → Slice Zone*
 *
 */
type FaqpageDocumentDataSlicesSlice = AccordionSliceSlice;
/**
 * FAQPage document from Prismic
 *
 * - **API ID**: `faqpage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FaqpageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<FaqpageDocumentData>, "faqpage", Lang>;
/** Content for HomePage documents */
interface HomepageDocumentData {
    /**
     * Description1 field in *HomePage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.description1
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description1: prismicT.RichTextField;
    /**
     * Description2 field in *HomePage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.description2
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description2: prismicT.RichTextField;
    /**
     * Description3 field in *HomePage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.description3
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description3: prismicT.RichTextField;
    /**
     * Description4 field in *HomePage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.description4
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description4: prismicT.RichTextField;
}
/**
 * HomePage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
/** Content for PledgePage documents */
interface PledgepageDocumentData {
    /**
     * Introduction field in *PledgePage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: pledgepage.introduction
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    introduction: prismicT.KeyTextField;
    /**
     * Description 1 field in *PledgePage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: pledgepage.description1
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description1: prismicT.RichTextField;
    /**
     * Description 2 field in *PledgePage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: pledgepage.description2
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description2: prismicT.RichTextField;
}
/**
 * PledgePage document from Prismic
 *
 * - **API ID**: `pledgepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PledgepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<PledgepageDocumentData>, "pledgepage", Lang>;
/** Content for PressPost documents */
interface PresspostDocumentData {
    /**
     * Title field in *PressPost*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: presspost.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Author field in *PressPost*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: presspost.author
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    author: prismicT.KeyTextField;
    /**
     * Email field in *PressPost*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: presspost.email
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    email: prismicT.KeyTextField;
    /**
     * Phone field in *PressPost*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: presspost.phone
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    phone: prismicT.KeyTextField;
    /**
     * ReleaseDate field in *PressPost*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: presspost.releasedate
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    releasedate: prismicT.DateField;
    /**
     * Description field in *PressPost*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: presspost.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Slice Zone field in *PressPost*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: presspost.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PresspostDocumentDataSlicesSlice>;
}
/**
 * Slice for *PressPost → Slice Zone*
 *
 */
type PresspostDocumentDataSlicesSlice = TextSliceSlice | ImageSliceSlice | EmbedSliceSlice;
/**
 * PressPost document from Prismic
 *
 * - **API ID**: `presspost`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PresspostDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PresspostDocumentData>, "presspost", Lang>;
/** Content for PrivacyPage documents */
interface PrivacypageDocumentData {
    /**
     * Slice Zone field in *PrivacyPage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: privacypage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PrivacypageDocumentDataSlicesSlice>;
}
/**
 * Slice for *PrivacyPage → Slice Zone*
 *
 */
type PrivacypageDocumentDataSlicesSlice = TextSliceSlice;
/**
 * PrivacyPage document from Prismic
 *
 * - **API ID**: `privacypage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PrivacypageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<PrivacypageDocumentData>, "privacypage", Lang>;
/** Content for TakeActionPage documents */
interface TakeactionpageDocumentData {
    /**
     * Introduction field in *TakeActionPage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: takeactionpage.introduction
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    introduction: prismicT.RichTextField;
    /**
     * Slice Zone field in *TakeActionPage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: takeactionpage.slices1[]
     * - **Tab**: Pressure
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices1: prismicT.SliceZone<TakeactionpageDocumentDataSlices1Slice>;
    /**
     * Slice Zone field in *TakeActionPage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: takeactionpage.slices2[]
     * - **Tab**: Switch
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices2: prismicT.SliceZone<TakeactionpageDocumentDataSlices2Slice>;
    /**
     * Slice Zone field in *TakeActionPage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: takeactionpage.slices3[]
     * - **Tab**: Share
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices3: prismicT.SliceZone<TakeactionpageDocumentDataSlices3Slice>;
    /**
     * Slice Zone field in *TakeActionPage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: takeactionpage.slices4[]
     * - **Tab**: Learn
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices4: prismicT.SliceZone<TakeactionpageDocumentDataSlices4Slice>;
}
/**
 * Slice for *TakeActionPage → Slice Zone*
 *
 */
type TakeactionpageDocumentDataSlices1Slice = EmbedSliceSlice | ImageSliceSlice | TextSliceSlice | ButtonSliceSlice | AccordionSliceSlice;
/**
 * Slice for *TakeActionPage → Slice Zone*
 *
 */
type TakeactionpageDocumentDataSlices2Slice = EmbedSliceSlice | ImageSliceSlice | TextSliceSlice | ButtonSliceSlice | AccordionSliceSlice;
/**
 * Slice for *TakeActionPage → Slice Zone*
 *
 */
type TakeactionpageDocumentDataSlices3Slice = EmbedSliceSlice | ImageSliceSlice | TextSliceSlice | ButtonSliceSlice | AccordionSliceSlice | SocialSharerSliceSlice | SharePicGallerySliceSlice;
/**
 * Slice for *TakeActionPage → Slice Zone*
 *
 */
type TakeactionpageDocumentDataSlices4Slice = EmbedSliceSlice | ImageSliceSlice | TextSliceSlice | ButtonSliceSlice | AccordionSliceSlice;
/**
 * TakeActionPage document from Prismic
 *
 * - **API ID**: `takeactionpage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TakeactionpageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<TakeactionpageDocumentData>, "takeactionpage", Lang>;
/** Content for TeamPage documents */
interface TeampageDocumentData {
    /**
     * Slice Zone field in *TeamPage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: teampage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<TeampageDocumentDataSlicesSlice>;
}
/**
 * Slice for *TeamPage → Slice Zone*
 *
 */
type TeampageDocumentDataSlicesSlice = TextSliceSlice;
/**
 * TeamPage document from Prismic
 *
 * - **API ID**: `teampage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TeampageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<TeampageDocumentData>, "teampage", Lang>;
export type AllDocumentTypes = AccordionitemDocument | BankpageDocument | BlogpostDocument | CalltoactionDocument | CertificationpageDocument | ContactpageDocument | DisclaimerpageDocument | FaqpageDocument | HomepageDocument | PledgepageDocument | PresspostDocument | PrivacypageDocument | TakeactionpageDocument | TeampageDocument;
/**
 * Primary content in AccordionSlice → Primary
 *
 */
interface AccordionSliceSliceRichTextPrimary {
    /**
     * Title field in *AccordionSlice → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: accordion_slice.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Content field in *AccordionSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: accordion_slice.primary.content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
}
/**
 * Rich Text variation for AccordionSlice Slice
 *
 * - **API ID**: `richText`
 * - **Description**: `AccordionSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AccordionSliceSliceRichText = prismicT.SharedSliceVariation<"richText", Simplify<AccordionSliceSliceRichTextPrimary>, never>;
/**
 * Primary content in AccordionSlice → Primary
 *
 */
interface AccordionSliceSliceRichTextWithStepPrimary {
    /**
     * Title field in *AccordionSlice → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: accordion_slice.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Content field in *AccordionSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: accordion_slice.primary.content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
    /**
     * Step field in *AccordionSlice → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: accordion_slice.primary.step
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    step: prismicT.KeyTextField;
}
/**
 * Rich Text With Step variation for AccordionSlice Slice
 *
 * - **API ID**: `richTextWithStep`
 * - **Description**: `AccordionSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AccordionSliceSliceRichTextWithStep = prismicT.SharedSliceVariation<"richTextWithStep", Simplify<AccordionSliceSliceRichTextWithStepPrimary>, never>;
/**
 * Primary content in AccordionSlice → Primary
 *
 */
interface AccordionSliceSliceDefaultPrimary {
    /**
     * ContentLink field in *AccordionSlice → Primary*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: accordion_slice.primary.contentlink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    contentlink: prismicT.RelationField;
}
/**
 * Content Link variation for AccordionSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `AccordionSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AccordionSliceSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<AccordionSliceSliceDefaultPrimary>, never>;
/**
 * Slice variation for *AccordionSlice*
 *
 */
type AccordionSliceSliceVariation = AccordionSliceSliceRichText | AccordionSliceSliceRichTextWithStep | AccordionSliceSliceDefault;
/**
 * AccordionSlice Shared Slice
 *
 * - **API ID**: `accordion_slice`
 * - **Description**: `AccordionSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AccordionSliceSlice = prismicT.SharedSlice<"accordion_slice", AccordionSliceSliceVariation>;
/**
 * Primary content in ButtonSlice → Primary
 *
 */
interface ButtonSliceSliceDefaultPrimary {
    /**
     * Label field in *ButtonSlice → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: button_slice.primary.label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
    /**
     * Link field in *ButtonSlice → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: button_slice.primary.link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Default variation for ButtonSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ButtonSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ButtonSliceSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ButtonSliceSliceDefaultPrimary>, never>;
/**
 * Slice variation for *ButtonSlice*
 *
 */
type ButtonSliceSliceVariation = ButtonSliceSliceDefault;
/**
 * ButtonSlice Shared Slice
 *
 * - **API ID**: `button_slice`
 * - **Description**: `ButtonSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ButtonSliceSlice = prismicT.SharedSlice<"button_slice", ButtonSliceSliceVariation>;
/**
 * Primary content in EmbedSlice → Primary
 *
 */
interface EmbedSliceSliceDefaultPrimary {
    /**
     * Target field in *EmbedSlice → Primary*
     *
     * - **Field Type**: Embed
     * - **Placeholder**: *None*
     * - **API ID Path**: embed_slice.primary.target
     * - **Documentation**: https://prismic.io/docs/core-concepts/embed
     *
     */
    target: prismicT.EmbedField;
}
/**
 * Default variation for EmbedSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `VideoBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EmbedSliceSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<EmbedSliceSliceDefaultPrimary>, never>;
/**
 * Slice variation for *EmbedSlice*
 *
 */
type EmbedSliceSliceVariation = EmbedSliceSliceDefault;
/**
 * EmbedSlice Shared Slice
 *
 * - **API ID**: `embed_slice`
 * - **Description**: `VideoBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EmbedSliceSlice = prismicT.SharedSlice<"embed_slice", EmbedSliceSliceVariation>;
/**
 * Primary content in ImageSlice → Primary
 *
 */
interface ImageSliceSliceDefaultPrimary {
    /**
     * Image field in *ImageSlice → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image_slice.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Caption field in *ImageSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: image_slice.primary.caption
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    caption: prismicT.RichTextField;
}
/**
 * Default variation for ImageSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `BlogImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ImageSliceSliceDefaultPrimary>, never>;
/**
 * Slice variation for *ImageSlice*
 *
 */
type ImageSliceSliceVariation = ImageSliceSliceDefault;
/**
 * ImageSlice Shared Slice
 *
 * - **API ID**: `image_slice`
 * - **Description**: `BlogImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceSlice = prismicT.SharedSlice<"image_slice", ImageSliceSliceVariation>;
/**
 * Default variation for SharePicGallerySlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `SharePicGallerySlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SharePicGallerySliceSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, never>;
/**
 * Slice variation for *SharePicGallerySlice*
 *
 */
type SharePicGallerySliceSliceVariation = SharePicGallerySliceSliceDefault;
/**
 * SharePicGallerySlice Shared Slice
 *
 * - **API ID**: `share_pic_gallery_slice`
 * - **Description**: `SharePicGallerySlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SharePicGallerySliceSlice = prismicT.SharedSlice<"share_pic_gallery_slice", SharePicGallerySliceSliceVariation>;
/**
 * Default variation for SocialSharerSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `SocialSharerSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SocialSharerSliceSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, never>;
/**
 * Slice variation for *SocialSharerSlice*
 *
 */
type SocialSharerSliceSliceVariation = SocialSharerSliceSliceDefault;
/**
 * SocialSharerSlice Shared Slice
 *
 * - **API ID**: `social_sharer_slice`
 * - **Description**: `SocialSharerSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SocialSharerSliceSlice = prismicT.SharedSlice<"social_sharer_slice", SocialSharerSliceSliceVariation>;
/**
 * Primary content in TextSlice → Primary
 *
 */
interface TextSliceSliceDefaultPrimary {
    /**
     * Text field in *TextSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_slice.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Default variation for TextSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TextSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSliceSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextSliceSliceDefaultPrimary>, never>;
/**
 * Slice variation for *TextSlice*
 *
 */
type TextSliceSliceVariation = TextSliceSliceDefault;
/**
 * TextSlice Shared Slice
 *
 * - **API ID**: `text_slice`
 * - **Description**: `TextSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSliceSlice = prismicT.SharedSlice<"text_slice", TextSliceSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { AccordionitemDocumentData, AccordionitemDocumentDataSlicesSlice, AccordionitemDocument, BankpageDocumentData, BankpageDocument, BlogpostDocumentData, BlogpostDocumentDataSlicesSlice, BlogpostDocument, CalltoactionDocumentData, CalltoactionDocument, CertificationpageDocumentData, CertificationpageDocumentDataSlicesSlice, CertificationpageDocument, ContactpageDocumentData, ContactpageDocument, DisclaimerpageDocumentData, DisclaimerpageDocumentDataSlicesSlice, DisclaimerpageDocument, FaqpageDocumentData, FaqpageDocumentDataSlicesSlice, FaqpageDocument, HomepageDocumentData, HomepageDocument, PledgepageDocumentData, PledgepageDocument, PresspostDocumentData, PresspostDocumentDataSlicesSlice, PresspostDocument, PrivacypageDocumentData, PrivacypageDocumentDataSlicesSlice, PrivacypageDocument, TakeactionpageDocumentData, TakeactionpageDocumentDataSlices1Slice, TakeactionpageDocumentDataSlices2Slice, TakeactionpageDocumentDataSlices3Slice, TakeactionpageDocumentDataSlices4Slice, TakeactionpageDocument, TeampageDocumentData, TeampageDocumentDataSlicesSlice, TeampageDocument, AllDocumentTypes, AccordionSliceSliceRichTextPrimary, AccordionSliceSliceRichText, AccordionSliceSliceRichTextWithStepPrimary, AccordionSliceSliceRichTextWithStep, AccordionSliceSliceDefaultPrimary, AccordionSliceSliceDefault, AccordionSliceSliceVariation, AccordionSliceSlice, ButtonSliceSliceDefaultPrimary, ButtonSliceSliceDefault, ButtonSliceSliceVariation, ButtonSliceSlice, EmbedSliceSliceDefaultPrimary, EmbedSliceSliceDefault, EmbedSliceSliceVariation, EmbedSliceSlice, ImageSliceSliceDefaultPrimary, ImageSliceSliceDefault, ImageSliceSliceVariation, ImageSliceSlice, SharePicGallerySliceSliceDefault, SharePicGallerySliceSliceVariation, SharePicGallerySliceSlice, SocialSharerSliceSliceDefault, SocialSharerSliceSliceVariation, SocialSharerSliceSlice, TextSliceSliceDefaultPrimary, TextSliceSliceDefault, TextSliceSliceVariation, TextSliceSlice };
    }
}
