import type { ValidSizes } from "@/interfaces";
import clsx from "clsx";

interface Props {
  selectedSize: ValidSizes;
  availableSizes: ValidSizes[];
}
export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>

      <div className="flex">
        {availableSizes.map((size) => (
          <button
            key={size}
            className="relative mx-2 text-lg"
          >
            {/* Texto normal, siempre visible */}
            <span className={clsx("hover:font-semibold hover:underline absolute left-0 right-0", { "invisible": size === selectedSize })}>
              {size}
            </span>
            {/* Texto en bold, visible solo cuando está seleccionado */}
            <span className={clsx({ "font-bold underline": size === selectedSize })}>
              {size}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
