export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2 font-display font-semibold">
      <span
        className="flex h-9 w-9 items-center justify-center rounded-lg text-sm text-white"
        style={{ background: "linear-gradient(135deg, #0f2e7a, #1d6bf0)" }}
      >
        RD
      </span>
      <span className={dark ? "text-white" : "text-navy"}>
        RELATION <span className="text-blue">DIGITALE</span>
      </span>
    </span>
  );
}
