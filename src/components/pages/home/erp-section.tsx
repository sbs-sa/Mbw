import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";

export const ERPSection: FC = () => {
  const erp = useTranslations("ERP");
  return (
    <div className="p-10 lg:p-20">
      <h1 className="text-center font-bold text-2xl md:text-4xl">
        {erp("title")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-10 p-10">
        <div className="border border-black p-4 flex flex-col items-center justify-center rounded-2xl border-opacity-50">
          <Image src="/assets/erp/crm.png" alt="crm" width={100} height={100} />
          <p>{erp("CRM")}</p>
        </div>
        <div className="border border-black p-4 flex flex-col items-center justify-center rounded-2xl border-opacity-50">
          <Image
            src="/assets/erp/sales.png"
            alt="sales"
            width={100}
            height={100}
          />
          <p>{erp("Sales")}</p>
        </div>
        <div className="border border-black p-4 flex flex-col items-center justify-center rounded-2xl border-opacity-50">
          <Image
            src="/assets/erp/accounting.png"
            alt="accounting"
            width={100}
            height={100}
          />
          <p>{erp("Accounting")}</p>
        </div>
        <div className="border border-black p-4 flex flex-col items-center justify-center rounded-2xl border-opacity-50">
          <Image
            src="/assets/erp/project.png"
            alt="projet"
            width={100}
            height={100}
          />
          <p>{erp("Project")}</p>
        </div>
        <div className="border border-black p-4 flex flex-col items-center justify-center rounded-2xl border-opacity-50">
          <Image
            src="/assets/erp/inventory.png"
            alt="inventory"
            width={100}
            height={100}
          />
          <p>{erp("Inventory")}</p>
        </div>
        <div className="border border-black p-4 flex flex-col items-center justify-center rounded-2xl border-opacity-50">
          <Image
            src="/assets/erp/purchase.png"
            alt="crm"
            width={100}
            height={100}
          />
          <p>{erp("Purchase")}</p>
        </div>
        <div className="border border-black p-4 flex flex-col items-center justify-center rounded-2xl border-opacity-50">
          <Image
            src="/assets/erp/website.png"
            alt="website"
            width={100}
            height={100}
          />
          <p>{erp("Website")}</p>
        </div>
        <div className="border border-black p-4 flex flex-col items-center justify-center rounded-2xl border-opacity-50">
          <Image
            src="/assets/erp/point-of-sale.png"
            alt="point-of-sales"
            width={100}
            height={100}
          />
          <p>{erp("Point of Sales")}</p>
        </div>
        <div className="border border-black p-4 flex flex-col items-center justify-center rounded-2xl border-opacity-50">
          <Image
            src="/assets/erp/manufacturing.png"
            alt="manufacturing"
            width={100}
            height={100}
          />
          <p>{erp("Manufacturing")}</p>
        </div>
        <div className="border border-black p-4 flex flex-col items-center justify-center rounded-2xl border-opacity-50">
          <Image
            src="/assets/erp/dashboard.png"
            alt="dashboard"
            width={100}
            height={100}
          />
          <p>{erp("Dashboard")}</p>
        </div>
      </div>
    </div>
  );
};
