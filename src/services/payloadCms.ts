const API_BASE_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL;

export const fetchActivities = async () => {
  const res = await fetch(`${API_BASE_URL}/api/activities`);
  if (!res.ok) throw new Error('Failed to fetch activities');
  return res.json();
};