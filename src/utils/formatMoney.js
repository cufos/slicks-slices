const formatter = Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'EUR',
});

export default function formatMoney(cents) {
  return formatter.format(cents / 100);
}

