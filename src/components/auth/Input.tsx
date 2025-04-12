type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className="outline-0 bg-blue-900 font-light text-white rounded-md p-1 py-2 text-center shadow-md focus:shadow-gray-400 transition-all"
    />
  );
}
