export default function FromBtn({ children, props, weight }) {
  return (
    <button
      type="submit"
      {...props}
      className={`mx-auto justify-center text-center rounded-xl bg-white/[.2] hover:bg-white duration-500 hover:text-black px-8 py-4 capitalize font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        weight ? "w-[" + weight + "]" : "w-full"
      }`}
    >
      {children}
    </button>
  );
}
