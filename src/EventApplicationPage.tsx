import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  Loader2,
  AlertCircle,
  Moon,
  Sun,
  Mail,
  Phone,
  MapPin as MapPinIcon,
  Instagram,
  Linkedin,
  Twitter,
  Github,
  ExternalLink,
} from "lucide-react";
import { Alert, AlertDescription } from "./components/ui/alert";
import { Separator } from "./components/ui/separator";
import { translations, Language } from "./translations";

export default function EventApplicationPage() {
  const [language, setLanguage] = useState<Language>("tr");
  const [isLoading, setIsLoading] = useState(true);
  const [formError, setFormError] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Get translations for current language
  const t = translations[language];

  // Google Form URL'ini buraya ekleyin
  const GOOGLE_FORM_BASE_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfkbYm0ezNXZ_FSKOeIKW1OAqR0spyE3H6aKjS6z80xw7YbtA/viewform";
  
  // Dark mode için Google Form URL'sini ayarla
  const getFormUrl = () => {
    const params = new URLSearchParams();
    params.append('embedded', 'true');
    if (isDarkMode) {
      params.append('theme', 'dark');
    }
    return `${GOOGLE_FORM_BASE_URL}?${params.toString()}`;
  };

  useEffect(() => {
    // Check localStorage for language preference
    const savedLanguage = localStorage.getItem(
      "language",
    ) as Language;
    if (
      savedLanguage &&
      (savedLanguage === "tr" || savedLanguage === "en")
    ) {
      setLanguage(savedLanguage);
    }

    // Check localStorage for dark mode preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    // Simulated form loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Form URL kontrolü
      if (
        !GOOGLE_FORM_BASE_URL ||
        GOOGLE_FORM_BASE_URL === "YOUR_GOOGLE_FORM_URL_HERE"
      ) {
        setFormError(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const toggleLanguage = () => {
    const newLanguage: Language =
      language === "tr" ? "en" : "tr";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleBackToHome = () => {
    // Ana sayfaya dönüş
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* Header with Language Toggle */}
      <header className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-2 sm:px-4 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2">
            {/* Back Button - Mobilde sadece ikon */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBackToHome}
              className="hover:bg-gray-100 dark:hover:bg-slate-800 flex-shrink-0 px-2 sm:px-4"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden md:inline ml-2">{t.events.applicationPage.backToHome}</span>
            </Button>

            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              {/* Language Toggle - Compact */}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="rounded-lg sm:rounded-xl border-2 hover:border-[#00629B] transition-colors px-2 sm:px-3 min-w-[44px]"
              >
                {language === "tr" ? "EN" : "TR"}
              </Button>

              {/* Dark Mode Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleDarkMode}
                className="rounded-lg sm:rounded-xl border-2 hover:border-[#00629B] transition-colors p-2"
              >
                {isDarkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>

              {/* Logo */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#00629B" }}
                >
                  <span className="text-white font-bold text-sm sm:text-base">
                    I
                  </span>
                </div>
                <div className="hidden sm:block">
                  <div className="font-bold text-xs sm:text-sm">
                    IEEE ESTU
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">
                    {t.hero.subtitle}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {t.events.applicationPage.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-2">
              {t.events.applicationPage.subtitle}
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              {t.events.applicationPage.description}
            </p>
          </div>

          {/* Event Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="rounded-2xl border-0 bg-white dark:bg-slate-900">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center">
                  <Calendar
                    className="h-6 w-6"
                    style={{ color: "#00629B" }}
                  />
                </div>
                <div className="text-xs text-muted-foreground mb-1">
                  {language === "tr" ? "Tarih" : "Date"}
                </div>
                <div className="font-medium text-sm">
                  {language === "tr"
                    ? "Düzenli Etkinlikler"
                    : "Regular Events"}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 bg-white dark:bg-slate-900">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center">
                  <Clock
                    className="h-6 w-6"
                    style={{ color: "#00629B" }}
                  />
                </div>
                <div className="text-xs text-muted-foreground mb-1">
                  {language === "tr" ? "Süre" : "Duration"}
                </div>
                <div className="font-medium text-sm">
                  {language === "tr" ? "Değişken" : "Variable"}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 bg-white dark:bg-slate-900">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center">
                  <MapPin
                    className="h-6 w-6"
                    style={{ color: "#00629B" }}
                  />
                </div>
                <div className="text-xs text-muted-foreground mb-1">
                  {language === "tr" ? "Konum" : "Location"}
                </div>
                <div className="font-medium text-sm">ESTU</div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 bg-white dark:bg-slate-900">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center">
                  <Users
                    className="h-6 w-6"
                    style={{ color: "#00629B" }}
                  />
                </div>
                <div className="text-xs text-muted-foreground mb-1">
                  {language === "tr"
                    ? "Katılım"
                    : "Participation"}
                </div>
                <div className="font-medium text-sm">
                  {language === "tr" ? "Açık" : "Open"}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Form Section */}
          <Card className="rounded-2xl border-0 bg-white dark:bg-slate-900 overflow-hidden">
            <CardContent className="p-0">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-24 px-6">
                  <Loader2
                    className="h-12 w-12 animate-spin mb-4"
                    style={{ color: "#00629B" }}
                  />
                  <p className="text-muted-foreground">
                    {t.events.applicationPage.loadingForm}
                  </p>
                </div>
              ) : formError ? (
                <div className="py-12 px-6">
                  <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      {
                        t.events.applicationPage
                          .formNotAvailable
                      }
                    </AlertDescription>
                  </Alert>
                  <div className="text-center">
                    <p className="text-muted-foreground mb-6">
                      {language === "tr"
                        ? "Form URL'si henüz yapılandırılmamış. Lütfen yönetici ile iletişime geçin."
                        : "Form URL has not been configured yet. Please contact the administrator."}
                    </p>
                    <Button
                      onClick={handleBackToHome}
                      style={{ backgroundColor: "#00629B" }}
                      className="text-white hover:opacity-90"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      {t.events.applicationPage.backToHome}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="w-full">
                  {/* Google Form Iframe */}
                  <iframe
                    key={isDarkMode ? 'dark' : 'light'}
                    src={getFormUrl()}
                    width="100%"
                    height="1200"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    style={isDarkMode ? {
                      filter: 'invert(0.9) hue-rotate(180deg)',
                      backgroundColor: '#0f172a'
                    } : {}}
                    className="w-full min-h-[800px] md:min-h-[1000px] lg:min-h-[1200px]"
                    title={t.events.applicationPage.title}
                  >
                    {language === "tr"
                      ? "Yükleniyor..."
                      : "Loading..."}
                  </iframe>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <Card className="rounded-2xl border-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">
                  {language === "tr"
                    ? "Sorularınız mı var?"
                    : "Have Questions?"}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === "tr"
                    ? "Etkinliklerimiz hakkında daha fazla bilgi için bizimle iletişime geçebilirsiniz."
                    : "You can contact us for more information about our events."}
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <a
                    href="mailto:ieee@estu.edu.tr"
                    className="text-primary hover:underline font-medium"
                    style={{ color: "#00629B" }}
                  >
                    ieee@estu.edu.tr
                  </a>
                  <span className="text-muted-foreground">
                    •
                  </span>
                  <a
                    href="tel:+902223350580"
                    className="text-primary hover:underline font-medium"
                    style={{ color: "#00629B" }}
                  >
                    +90 222 335 05 80
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer - Ana footer ile aynı */}
      <footer className="bg-slate-900 dark:bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "#00629B" }}
                >
                  <span className="text-white text-xl font-bold">
                    I
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    IEEE ESTU Student Branch
                  </h3>
                  <p className="text-gray-300 dark:text-blue-200 text-sm">
                    {t.footer.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-gray-200 dark:text-blue-100 leading-relaxed mb-6 max-w-md">
                {t.footer.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-200 dark:text-blue-100">
                  <Mail
                    className="h-4 w-4 mr-3"
                    style={{ color: "#00629B" }}
                  />
                  <span className="text-sm">
                    ieee@estu.edu.tr
                  </span>
                </div>
                <div className="flex items-center text-gray-200 dark:text-blue-100">
                  <Phone
                    className="h-4 w-4 mr-3"
                    style={{ color: "#00629B" }}
                  />
                  <span className="text-sm">
                    +90 222 335 05 80
                  </span>
                </div>
                <div className="flex items-start text-gray-200 dark:text-blue-100">
                  <MapPinIcon
                    className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0"
                    style={{ color: "#00629B" }}
                  />
                  <span className="text-sm">
                    ESTU Mühendislik Fakültesi
                    <br />
                    26555 Tepebaşı/Eskişehir
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links & Resources Combined */}
            <div className="md:col-span-2 lg:col-span-2 flex flex-col">
              <div className="grid grid-cols-2 gap-8">
                {/* Quick Links */}
                <div>
                  <h4 className="text-lg font-semibold mb-6">
                    {t.footer.quickLinks}
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="/#about"
                        className="text-gray-200 dark:text-blue-100 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 inline-block transition-transform"
                      >
                        {t.footer.links.about}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#team"
                        className="text-gray-200 dark:text-blue-100 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 inline-block transition-transform"
                      >
                        {t.footer.links.team}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#events"
                        className="text-gray-200 dark:text-blue-100 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 inline-block transition-transform"
                      >
                        {t.footer.links.events}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#contact"
                        className="text-gray-200 dark:text-blue-100 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 inline-block transition-transform"
                      >
                        {t.footer.links.contact}
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="text-lg font-semibold mb-6">
                    {t.footer.resources}
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-gray-200 dark:text-blue-100 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 transition-transform flex items-center"
                      >
                        {t.footer.links.ieeeGlobal}
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-200 dark:text-blue-100 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 transition-transform flex items-center"
                      >
                        {t.footer.links.ieeeTurkey}
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-200 dark:text-blue-100 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 transition-transform flex items-center"
                      >
                        {t.footer.links.estu}
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#sponsors"
                        className="text-gray-200 dark:text-blue-100 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 transition-transform flex items-center"
                      >
                        {t.footer.links.sponsorship}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Social Media - Centered */}
              <div className="mt-8 flex flex-col items-center w-full">
                <h5 className="font-medium mb-4">
                  {t.footer.social}
                </h5>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-[#00629B] rounded-xl flex items-center justify-center transition-all duration-200 group"
                    title="Instagram"
                  >
                    <span className="text-gray-200 dark:text-blue-200 group-hover:text-white transition-colors duration-200">
                      <Instagram className="h-5 w-5" />
                    </span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-[#00629B] rounded-xl flex items-center justify-center transition-all duration-200 group"
                    title="LinkedIn"
                  >
                    <span className="text-gray-200 dark:text-blue-200 group-hover:text-white transition-colors duration-200">
                      <Linkedin className="h-5 w-5" />
                    </span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-[#00629B] rounded-xl flex items-center justify-center transition-all duration-200 group"
                    title="Twitter"
                  >
                    <span className="text-gray-200 dark:text-blue-200 group-hover:text-white transition-colors duration-200">
                      <Twitter className="h-5 w-5" />
                    </span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-[#00629B] rounded-xl flex items-center justify-center transition-all duration-200 group"
                    title="GitHub"
                  >
                    <span className="text-gray-200 dark:text-blue-200 group-hover:text-white transition-colors duration-200">
                      <Github className="h-5 w-5" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-12 p-4 sm:p-6 bg-white/5 dark:bg-white/5 rounded-2xl border border-white/10">
            <div className="w-full">
              <h4 className="font-semibold mb-2">
                {t.footer.newsletter.title}
              </h4>
              <p className="text-gray-200 dark:text-blue-100 text-sm mb-4">
                {t.footer.newsletter.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder={t.footer.newsletter.placeholder}
                  className="w-full sm:flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 dark:placeholder-blue-200 focus:outline-none focus:border-[#00629B] focus:ring-2 focus:ring-[#00629B]/30 text-sm transition-all duration-200"
                />
                <Button
                  size="sm"
                  className="w-full sm:w-auto text-white px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                  style={{ backgroundColor: "#00629B" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "#004f7c")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "#00629B")
                  }
                >
                  {t.footer.newsletter.subscribe}
                </Button>
              </div>
            </div>
          </div>

          <Separator className="my-12 bg-white/20" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 dark:text-blue-100 text-sm text-center md:text-left">
              <p>
                © {new Date().getFullYear()} IEEE ESTU Student
                Branch. {t.footer.rights}
              </p>
              <p className="mt-1">
                {t.footer.madeWith}{" "}
                <span className="text-white">❤️</span>{" "}
                {t.footer.madeAt}
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-300 dark:text-blue-100 hover:text-white transition-colors duration-200"
              >
                {t.footer.privacy}
              </a>
              <a
                href="#"
                className="text-gray-300 dark:text-blue-100 hover:text-white transition-colors duration-200"
              >
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}