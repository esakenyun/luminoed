export default async function postFormChromeBook(formData: FormData) {
  try {
    const url = "https://script.google.com/macros/s/AKfycbyV3LtRy1ynBkIADLlwfZQ7q72CDU0CcV5chPxvfsODsA2LfdrfgP3wsvwy-z_X0VF9/exec";

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
