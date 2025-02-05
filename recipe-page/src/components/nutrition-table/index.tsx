import { NUTRITION } from "@/utils/consts/nutrition";

export function NutritionTable() {
  return (
    <div>
      <h2 className="font-youngSerif text-brown-800 text-preset2 mb-300">
        Nutrition
      </h2>
      <p className="text-preset4 font-outfit text-stone-600 mb-300 text-left">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table className="w-full">
        <tbody>
          {NUTRITION.map((item, index) => (
            <tr key={index} className="border-b border-stone-150 font-outfit">
              <td className="px-400 pr-0 py-150 text-stone-600">
                {item.label}
              </td>
              <td className="px-400 py-150 text-preset4Bold text-brown-800">
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

