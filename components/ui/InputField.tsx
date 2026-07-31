type Props = {
  label: string;
  placeholder?: string;
  value: string;
  type?: string;
  onChange: (value: string) => void;
};

export default function InputField({
  label,
  placeholder,
  value,
  type = "text",
  onChange,
}: Props) {
  return (
    <div>

      <label className="label">
        <span className="label-text font-semibold">
          {label}
        </span>
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

    </div>
  );
}