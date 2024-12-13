import { useTranslations } from "next-intl";

export default function SoftwareTestingPage() {
  const softwareTesting = useTranslations("Software Testing Page");
  const planning = useTranslations("Planning and Strategy");
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold uppercase text-center">
        {softwareTesting("title")}
      </h1>
      <div className="w-full space-y-10 mt-10">
        <div className="space-y-5">
          <p>{softwareTesting("first para")}</p>
          <p>{softwareTesting("second para")}</p>
        </div>
        <div className="space-y-5">
          <h1 className="text-2xl font-bold uppercase">{planning("title")}</h1>
          <ul className="list-disc p-4 space-y-3">
            <li>{planning("research")}</li>
            <li>{planning("marketing")}</li>
            <li>{planning("consulting")}</li>
          </ul>
        </div>
        <div className="space-y-5">
          <p>{softwareTesting("third para")}</p>
          <p>{softwareTesting("fourth para")}</p>
        </div>
      </div>
    </div>
  );
}
