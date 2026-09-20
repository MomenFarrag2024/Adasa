import { Link, NavLink, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
export default function Blog({ data }) {
  const blogTopRef = useRef(null);
  const posts = data?.posts || [];
  const [searchParams] = useSearchParams();
  const firstRender = useRef(true);
  const [viewMode, setViewMode] = useState("grid");
  const [search, setSearch] = useState("");
  const selectedCategory = searchParams.get("category") || "الكل";
  const [currentPage, setCurrentPage] = useState(1);
  const categories = ["الكل", ...new Set(posts.map((post) => post.category))];
  const postsPerPage = 6;
  const searchValue = search.trim().toLowerCase();
  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "الكل" || post.category === selectedCategory;
    const matchesSearch =
      !searchValue ||
      post.title.toLowerCase().includes(searchValue) ||
      post.excerpt.toLowerCase().includes(searchValue) ||
      post.category.toLowerCase().includes(searchValue) ||
      post.author.name.toLowerCase().includes(searchValue);
    return matchesCategory && matchesSearch;
  });
  const startIndex = (currentPage - 1) * postsPerPage;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage,
  );
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage(1);
  }, [selectedCategory, search]);
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    blogTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [currentPage]);
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {" "}
      <div className="relative py-20 overflow-hidden">
        {" "}
        <div className="absolute inset-0 bg-[#0a0a0a]" />{" "}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]" />{" "}
        <div className="absolute inset-0">
          {" "}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />{" "}
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />{" "}
        </div>{" "}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {" "}
          <span className="section-label inline-flex items-center gap-2 mb-6">
            {" "}
            <i className="fa-solid fa-newspaper w-4 h-4"></i> مدونتنا{" "}
          </span>{" "}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {" "}
            استكشف <span className="gradient-text">مقالاتنا</span>{" "}
          </h1>{" "}
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            {" "}
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {" "}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {" "}
            <div className="relative w-full md:w-80">
              {" "}
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="transition-all duration-300 outline-none bg-[#161616] border border-[#262626] focus:ring-3 focus:ring-orange-500/10 focus:border-orange-500 rounded-xl text-white placeholder-neutral-500 w-full px-5 py-3 pr-12"
              />{" "}
              <i className="fa-solid fa-magnifying-glass absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"></i>{" "}
            </div>{" "}
            <div className="flex flex-wrap justify-center gap-2">
              {" "}
              {categories.map((category) => (
                <NavLink
                  key={category}
                  to={
                    category === "الكل"
                      ? "/blog"
                      : `/blog?category=${encodeURIComponent(category)}`
                  }
                  end={category === "الكل"}
                  onClick={() => setCurrentPage(1)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${selectedCategory === category ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"}`}
                >
                  {" "}
                  {category}{" "}
                </NavLink>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-36.5">
        {" "}
        <div className="mb-8 flex items-center justify-between">
          {" "}
          <p className="text-neutral-400">
            {" "}
            عرض{" "}
            <span className="font-bold text-white">
              {" "}
              {filteredPosts.length}{" "}
            </span>{" "}
            مقالات{" "}
          </p>{" "}
          <div className="flex items-center gap-2">
            {" "}
            <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
              {" "}
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === "grid" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`}
                title="عرض شبكي"
              >
                {" "}
                <i className="fa-solid fa-grip w-5 h-5"></i>{" "}
              </button>{" "}
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === "list" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`}
                title="عرض قائمة"
              >
                {" "}
                <i className="fa-solid fa-list w-5 h-5"></i>{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {currentPosts.length === 0 ? (
          <div className="text-center py-20">
            {" "}
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#161616] border border-[#262626] flex items-center justify-center">
              {" "}
              <i className="fa-solid fa-magnifying-glass w-7 h-7 text-neutral-500"></i>{" "}
            </div>{" "}
            <h3 className="text-xl font-bold text-white mb-2">
              {" "}
              لا توجد مقالات{" "}
            </h3>{" "}
            <p className="text-neutral-500">
              {" "}
              جرّب البحث بكلمة أخرى أو اختيار تصنيف مختلف{" "}
            </p>{" "}
          </div>
        ) : (
          <div
            ref={blogTopRef}
            className={`scroll-mt-62.5 ${viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-6"}`}
          >
            {" "}
            {currentPosts.map((post, index) => (
              <article
                key={post.id}
                className={
                  viewMode === "grid"
                    ? "group transition-all duration-500 rounded-3xl bg-[#161616] border border-[#262626] overflow-hidden"
                    : "group bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 overflow-hidden"
                }
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {" "}
                <Link
                  to={`/blog/${post.slug}`}
                  className={
                    viewMode === "grid" ? "block" : "flex flex-col md:flex-row"
                  }
                >
                  {" "}
                  <div
                    className={
                      viewMode === "grid"
                        ? "relative h-52 overflow-hidden"
                        : "relative w-full md:w-72 lg:w-80 h-52 md:h-auto shrink-0 overflow-hidden"
                    }
                  >
                    {" "}
                    <img
                      src={post.image}
                      alt={post.title}
                      className={
                        viewMode === "grid"
                          ? "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          : "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      }
                    />{" "}
                    <div
                      className={
                        viewMode === "grid"
                          ? "absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          : "absolute inset-0 bg-linear-to-l from-[#161616]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      }
                    />{" "}
                    {viewMode === "grid" && (
                      <div className="absolute top-4 right-4">
                        {" "}
                        <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                          {" "}
                          {post.category}{" "}
                        </span>{" "}
                      </div>
                    )}{" "}
                  </div>{" "}
                  {viewMode === "grid" ? (
                    <div className="p-6">
                      {" "}
                      <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                        {" "}
                        <span className="flex items-center gap-1">
                          {" "}
                          <i className="fa-regular fa-clock w-4 h-4"></i>{" "}
                          {post.readTime}{" "}
                        </span>{" "}
                        <span className="w-1 h-1 bg-neutral-600 rounded-full" />{" "}
                        <span>
                          {" "}
                          {new Date(post.date).toLocaleDateString("ar-EG", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}{" "}
                        </span>{" "}
                      </div>{" "}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                        {" "}
                        {post.title}{" "}
                      </h3>{" "}
                      <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                        {" "}
                        {post.excerpt}{" "}
                      </p>{" "}
                      <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                        {" "}
                        <div className="flex items-center gap-3">
                          {" "}
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                          />{" "}
                          <div>
                            {" "}
                            <p className="text-sm font-medium text-white">
                              {" "}
                              {post.author.name}{" "}
                            </p>{" "}
                            <p className="text-xs text-neutral-500">
                              {" "}
                              {post.author.role}{" "}
                            </p>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                          {" "}
                          <i className="fa-solid fa-arrow-right w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"></i>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  ) : (
                    <div className="flex-1 p-6 flex flex-col justify-center">
                      {" "}
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        {" "}
                        <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                          {" "}
                          {post.category}{" "}
                        </span>{" "}
                        <span className="flex items-center gap-1 text-sm text-neutral-500">
                          {" "}
                          <i className="fa-regular fa-clock w-4 h-4"></i>{" "}
                          {post.readTime}{" "}
                        </span>{" "}
                        <span className="flex items-center gap-1 text-sm text-neutral-500">
                          {" "}
                          <i className="fa-regular fa-calendar w-4 h-4"></i>{" "}
                          {new Date(post.date).toLocaleDateString("ar-EG", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}{" "}
                        </span>{" "}
                      </div>{" "}
                      <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                        {" "}
                        {post.title}{" "}
                      </h2>{" "}
                      <p className="text-neutral-400 mb-4 line-clamp-2 leading-relaxed">
                        {" "}
                        {post.excerpt}{" "}
                      </p>{" "}
                      <div className="flex items-center justify-between mt-auto">
                        {" "}
                        <div className="flex items-center gap-3">
                          {" "}
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-10 h-10 rounded-full object-cover ring-2 ring-[#262626]"
                          />{" "}
                          <div>
                            {" "}
                            <p className="text-sm font-semibold text-white">
                              {" "}
                              {post.author.name}{" "}
                            </p>{" "}
                            <p className="text-xs text-neutral-500">
                              {" "}
                              {post.author.role}{" "}
                            </p>{" "}
                          </div>{" "}
                        </div>{" "}
                        <span className="hidden sm:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                          {" "}
                          اقرأ المقال{" "}
                          <i className="fa-solid fa-arrow-right-long w-5 h-5 rotate-180"></i>{" "}
                        </span>{" "}
                      </div>{" "}
                    </div>
                  )}{" "}
                </Link>{" "}
              </article>
            ))}{" "}
          </div>
        )}{" "}
        {totalPages > 1 && (
          <>
            {" "}
            <div className="flex justify-center items-center gap-2 mt-12">
              {" "}
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className={`p-3 rounded-xl border transition-all duration-300 ${currentPage === 1 ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed" : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"}`}
              >
                {" "}
                <i className="fa-solid fa-chevron-right w-5 h-5"></i>{" "}
              </button>{" "}
              <div className="flex items-center gap-1">
                {" "}
                {pageNumbers.map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 ${currentPage === page ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"}`}
                  >
                    {" "}
                    {page}{" "}
                  </button>
                ))}{" "}
              </div>{" "}
              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className={`p-3 rounded-xl border transition-all duration-300 ${currentPage === totalPages ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed" : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"}`}
              >
                {" "}
                <i className="fa-solid fa-chevron-left w-5 h-5"></i>{" "}
              </button>{" "}
            </div>{" "}
            <p className="text-center text-neutral-500 mt-4 text-sm">
              {" "}
              صفحة {currentPage} من {totalPages}{" "}
            </p>{" "}
          </>
        )}{" "}
      </div>{" "}
    </div>
  );
}
