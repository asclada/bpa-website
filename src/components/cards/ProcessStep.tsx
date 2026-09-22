export function ProcessStep({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative flex flex-1 flex-col gap-3 border-t border-border pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-6">
      <span className="font-heading text-sm text-accent-muted">{step}</span>
      <h3 className="font-heading text-lg font-bold text-text-primary">
        {title}
      </h3>
      <p className="text-sm text-text-secondary">{description}</p>
    </div>
  );
}
