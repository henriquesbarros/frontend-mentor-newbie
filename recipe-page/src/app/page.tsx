import { IngredientsList } from "@/components/ingredients-list";
import { InstructionsList } from "@/components/instructions-list";
import { NutritionTable } from "@/components/nutrition-table";
import { PreparationTime } from "@/components/preparation-time";
import { RecipeImage } from "@/components/recipe-image";

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-stone-150">
      <div className="bg-white md:max-w-[616px] lg:max-w-[736px] md:my-1600 md:rounded-3xl">
        <RecipeImage
          src="/image-omelette.webp"
          alt="Recipe image"
          className="w-full md:px-500 md:pt-500 md:rounded-xl"
        />

        <div className="flex flex-col py-500 px-400 md:px-500">
          <h1 className="text-preset1 font-youngSerif mb-300 text-stone-900">
            Simple Omelette Recipe
          </h1>
          <p className="text-preset4 font-outfit text-left text-stone-600 mb-400">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <PreparationTime />
          <IngredientsList />
          <InstructionsList />
          <NutritionTable />
        </div>
      </div>
    </main>
  );
}





















































