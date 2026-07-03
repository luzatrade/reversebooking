import L from "leaflet";

const PIN_COLOR = "#f97316";
const PIN_STROKE = "#ffffff";

export function createHotelPinIcon(): L.DivIcon {
  return L.divIcon({
    className: "hd-hotel-pin-icon",
    html: `<div class="hd-hotel-pin" aria-hidden="true">
      <svg width="44" height="56" viewBox="0 0 44 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22 2C12.06 2 4 10.06 4 20c0 11.2 18 33 18 33s18-21.8 18-33C40 10.06 31.94 2 22 2Z"
          fill="${PIN_COLOR}"
          stroke="${PIN_STROKE}"
          stroke-width="2.5"
        />
        <circle cx="22" cy="20" r="10" fill="${PIN_STROKE}" />
        <path
          d="M17.5 23.5v-5.25c0-.69.56-1.25 1.25-1.25h5.5c.69 0 1.25.56 1.25 1.25V23.5M16.25 23.5h11.5v2.75a1.25 1.25 0 0 1-1.25 1.25h-9a1.25 1.25 0 0 1-1.25-1.25v-2.75Z"
          stroke="${PIN_COLOR}"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>`,
    iconSize: [44, 56],
    iconAnchor: [22, 56],
  });
}
