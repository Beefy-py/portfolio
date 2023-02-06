import { defineField, defineType } from "sanity";

export default defineType({
  name: "reply",
  title: "Reply",
  type: "document",
  fields: [
    defineField({
      name: "approved",
      title: "Approved",
      type: "boolean",
      description:
        "Do you want the reply to this comment to appear on your blog or nah?",
    }),
    defineField({
      name: "comment",
      type: "reference",
      to: [{ type: "comment" }],
    }),
    defineField({
      name: "replierName",
      title: "Replier Name",
      type: "string",
    }),
    defineField({
      name: "replierEmail",
      title: "Replier Email",
      type: "string",
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "string",
    }),
  ],

  preview: {
    select: {
      comment: "comment",
      author: "replierName",
    },
    prepare(selection) {
      const { comment, author } = selection;
      return {
        title: `reply to comment: ${comment._ref}`,
        subtitle: author && `by ${author}`,
      };
    },
  },
});
