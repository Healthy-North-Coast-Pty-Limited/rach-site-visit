export async function readJsonBody(response) {
  const raw = await response.text();
  if (!raw) return { data: {}, raw };
  try {
    return { data: JSON.parse(raw), raw };
  } catch {
    return { data: {}, raw };
  }
}
