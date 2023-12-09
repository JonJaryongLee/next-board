import NavLinks from "@/app/ui/nav-links";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

/**
 * TODO:
 * - md:block, md:hidden 에 대한 설명 필요함
 */
export default function SideNav() {
  return (
    <div className="fixed inset-y-0 left-0 flex flex-col items-center justify-center h-full w-64 bg-gray-100">
      <GlobeAltIcon className="h-10 w-10 mb-2" />
      <NavLinks />
    </div>
  );
}
