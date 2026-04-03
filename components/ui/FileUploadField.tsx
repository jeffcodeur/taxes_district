interface FileUploadFieldProps {
  id: string;
  label: string;
  accept?: string;
  onChange?: (file: File | null) => void;
  className?: string;
  customizableText?: string;
}

export default function FileUploadField({ 
  id, 
  label, 
  accept,
  onChange,
  className = "",
  customizableText = "votre carte" 
}: FileUploadFieldProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange?.(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0] || null;
    onChange?.(file);
  };

  return (
    <div className={className}>
      <label className="text-sm font-bold sm:text-xl mb-4 block">{label}</label>
      <div 
        className="flex items-center justify-center rounded-xl p-8 text-center cursor-pointer hover:bg-gray-100 transition-colors bg-[#F3F3F3] h-[137px]"
        onClick={() => document.getElementById(id)?.click()}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-sm sm:text-xl text-gray-700">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
            <span>Cliquez ici pour joindre <span className="font-semibold text-gray-700">{customizableText}</span></span>
          </div>
          <span className="hidden sm:inline text-gray-400">ou glissez-déposer</span>
        </div>

        <input
          type="file"
          id={id}
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
}
