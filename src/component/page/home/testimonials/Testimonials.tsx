import {motion} from 'framer-motion'

export const Testimonials = () => {
  const items = [
    {name: 'نازنین', text: 'بسیار سریع و آسان'},
    {name: 'حسین', text: 'پشتیبانی عالی'},
    {name: 'لیلا', text: 'پرداخت قسطی عالی بود'},
  ]
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold mb-6">نظرات کاربران</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((t, i) => (
          <motion.div key={i} initial={{opacity: 0, y: 6}} animate={{opacity: 1, y: 0}} transition={{delay: i * 0.06}}
                      className="card p-5">
            <div className="text-amber-500 mb-3">★★★★★</div>
            <p className="text-sm">{t.text}</p>
            <div className="text-xs text-gray-500 mt-3">— {t.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
