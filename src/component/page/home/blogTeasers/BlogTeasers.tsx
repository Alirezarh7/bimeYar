export const BlogTeasers = () => {
  const posts = [
    {title: 'راهنمای کامل بیمه شخص ثالث', tag: 'آموزش'},
    {title: 'قسطی یا نقدی؟', tag: 'تحلیل'},
    {title: 'پوشش‌های کمتر شناخته‌شده بیمه بدنه', tag: 'نکات'},
  ]
  return (
    <section id="blog" className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold mb-6">از وبلاگ</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {posts.map((p, i) => (
          <article key={i} className="card p-4">
            <div className="mb-2 text-xs text-gray-500">{p.tag}</div>
            <h4 className="font-bold">{p.title}</h4>
            <button className="mt-3 text-primary">مطالعه</button>
          </article>
        ))}
      </div>
    </section>
  )
}
