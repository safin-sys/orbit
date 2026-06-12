export const sendBatch = async (batch: { events: any[], apiKey: string }) => {
  const endpoint = `https://api.orbiiit.workers.dev/ingest`;

  if (batch.events.length === 0) return;

  const payload = JSON.stringify(batch);

  if (navigator.sendBeacon) {
    const blob = new Blob([payload], { type: 'text/plain' });
    if (navigator.sendBeacon(endpoint, blob)) {
      return;
    }
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
