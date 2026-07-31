import { ChevronLeft, ChevronRight, Send } from "lucide-react";

type Props = {
  step: number;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
};

export default function NavigationButtons({
  step,
  onBack,
  onNext,
  onSubmit,
}: Props) {
  return (
    <div className="flex justify-between">

      <button
        type="button"
        className="btn btn-outline"
        disabled={step === 1}
        onClick={onBack}
      >
        <ChevronLeft size={18} />
        Kembali
      </button>

      {step < 3 ? (
        <button
          type="button"
          className="btn btn-primary"
          onClick={onNext}
        >
          Lanjut
          <ChevronRight size={18} />
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-primary"
          onClick={onSubmit}
        >
          <Send size={18} />
          Kirim ke WhatsApp
        </button>
      )}

    </div>
  );
}