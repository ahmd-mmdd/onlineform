type Props = {
  label: string;
  value: string;
  placeholder?: string;
  rows?: number;
  onChange: (value: string) => void;
};

export default function TextAreaField({
  label,
  value,
  placeholder,
  rows = 6,
  onChange,
}: Props) {
  return (
    <div>

      <label className="label">
        <span className="label-text font-semibold">
          {label}
        </span>
      </label>

      <textarea
        rows={rows}
        className="textarea textarea-bordered w-full"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

    </div>
  );
}