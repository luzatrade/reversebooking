type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function SeoImage({ src, alt, className, priority = false, sizes = "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- SEO cards use stable external URLs; lazy native img keeps LCP predictable.
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      sizes={sizes}
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
