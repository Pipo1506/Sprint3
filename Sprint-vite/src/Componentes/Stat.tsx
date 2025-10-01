type StatProps = {
  label: string;
  value: string | number;
};

export default function Stat({ label, value }: StatProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <p className="text-2xl font-bold text-blue-600">{value}</p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}
