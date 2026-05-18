import { HotelAccessGuard} from "@/components/auth/HotelAccessGuard";

export default function StrutturaLayout({ children}: { children: React.ReactNode}) {
  return <HotelAccessGuard>{children}</HotelAccessGuard>;
}
