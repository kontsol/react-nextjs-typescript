import Image from "next/image";

// Typescript
// καθοριζει τον τυπο των props σε typescript
type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon: string;
  variant: string;
  full?: boolean;
};

// ----------------------------------------Destructing in typescript
const Button = ({type, title, icon, variant, full}: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      {/* αν υπαρχει icon τοτε ... */}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
