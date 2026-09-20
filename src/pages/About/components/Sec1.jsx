export default function Sec1() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-sm font-medium text-orange-500 inline-flex items-center gap-2 mb-6 before:content-[''] before:block before:h-1.5 before:w-1.5 before:bg-orange-500 before:rounded-full before:animate-pulse">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}/>
            من نحن
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            مهمتنا هي <span className="bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">الإعلام والإلهام</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
            ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
            المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="rounded-3xl bg-[#161616]/80 border border-[#262626] p-6">
              <i className="fa-solid fa-users text-2xl text-orange-500 mb-2 block" />
              <div className="text-3xl font-bold bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent mb-1">
                +2مليون
              </div>
              <div className="text-sm text-neutral-500">قارئ شهرياً</div>
            </div>
            <div className="rounded-3xl bg-[#161616]/80 border border-[#262626] p-6">
              <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-2 block" />
              <div className="text-3xl font-bold bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent mb-1">+500</div>
              <div className="text-sm text-neutral-500">مقالة منشورة</div>
            </div>
            <div className="rounded-3xl bg-[#161616]/80 border border-[#262626] p-6">
              <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-2 block" />
              <div className="text-3xl font-bold bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent mb-1">+50</div>
              <div className="text-sm text-neutral-500">كاتب خبير</div>
            </div>
            <div className="rounded-3xl bg-[#161616]/80 border border-[#262626] p-6">
              <i className="fa-solid fa-book-open text-2xl text-orange-500 mb-2 block" />
              <div className="text-3xl font-bold bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent mb-1">+15</div>
              <div className="text-sm text-neutral-500">تصنيف</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
