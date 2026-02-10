export default async function getStokData() {
  try {
    const url = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL_STOK;

    if (!url) {
      throw new Error(
        "Env NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL_STOK belum diset",
      );
    }

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Fetch gagal: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data.value;
  } catch (error) {
    console.error("Error getStokData2:", error);
    return null; // atau [] / throw error lagi, sesuai kebutuhan
  }
}
