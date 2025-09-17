export default function ComparisonTable() {
    const products = ["محصول A", "محصول B", "محصول C"];

    const features = [
        { name: "قیمت", values: ["۵۰۰ هزار", "۶۰۰ هزار", "۷۰۰ هزار"] },
        { name: "تخفیف", values: ["۵۰۰ هزار", "۶۰۰ هزار", "۷۰۰ هزار"] },
        { name: "تعداد شعبه", values: ["خیلی خوب", "متوسط", "خوب"] },
        { name: "خرید قسطی", values: ["مشکی", "سفید", "آبی"] },
    ];

    return (
        <div className="overflow-x-auto px-2 ">
            <table className="min-w-full border border-primary ">
                <thead className="bg-card">
                <tr>
                    <th className="px-4 py-3 w-fit text-right text-sm font-semibold text-card-foreground border-b border-primary ">
                        موارد مقایسه
                    </th>
                    {products.map((product, i) => (
                        <th
                            key={i}
                            className="px-6 py-3 w-fit text-center text-sm font-semibold text-card-foreground border-b border-primary"
                        >
                            {product}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody className="bg-card divide-y divide-primary w-full">
                {features.map((feature, i) => (
                    <tr key={i}>
                        <td className="px-4 w-fit py-3 text-sm font-medium text-nowrap text-right text-secondary bg-background">
                            {feature.name}
                        </td>
                        {feature.values.map((val, j) => (
                            <td
                                key={j}
                                className="px-6 py-3 w-fit text-sm text-nowrap text-center text-card-foreground"
                            >
                                {val}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}