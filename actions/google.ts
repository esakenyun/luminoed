"use server";

export async function getGooglePickerConfig() {
  return {
    clientId: process.env.GOOGLE_CLIENT_ID,
    apiKey: process.env.GOOGLE_API_PICKER,
    appId: process.env.GOOGLE_APP_ID,
  };
}
