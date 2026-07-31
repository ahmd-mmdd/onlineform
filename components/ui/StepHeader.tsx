type Props = {
  step: number;
};

export default function StepHeader({ step }: Props) {
  return (
    <ul className="steps steps-horizontal w-full my-6">

      <li className={`step ${step >= 1 ? "step-primary" : ""}`}>
        Informasi
      </li>

      <li className={`step ${step >= 2 ? "step-primary" : ""}`}>
        Detail
      </li>

      <li className={`step ${step >= 3 ? "step-primary" : ""}`}>
        Review
      </li>

    </ul>
  );
}