import { z } from "zod";

export const blogPostBodySchema = z.object({
    title: z.string().min(1, "Title is required"),
    excerpt: z.string().min(1, "Excerpt is required"),
    readTime: z.number(),
    category: z.string().min(1, "Category is required"),
    likes: z.number().int().min(0).optional(),
    comments: z.number().int().min(0).optional(),
});


export const BlogValidation={
blogPostBodySchema
}