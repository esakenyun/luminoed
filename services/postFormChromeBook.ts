export default async function postFormChromeBook(formData: FormData) {
  try {
    const url = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;

    if (!url) {
      throw new Error("Apps Script URL belum diset di ENV");
    }

    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      return { success: false, error: "Failed to submit" };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}
//update foto