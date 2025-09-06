export const FAQ = () => {
  const faqs = [
    {q: 'چطور بهترین شرکت را انتخاب کنم؟', a: 'مقایسه قیمت، پوشش و فرانشیز'},
    {q: 'امکان پرداخت اقساطی وجود دارد؟', a: 'بله، هنگام پرداخت می‌توانید قسطی انتخاب کنید'},
    {q: 'صدور بیمه‌نامه چقدر طول می‌کشد؟', a: 'معمولاً بلافاصله (آنلاین) صادر می‌شود'},
  ]
  return (
    <section id="faq" className="max-w-4xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold mb-6">سوالات متداول</h3>
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <details key={i} className="card p-4">
            <summary className="font-semibold cursor-pointer">{f.q}</summary>
            <div className="text-gray-600 mt-2">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  )
}
