import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string({ required_error: "Se necesita el nombre" })
    .min(2, { message: "minimo 2 caracteres" })
    .max(20, { message: "maximo 20 caracteres" }),

  lastname: z
    .string({ required_error: "El apellido es necesario" })
    .min(2, { message: "minimo 2 caracteres" })
    .max(20, { message: "maximo 20 caracteres" }),

  username: z
    .string({ required_error: "El usuario es necesario" })
    .min(2, { message: "minimo 2 caracteres" })
    .max(20, { message: "maximo 20 caracteres" }),

  email: z
    .string({ required_error: "Se necesita el correo" })
    .email({ message: "correo invalido" }),

  password: z
    .string({ required_error: "contraseña invalida" })
    .min(6, { message: "la contraseña debe contener minimo 8 caracteres"}),
});

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Correo es necesario" })
    .email({ message: "Correo invalido" })
    .optional(),

  username: z
    .string({ required_error: "Usuario necesario" })
    .optional(),

  password: z
  .string({required_error: "Usuario necesario"}).min(6),
});

