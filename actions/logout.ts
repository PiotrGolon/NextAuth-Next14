"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  //tutaj można coś dodać np. usunięcie użytkownika zmiana credentiali and so on
  await signOut();
};
