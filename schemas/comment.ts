import { defineField, defineType } from "sanity";

export default defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    defineField({
      name: "approved",
      title: "Approved",
      type: "boolean",
      description: "Do you want this comment to appear on your blog or nah?",
    }),
    defineField({
      name: "post",
      type: "reference",
      to: { type: "post" },
    }),
    defineField({
      name: "commenterName",
      title: "Commenter Name",
      type: "string",
    }),
    defineField({
      name: "commenterEmail",
      title: "Commenter Email",
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
    defineField({
      name: "replies",
      title: "Replies",
      type: "array",
      of: [{ type: "reference", to: { type: "reply" } }],
    }),
  ],

  preview: {
    select: {
      author: "commenterName",
      _id: "_id",
    },
    prepare(selection) {
      const { _id, author } = selection;
      return { title: `Comment: ${_id}`, subtitle: author && `by ${author}` };
    },
  },
});
