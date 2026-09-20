import { Link } from "react-router-dom";

export default function Footer({data}) {

  const {siteInfo:{name, description, tagline, social: {github,linkedin,twitter,youtube,}}} = data;

  console.log(name);
  console.log(description);
  console.log(tagline);
  console.log(github);
  console.log(linkedin);
  console.log(twitter);
  console.log(youtube);
  console.log(data);


  return (
    <>
    <footer className="relative bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626]">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link
              className="flex items-center gap-3 mb-6 group"
              to="/"
            >
              <div
                className="w-11 h-11 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: "rgba(249, 115, 22, 0.3) 0px 4px 20px",
                }}
              >
                <span className="text-white font-bold text-xl">ع</span>
              </div>
              <span className="text-xl font-bold text-white">
               {name}
              </span>
            </Link>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">{description}</p>
            <div className="flex gap-2">
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="twitter"
              >
                <i className="fa-brands fa-x-twitter text-lg"></i>
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="github"
              >
                <i className="fa-brands fa-github text-lg"></i>
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="linkedin"
              >
                <i className="fa-brands fa-linkedin-in text-lg"></i>
              </a>
              <a
                href={youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="youtube"
              >
                <i className="fa-brands fa-youtube text-lg"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
              استكشف
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  to="/"
                >
                  <i className="fa-solid fa-chevron-left w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  to="/blog"
                >
                  <i className="fa-solid fa-chevron-left w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>
                  المدونة
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  to="/about"
                >
                  <i className="fa-solid fa-chevron-left w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>
                  من نحن
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
              التصنيفات
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  to="/blog?category=إضاءة"
                >
                  <i className="fa-solid fa-chevron-left w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>
                  إضاءة
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  to="/blog?category=بورتريه"
                >
                  <i className="fa-solid fa-chevron-left w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>
                  بورتريه
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  to="/blog?category=مناظر طبيعية"
                >
                  <i className="fa-solid fa-chevron-left w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>
                  مناظر طبيعية
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  to="/blog?category=تقنيات"
                >
                  <i className="fa-solid fa-chevron-left w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>
                  تقنيات
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
              ابقى على اطلاع
            </h3>
            <p className="text-sm text-neutral-500 mb-4">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary text-sm py-4 px-8 rounded-full font-semibold transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/20 focus:ring-orange-500 bg-linear-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
              >
                اشترك
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="relative border-t border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-600">
              © 2026 عدسة. صنع بكل{" "}
              <i className="fa-solid fa-heart text-orange-500"></i>{" "}
              جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <Link
                className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
                to="/privacy"
              >
                سياسة الخصوصية
              </Link>
              <Link
                className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
                to="/terms"
              >
                شروط الخدمة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
