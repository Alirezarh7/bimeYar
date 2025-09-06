import {motion} from 'framer-motion'

export const SellerCTA = () => {
  return (
    <section id="seller" className="max-w-6xl mx-auto px-6 py-12">
      <motion.div initial={{opacity: 0, y: 8}} animate={{opacity: 1, y: 0}}
                  className="grid lg:grid-cols-2 gap-6 items-center card p-6">
        <div>
          <h3 className="text-2xl font-bold text-primary">همکاری در فروش</h3>
          <p className="mt-2 text-gray-600">بدون نیاز به دفتر، از خانه فروش بیمه داشته باشید و کارمزد هفتگی دریافت
            کنید.</p>
          <div className="mt-4 flex gap-3">
            <button className="rounded-full px-4 py-2 bg-primary text-white">شروع همکاری</button>
            <button className="rounded-full px-4 py-2 border border-primary text-primary bg-white">راهنما</button>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-lg bg-primary/10 grid place-items-center">
          <div className="text-center text-primary">ماکت داشبورد فروشندگان</div>
        </div>
      </motion.div>
    </section>
  )
}
