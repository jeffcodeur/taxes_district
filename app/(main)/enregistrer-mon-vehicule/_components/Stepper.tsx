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
            className={`flex-1 rounded-4xl px-5 py-4 text-center text-xs font-bold sm:text-sm ${
              currentStep >= step.id
                ? "bg-primary text-white"
                : "bg-[#B8D7EB] text-white"
            }`}
          >
            {step.label}
          </div>
          {step.id < steps.length && (
            <div
              className={`h-1 w-8 shrink-0 ${
                currentStep > step.id ? "bg-primary" : "bg-[#B8D7EB]"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
