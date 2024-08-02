import Link from "next/link";

const LinkWithChevron = ({
    href,
    children,
    Icon,
}: {
    href: string;
    children?: string;
    Icon?: React.FC<any>;
}) => {
    return (
        <Link
            className="text-sm flex font-semibold text-[#667185] leading-[23.2px]"
            href={href}
        >
            <span>{children}</span>
            {Icon && <Icon />}
        </Link>
    );
};

export default LinkWithChevron;
