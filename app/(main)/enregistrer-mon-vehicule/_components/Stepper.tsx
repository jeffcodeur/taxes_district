interface Step {
  id: number;
  label: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="mx-auto flex w-full max-w-4xl items-center px-4 py-6 sm:px-6">
      {steps.map((step) => (
        <div key={step.id} className="flex flex-1 items-center">
          <div
            className={`flex-1 rounded-4xl px-3 py-3 text-center text-[10px] font-bold sm:px-5 sm:py-4 sm:text-sm ${
              currentStep >= step.id
                ? "bg-primary text-white"
                : "bg-[#B8D7EB] text-white"
            }`}
          >
            {step.label}
          </div>
          {step.id < steps.length && (
            <div
              className={`h-1 w-3 sm:w-8 shrink-0 ${
                currentStep > step.id ? "bg-primary" : "bg-[#B8D7EB]"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
