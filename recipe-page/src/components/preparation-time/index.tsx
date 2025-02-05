import { PREPARATION_TIME } from "@/utils/consts/preparation-time";

export function PreparationTime() {
  return (
    <div className="flex flex-col w-full bg-rose-50 rounded-xl p-300 font-outfit mb-400">
      <p className="text-preset3 text-rose-800 mb-200">Preparation time</p>
      <ul className="flex flex-col gap-100 pl-2 text-stone-600">
        {PREPARATION_TIME.map((item, index) => (
          <li key={index} className="recipe-list-disc before:text-rose-800">
            <span className="text-preset4Bold">{item.label}</span>: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

