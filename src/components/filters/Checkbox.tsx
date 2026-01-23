export function Checkbox({ label }: { label: string }) {
  return (
    <label className="flex items-center gap-2 text-sm cursor-pointer">
      <input type="checkbox" className="accent-rosebrown-600" />
      {label}
    </label>
  )
}
