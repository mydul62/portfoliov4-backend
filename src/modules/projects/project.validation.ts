import { z } from "zod"

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  technologies: z.array(z.string().min(1, "Technology cannot be empty")),
  liveLink: z.string().url("Live link must be a valid URL").optional().or(z.literal("")),
  codeLink: z.string().url("Code link must be a valid URL").optional().or(z.literal("")),
  info: z.string().optional().or(z.literal("")),
})



export const ProjectValidation={
projectSchema
}