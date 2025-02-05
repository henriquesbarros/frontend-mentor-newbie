import { INSTRUCTIONS } from "@/utils/consts/instructions";

export function InstructionsList() {
  return (
    <div className="pb-400 border-b border-stone-150 mb-400">
      <h2 className="font-youngSerif text-brown-800 text-preset2 mb-300">
        Instructions
      </h2>
      <ol className="flex flex-col pl-6 gap-100 text-stone-600 list-decimal font-outfit">
        {INSTRUCTIONS.map((instruction, index) => (
          <li key={index} className="recipe-list-decimal">
            <span className="text-preset4Bold">{instruction.label}</span>:{" "}
            {instruction.text}
          </li>
        ))}
      </ol>
    </div>
  );
}

