import { INGREDIENTS } from "@/utils/consts/ingredients";

export function IngredientsList() {
  return (
    <div className="pb-400 border-b border-stone-150 mb-400">
        <h2 className="font-youngSerif text-brown-800 text-preset2 mb-300">
            Ingredients
        </h2>
        <ul className="flex flex-col gap-100 pl-2 font-outfit text-stone-600 text-preset4">
        {INGREDIENTS.map((ingredient, index) => (
            <li key={index} className="recipe-list-disc before:text-brown-800">
                {ingredient}
            </li>
        ))}
        </ul>
    </div>
  );
}
