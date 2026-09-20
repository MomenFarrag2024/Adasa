import { Link } from "react-router-dom";

export default function Sec2({ data }) {
  return (
    <>
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-orange-500/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="before:content-[''] before:h-1.5 before:w-1.5 before:bg-orange-500 before:rounded-full before:animate-pulse items-center gap-2 px-4 py-2 text-sm font-medium text-orange-500 bg-orange-500/10 border border-orange-500/30 rounded-full inline-flex mb-4">
                <span className="relative flex h-2 w-2 ml-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                مميز
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl leading-tight font-bold text-white">
                مقالات مختارة
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-400 max-w-lg">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
            </div>
            <Link
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
              to="/blog"
            >
              عرض الكل
              <i className="fa-solid fa-chevron-right text-sm group-hover:-translate-x-1 transition-transform rotate-180" />
            </Link>
          </div>
          <div className="space-y-8">
            {data.posts.slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
              >
                <Link
                  className="block"
                  to={`/blog/${post.slug}`}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-72 md:h-100 overflow-hidden">
                      <img
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        src={post.image}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {post.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                            <i className="fa-solid fa-star text-xs" />
                            مميز
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-neutral-500">
                          <i className="fa-regular fa-clock text-sm" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <img
                              alt={post.author.name}
                              className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                              src={post.author.avatar}
                            />
                            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">
                              {post.author.name}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {post.date}
                            </p>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                          اقرأ المقال
                          <i className="fa-solid fa-arrow-right text-lg rotate-180" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}