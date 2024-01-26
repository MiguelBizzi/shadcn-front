interface Props {
  w?: string;
  h?: string;
}
export function Logo({ w = "6", h = "6" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={`h-${h} w-${w} dark:text-white`}
    >
      <path fill="none" d="M0 0H256V256H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
        d="M208 128L128 208"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
        d="M192 40L40 192"
      />
    </svg>
  );
}
