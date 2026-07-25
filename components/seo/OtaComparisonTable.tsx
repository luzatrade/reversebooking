type Props = {
  locale: "it" | "en";
};

type Row = {
  feature: string;
  hotelsdrop: string;
  ota: string;
};

export function OtaComparisonTable({ locale }: Props) {
  const title = locale === "en" ? "HotelsDrop vs traditional OTAs" : "HotelsDrop vs portali OTA tradizionali";
  const headers =
    locale === "en"
      ? { feature: "Feature", hotelsdrop: "HotelsDrop", ota: "Traditional OTAs" }
      : { feature: "Aspetto", hotelsdrop: "HotelsDrop", ota: "Portali OTA tradizionali" };

  const rows: Row[] =
    locale === "en"
      ? [
          { feature: "Traveller booking commission", hotelsdrop: "None", ota: "Often included in price" },
          { feature: "Direct contact with property", hotelsdrop: "Yes — email, phone, WhatsApp", ota: "Limited or none" },
          { feature: "Personalised offers", hotelsdrop: "Properties compete with tailored proposals", ota: "Fixed public rates" },
          { feature: "Group & agency requests", hotelsdrop: "One request to all matching properties", ota: "Manual search per property" },
          { feature: "Relationship building", hotelsdrop: "Real dialogue, future collaborations", ota: "Anonymous traffic" },
        ]
      : [
          { feature: "Commissione per chi viaggia", hotelsdrop: "Nessuna", ota: "Spesso inclusa nel prezzo" },
          { feature: "Contatto diretto con la struttura", hotelsdrop: "Sì — email, telefono, WhatsApp", ota: "Limitato o assente" },
          { feature: "Offerte personalizzate", hotelsdrop: "Le strutture competono con proposte su misura", ota: "Tariffe pubbliche fisse" },
          { feature: "Richieste gruppo e agenzie", hotelsdrop: "Una richiesta a tutte le strutture compatibili", ota: "Ricerca manuale hotel per hotel" },
          { feature: "Relazione duratura", hotelsdrop: "Dialogo reale, collaborazioni future", ota: "Traffico anonimo" },
        ];

  return (
    <section className="mt-8 sm:mt-10" aria-labelledby="ota-comparison-title">
      <h2 id="ota-comparison-title" className="text-lg font-semibold text-zinc-950 sm:text-xl">
        {title}
      </h2>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-zinc-200">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-zinc-50 text-xs uppercase tracking-wide text-zinc-500">
            <tr>
              <th className="px-4 py-3 font-semibold">{headers.feature}</th>
              <th className="px-4 py-3 font-semibold text-[#0f4c81]">{headers.hotelsdrop}</th>
              <th className="px-4 py-3 font-semibold">{headers.ota}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 bg-white">
            {rows.map((row) => (
              <tr key={row.feature}>
                <th scope="row" className="px-4 py-3 font-medium text-zinc-900">
                  {row.feature}
                </th>
                <td className="px-4 py-3 text-zinc-700">{row.hotelsdrop}</td>
                <td className="px-4 py-3 text-zinc-500">{row.ota}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
