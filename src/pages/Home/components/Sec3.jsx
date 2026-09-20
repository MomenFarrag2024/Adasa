import { Link } from "react-router-dom";

export default function Sec3({ data }) {
  const categoryStyles = {
    إضاءة: {
      icon: "fa-sun",
      gradient: "from-orange-500 to-yellow-500",
    },
    بورتريه: {
      icon: "fa-user",
      gradient: "from-orange-600 to-orange-400",
    },
    "مناظر طبيعية": {
      icon: "fa-mountain-sun",
      gradient: "from-orange-500 to-yellow-500",
    },
    تقنيات: {
      icon: "fa-sliders",
      gradient: "from-orange-500 to-yellow-500",
    },
    معدات: {
      icon: "fa-sun",
      gradient: "from-orange-500 to-yellow-500",
    },
  };

  return (
    <>
      <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="before:content-[''] before:block before:h-1.5 before:w-1.5 before:bg-orange-500 before:rounded-full before:animate-pulse items-center gap-2 px-4 py-2 text-sm font-medium text-orange-500 bg-orange-500/10 border border-orange-500/30 rounded-full inline-flex mb-4">
              <span className="relative flex h-2 w-2 ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
              التصنيفات
            </span>
            <h2 className="text-4xl leading-tight font-bold lg:text-6xl text-white">
              استكشف حسب الموضوع
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-400 max-w-lg mx-auto">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {data.categories.map((category, index) => {
              const style = categoryStyles[category.name];
              return (
                <Link
                  key={category.name}
                  className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
                  to={`/blog?category=${encodeURIComponent(category.name)}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${style?.gradient || "from-orange-500 to-yellow-500"} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                      <i
                        className={`fa-solid ${style?.icon || "fa-sun"} text-xl text-orange-500 group-hover:text-white transition-colors duration-300`}
                      />
                    </div>
                    <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                      {category.count} مقالة
                    </p>
                    <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                      <i className="fa-solid fa-chevron-right w-4 h-4 text-white rotate-180" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
