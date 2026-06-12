export const sendBatch = async (
  batch: { events: any[]; apiKey: string },
  use_beacon?: boolean,
) => {
  const endpoint = `https://api.orbiiit.workers.dev/ingest`;
  if (batch.events.length === 0) return;

  const payload = JSON.stringify(batch);

  if (use_beacon && navigator.sendBeacon) {
    const blob = new Blob([payload], { type: 'text/plain' });
    navigator.sendBeacon(endpoint, blob);
    return;
  }

  try {
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: payload,
      keepalive: true,
    });
  } catch (e) {
    console.error('[Orbit] Failed to send batch', e);
  }
};
