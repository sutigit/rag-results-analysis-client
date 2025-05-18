export default function SideBar() {
  return (
    <div className="min-w-sm border-r border-zinc-700 p-10">
      <h2>Overview</h2>
      <div className="flex flex-col gap-2">
        <p>Introduction</p>
        <p>Analysis</p>
      </div>
      <h2 className="mt-15">Test results</h2>
      <div className="flex flex-col gap-2">
        <p>ohtu-test-20.5.2025-11:53:59</p>
        <p>ohtu-test-20.5.2025-13:21:47</p>
      </div>
    </div>
  );
}
