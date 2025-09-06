import {motion} from 'framer-motion'

type Item = { title: string; desc: string }

const items: Item[] = [
  {title: 'شخص ثالث خودرو', desc: 'اجباری برای دارندگان خودرو'},
  {title: 'بیمه بدنه', desc: 'پوشش خسارت بدنه'},
  {title: 'بیمه درمان تکمیلی', desc: 'پوشش هزینه‌های پزشکی'},
  {title: 'بیمه عمر و سرمایه‌گذاری', desc: 'پس‌انداز همراه با پوشش'},
]

export const Products = () => {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-14">
      <h2 className="text-2xl font-bold mb-6">انواع بیمه</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((p, i) => (
          <motion.div key={i} whileHover={{scale: 1.02}} className="card p-5 text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 grid place-items-center mx-auto mb-3 text-primary">آ
            </div>
            <h4 className="font-semibold">{p.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
