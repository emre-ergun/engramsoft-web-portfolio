type SectionHeaderProps = {
  title: string;
  style?: string;
};

function SectionHeader({ title, style }: SectionHeaderProps) {
  return (
    <h2 className={`text-3xl font-medium capitalize mb-8 ${style}`}>{title}</h2>
  );
}

export default SectionHeader;
