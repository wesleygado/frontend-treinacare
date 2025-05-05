interface SectionHeaderProps {
  title: string;
  linkText: string;
  linkHref: string;
}

export default function SectionHeader({ title, linkText, linkHref }: SectionHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-primary text-2xl font-semibold">{title}</h2>
      <a href={linkHref} className="text-accent font-medium">
        {linkText}
      </a>
    </div>
  );
}
