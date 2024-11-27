import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
    onclick_function?: () => void;
}

const Button = ({ type, title, icon, variant, full, onclick_function }: ButtonProps) => {
    return (
        <button
            type={type}
            title={title}
            className={`flexCenter gap-3 rounded-full border ${variant}
            ${full && 'w-[200px] h-[50px]'}`}
            onClick={onclick_function}
        >
            { icon && <Image src={icon} alt={title} width={24} height={24} /> }
            <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
        </button>
    );
};

export default Button;
