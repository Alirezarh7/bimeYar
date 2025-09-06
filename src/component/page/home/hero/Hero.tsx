import {motion} from 'framer-motion'
import {QuoteMiniCard} from "./QuoteMiniCard.tsx";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-8 items-center">
        <motion.div initial={{opacity: 0, y: 12}} animate={{opacity: 1, y: 0}} transition={{duration: 0.6}}>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 text-primary text-sm font-semibold">مقایسه
            هوشمند
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-primary leading-tight">خرید آنلاین بیمه با
            پشتیبانی واقعی و صدور آنی</h1>
          <p className="mt-4 text-gray-600">از بین چندین شرکت بیمه، قیمت و پوشش مناسب را انتخاب کنید. امکان پرداخت
            اقساطی و صدور دیجیتال.</p>

          <div className="mt-8 flex gap-4">
            <a href="#quote"
               className="rounded-full px-6 py-3 bg-primary text-white shadow hover:scale-[1.02] transform transition">استعلام
              فوری</a>
            <a href="#compare" className="rounded-full px-6 py-3 border border-primary text-primary bg-white shadow-sm">مقایسه
              شرکت‌ها</a>
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm">
            <div className="flex items-center gap-2 text-amber-500">
              <div className="text-amber-400">★ ★ ★ ★ ★</div>
            </div>
            <div className="text-gray-500">۴.۹ از ۵ — بیش از ۱۲٬۳۰۰ نظر</div>
          </div>
        </motion.div>

        <motion.div initial={{opacity: 0, y: 18}} animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.7, delay: 0.05}}>
          <div className="card p-6">
            <QuoteMiniCard/>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
