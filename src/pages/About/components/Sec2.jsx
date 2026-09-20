export default function Sec2() {
  return (
    <>
      <section className="py-20 bg-[#111111] border-y border-[#262626]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <span className="w-1.5 h-8 bg-linear-to-b from-orange-500 to-yellow-500 rounded-full" />
              قيمنا
              <span className="w-1.5 h-8 bg-linear-to-b from-yellow-500 to-orange-500 rounded-full" />
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative">
                <i className="fa-solid fa-bullseye text-4xl text-orange-500 mb-4 block" />
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  الجودة أولاً
                </h3>
                <p className="text-neutral-400 text-sm">
                  محتوى مدروس ومكتوب بخبرة
                </p>
              </div>
            </div>
            <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative">
                <i className="fa-solid fa-bolt text-4xl text-orange-500 mb-4 block" />
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  تركيز عملي
                </h3>
                <p className="text-neutral-400 text-sm">
                  أمثلة واقعية يمكنك تطبيقها اليوم
                </p>
              </div>
            </div>
            <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative">
                <i className="fa-solid fa-handshake text-4xl text-orange-500 mb-4 block" />
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  المجتمع
                </h3>
                <p className="text-neutral-400 text-sm">
                  تعلم مع آلاف المصورين
                </p>
              </div>
            </div>
            <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative">
                <i className="fa-solid fa-arrows-rotate text-4xl text-orange-500 mb-4 block" />
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  دائماً محدث
                </h3>
                <p className="text-neutral-400 text-sm">
                  أحدث الاتجاهات وأفضل الممارسات
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
