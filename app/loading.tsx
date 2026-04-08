export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#0a1a3a] z-50">

            <div className="flex flex-col items-center gap-4">

                <div className="w-40 h-1 bg-gray-700 overflow-hidden">
                    <div className="h-full bg-green-500 animate-[loading_1.5s_infinite]" />
                </div>
            </div>

        </div>
    );
}