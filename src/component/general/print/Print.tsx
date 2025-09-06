import {useEffect, useRef} from "react";
import {useReactToPrint} from "react-to-print";


interface PrintProps {
    data: Record<string, string>;

}

const Print =({ data}:PrintProps) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef:contentRef });
    useEffect(() => {
        if (data) {
            reactToPrintFn();
        }
    }, [data]);

    const today = new Date().toLocaleDateString("fa-IR");
    return (
        <div  ref={contentRef} className=" p-8 max-w-3xl mx-auto bg-white text-black font-sans">
            {/* هدر */}
            <div className="flex justify-between items-center border-b-2 border-gray-400 pb-4 mb-6">
                <div className="text-sm text-gray-600">{today}</div>
                <div className="text-2xl font-bold text-center flex-grow">فرم اطلاعات</div>
                <img src="/image/Arm.png" alt="لوگو" className="w-16 h-16 object-contain" />
            </div>

            {/* محتوای اصلی */}
            <div className="space-y-4">
                {Object.entries(data).map(([key, value], index) => (
                    <div key={index} className="flex justify-between border-b border-dashed pb-1">
                        <span className="font-semibold">{key}:</span>
                        <span className="text-gray-800">{value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Print;
