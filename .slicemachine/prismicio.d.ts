// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
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
type BlogpostDocumentDataSlicesSlice = BlogImageSlice | TextBlockSlice | VideoBlockSlice;
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
export type AllDocumentTypes = BlogpostDocument | ContactpageDocument;
/**
 * Primary content in EmbedBlock → Primary
 *
 */
interface VideoBlockSliceDefaultPrimary {
    /**
     * Target field in *EmbedBlock → Primary*
     *
     * - **Field Type**: Embed
     * - **Placeholder**: *None*
     * - **API ID Path**: video_block.primary.target
     * - **Documentation**: https://prismic.io/docs/core-concepts/embed
     *
     */
    target: prismicT.EmbedField;
}
/**
 * Default variation for EmbedBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `VideoBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type VideoBlockSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<VideoBlockSliceDefaultPrimary>, never>;
/**
 * Slice variation for *EmbedBlock*
 *
 */
type VideoBlockSliceVariation = VideoBlockSliceDefault;
/**
 * EmbedBlock Shared Slice
 *
 * - **API ID**: `video_block`
 * - **Description**: `VideoBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type VideoBlockSlice = prismicT.SharedSlice<"video_block", VideoBlockSliceVariation>;
/**
 * Primary content in ImageBlock → Primary
 *
 */
interface BlogImageSliceDefaultPrimary {
    /**
     * Image field in *ImageBlock → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: blog_image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Caption field in *ImageBlock → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog_image.primary.caption
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    caption: prismicT.RichTextField;
}
/**
 * Default variation for ImageBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `BlogImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BlogImageSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<BlogImageSliceDefaultPrimary>, never>;
/**
 * Slice variation for *ImageBlock*
 *
 */
type BlogImageSliceVariation = BlogImageSliceDefault;
/**
 * ImageBlock Shared Slice
 *
 * - **API ID**: `blog_image`
 * - **Description**: `BlogImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BlogImageSlice = prismicT.SharedSlice<"blog_image", BlogImageSliceVariation>;
/**
 * Primary content in TextBlock → Primary
 *
 */
interface TextBlockSliceDefaultPrimary {
    /**
     * Text field in *TextBlock → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_block.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TextBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextBlockSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextBlockSliceDefaultPrimary>, never>;
/**
 * Slice variation for *TextBlock*
 *
 */
type TextBlockSliceVariation = TextBlockSliceDefault;
/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: `TextBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextBlockSlice = prismicT.SharedSlice<"text_block", TextBlockSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { BlogpostDocumentData, BlogpostDocumentDataSlicesSlice, BlogpostDocument, ContactpageDocumentData, ContactpageDocument, AllDocumentTypes, VideoBlockSliceDefaultPrimary, VideoBlockSliceDefault, VideoBlockSliceVariation, VideoBlockSlice, BlogImageSliceDefaultPrimary, BlogImageSliceDefault, BlogImageSliceVariation, BlogImageSlice, TextBlockSliceDefaultPrimary, TextBlockSliceDefault, TextBlockSliceVariation, TextBlockSlice };
    }
}
