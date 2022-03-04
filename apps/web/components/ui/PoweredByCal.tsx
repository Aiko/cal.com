import Link from "next/link";

import { useLocale } from "@lib/hooks/useLocale";

const PoweredByCal = () => {
  const { t } = useLocale();
  return (
    <div className="p-1 text-center text-xs sm:text-right">
      <Link href={`https://aiko.day?utm_source=embed&utm_medium=powered-by-button`}>
        <a target="_blank" className="text-gray-500 opacity-50 hover:opacity-100 dark:text-white">
          {t("powered_by")}{" "}
          <img
            className="relative -mt-px inline h-[10px] w-auto dark:hidden"
            src="https://aiko.day/logo.svg"
            alt="Aiko Day Logo"
          />
          <img
            className="relativ -mt-px hidden h-[10px] w-auto dark:inline"
            src="https://aiko.day/logo-white.svg"
            alt="Aiko Day Logo"
          />
        </a>
      </Link>
    </div>
  );
};

export default PoweredByCal;
