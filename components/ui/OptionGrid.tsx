type Props = {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
};

export default function OptionGrid({
  options,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-3">

      {options.map((item) => (

        <button
          key={item}
          type="button"
          onClick={() => onSelect(item)}
          className={`
            card
            border
            transition-all
            duration-200

            ${
              selected === item
                ? "border-primary bg-primary text-primary-content"
                : "border-base-300 bg-base-100 hover:border-primary"
            }
          `}
        >

          <div className="card-body items-center p-5">

            <p className="font-semibold">
              {item}
            </p>

          </div>

        </button>

      ))}

    </div>
  );
}