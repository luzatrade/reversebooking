import { z } from "zod";

const e164Phone = /^\+[1-9]\d{7,14}$/;

export const emailSchema = z.string().email("Inserisci una email valida");
export const phoneSchema = z.string().regex(e164Phone, "Usa formato internazionale, es. +393331234567");

export const accountBaseSchema = z.object({
  email: emailSchema,
  phoneNumber: phoneSchema,
  password: z
    .string()
    .min(10, "La password deve avere almeno 10 caratteri")
    .regex(/[A-Za-z]/, "La password deve contenere almeno una lettera")
    .regex(/[0-9]/, "La password deve contenere almeno un numero"),
  termsAccepted: z.literal(true),
  privacyAccepted: z.literal(true),
  marketingAccepted: z.boolean().optional().default(false),
});

export const advertiserRegistrationSchema = accountBaseSchema.extend({
  role: z.literal("advertiser"),
  advertiserType: z.enum(["private_individual", "company", "travel_agency", "tour_operator"]),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  companyName: z.string().optional(),
  vatNumber: z.string().optional(),
  billingAddress: z.string().optional(),
  agencyName: z.string().optional(),
  operatorName: z.string().optional(),
  licenseNumber: z.string().optional(),
  websiteUrl: z.string().url().optional().or(z.literal("")),
  shortDescription: z.string().max(500).optional(),
});

export const hotelRegistrationSchema = accountBaseSchema.extend({
  role: z.literal("hotel"),
  structureType: z.enum(["hotel", "bed_and_breakfast", "apartment"]),
  propertyName: z.string().min(2),
  privateNotificationEmail: emailSchema,
  countryCode: z.string().min(2).max(3),
  countryName: z.string().min(2),
  cityName: z.string().min(1),
  cityId: z.string().min(1),
  fullAddress: z.string().min(5),
  roomsQuantity: z.coerce.number().int().positive(),
  cinCode: z.string().trim().min(5).transform((value) => value.toUpperCase()),
});

export const travelRequestSchema = z.object({
  countryCode: z.string().min(2).max(3),
  countryName: z.string().min(2),
  cityName: z.string().min(1),
  cityId: z.string().min(1),
  preferredArea: z.string().min(2),
  preferredStructureType: z.enum(["all", "hotel", "bed_and_breakfast", "apartment"]).default("all"),
  checkIn: z.string().min(10),
  checkOut: z.string().min(10),
  guestsCount: z.coerce.number().int().positive(),
  roomsCount: z.coerce.number().int().positive(),
  budget: z.coerce.number().positive(),
  mealPlan: z.enum(["room_only", "breakfast", "half_board", "full_board"]),
  notes: z.string().max(2000).optional(),
  visibleContactEmail: z.string().email().optional().or(z.literal("")),
  visibleContactPhone: z.string().optional(),
  visibleContactWhatsapp: z.string().optional(),
  visibleContactWebsite: z.string().url().optional().or(z.literal("")),
});

export const offerSchema = z.object({
  travelRequestId: z.string().uuid(),
  totalPrice: z.coerce.number().positive(),
  description: z.string().min(10).max(2000),
  conditions: z.string().max(2000).optional(),
  mealPlanIncluded: z.enum(["room_only", "breakfast", "half_board", "full_board"]),
  expiresAt: z.string().min(10),
});

export const visibleContactNotice =
  "Email e telefono dell’account restano privati: nell’annuncio compaiono solo i contatti inseriti manualmente.";
