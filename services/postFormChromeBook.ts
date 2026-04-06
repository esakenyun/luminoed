export default async function postFormChromeBook(formData: FormData) {
  try {
    const url = "https://script.google.com/macros/s/AKfycbwLQqRy1txrubCeOk61VSV6OVcWfd2C-F1CZ9VhGxKI8fWoJDuL67wsn61PBZjQCpic1A/exec";

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