export default async function postFormChromeBook(formData: FormData) {
     try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbzaSFh5GIlf9Bcoou1KYA8UxZajUwCJUhPYPgIAIcfWDxErQ9H5KDNS1HqKcUfQ8ILD8w/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    if (res.ok) {
        return { success: true };
    } else {
        return { success: false, error: "Failed to submit" };
    }
    } catch (error) {
        return { success: false, error: (error as Error).message };
    }
}