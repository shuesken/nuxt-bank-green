export const useHeadHelper = (
  title,
  description
) => {
  if (title)
    useHead({
      title: title,
      meta: [
        {
          property: "og:title",
          content: title,
        },
        {
          name: "apple-mobile-web-app-title",
          content: title,
        },
        {
          name: "twitter:title",
          content: title,
        },
      ],
    });

  if (description)
    useHead({
      meta: [
        {
          name: "twitter:description",
          content: description,
        },
        { property: "og:description", content: description },
        {
          name: "description",
          content: description,
        },
      ],
    });
};
