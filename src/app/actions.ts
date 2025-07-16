'use server'

//import { generateFollowUpMessage, GenerateFollowUpMessageInput } from '@/ai/flows/generate-follow-up-message';
import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  email: z.string().email('Por favor, introduce un email válido.'),
  phone: z
    .string()
    .min(5, 'Por favor, introduce un número de teléfono válido.'),
  comment: z.string().optional(),
})

export type FormState = {
  message: string
  fields?: Record<string, string>
  issues?: string[]
  followUpMessage?: string
  success?: boolean
}

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    comment: formData.get('comment'),
  })

  if (!validatedFields.success) {
    const issues = validatedFields.error.issues.map((issue) => issue.message)
    return {
      message: 'Por favor, corrige los errores en el formulario.',
      issues,
      fields: {
        name: formData.get('name')?.toString() ?? '',
        email: formData.get('email')?.toString() ?? '',
        phone: formData.get('phone')?.toString() ?? '',
        comment: formData.get('comment')?.toString() ?? '',
      },
      success: false,
    }
  }

  return {
    message: '¡Gracias por tu mensaje! Nos pondremos en contacto pronto.',
    fields: {
      name: formData.get('name')?.toString() ?? '',
      email: formData.get('email')?.toString() ?? '',
      phone: formData.get('phone')?.toString() ?? '',
      comment: formData.get('comment')?.toString() ?? '',
    },
    success: true,
  }

  // try {
  //   const aiInput: GenerateFollowUpMessageInput = {
  //     ...validatedFields.data,
  //     comment: validatedFields.data.comment || 'Sin comentarios.',
  //   };

  //   //const result = await generateFollowUpMessage(aiInput);

  //   return {
  //     message: '¡Gracias por tu mensaje! Nos pondremos en contacto pronto.',
  //     followUpMessage: result.followUpMessage,
  //     success: true,
  //   };
  // } catch (error) {
  //   console.error(error);
  //   return {
  //     message: 'Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo.',
  //     success: false,
  //   };
  // }
}
