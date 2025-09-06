
import { motion } from 'framer-motion'

type Row = { company: string; price: string; rating: number; extra: string }

const rows: Row[] = [
  { company: 'بیمه ایران', price: '۲,۱۲۰,۰۰۰', rating: 4.8, extra: 'خسارت سیل' },
  { company: 'بیمه آسیا', price: '۱,۹۸۰,۰۰۰', rating: 4.6, extra: 'پوشش بلایای طبیعی' },
  { company: 'پاسارگاد', price: '۱,۸۵۰,۰۰۰', rating: 4.5, extra: 'خودرو جایگزین' },
]

export const Comparison = () => {
  return (
    <section id="compare" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-4">مقایسه شرکت‌ها</h2>
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-primary-50">
            <tr>
              <th className="p-3 text-right">شرکت</th>
              <th className="p-3 text-right">قیمت</th>
              <th className="p-3 text-right">امتیاز</th>
              <th className="p-3 text-right">مزیت</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <motion.tr key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                <td className="p-3">{r.company}</td>
                <td className="p-3">{r.price}</td>
                <td className="p-3">{r.rating}</td>
                <td className="p-3">{r.extra}</td>
                <td className="p-3 text-left"><button className="px-3 py-1 rounded-full bg-primary text-white">انتخاب</button></td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-2">* ارقام نمونه هستند</p>
    </section>
  )
}
