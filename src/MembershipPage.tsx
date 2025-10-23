import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import {
  ArrowLeft,
  Loader2,
  AlertCircle,
  Moon,
  Sun,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  Github,
  Users,
  Lightbulb,
  Rocket,
  Trophy,
  Languages,
} from "lucide-react";
import { Alert, AlertDescription } from "./components/ui/alert";
import { Separator } from "./components/ui/separator";
import { translations, Language } from "./translations";

export default function MembershipPage() {
  const [language, setLanguage] = useState<Language>("tr");
  const [isLoading, setIsLoading] = useState(true);
  const [formError, setFormError] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Get translations for current language
  const t = translations[language];

  // Google Form URL'ini buraya ekleyin
  const GOOGLE_FORM_BASE_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfkbYm0ezNXZ_FSKOeIKW1OAqR0spyE3H6aKjS6z80xw7YbtA/viewform?embedded=true";

  // Dark mode için Google Form URL'sini ayarla
  const getFormUrl = () => {
    const params = new URLSearchParams();
    params.append("embedded", "true");
    if (isDarkMode) {
      params.append("theme", "dark");
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
        GOOGLE_FORM_BASE_URL ===
          "YOUR_MEMBERSHIP_GOOGLE_FORM_URL_HERE"
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

  const benefits = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: t.membershipPage.benefits.items[0].title,
      description:
        t.membershipPage.benefits.items[0].description,
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t.membershipPage.benefits.items[1].title,
      description:
        t.membershipPage.benefits.items[1].description,
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: t.membershipPage.benefits.items[2].title,
      description:
        t.membershipPage.benefits.items[2].description,
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: t.membershipPage.benefits.items[3].title,
      description:
        t.membershipPage.benefits.items[3].description,
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      name: "Instagram",
      href: "#",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      href: "#",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      href: "#",
    },
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* Header - EventApplicationPage ile aynı */}
      <header className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-2 sm:px-4 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2">
            {/* Back Button - Mobilde sadece ikon */}
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover:bg-gray-100 dark:hover:bg-slate-800 flex-shrink-0 px-2 sm:px-4"
            >
              <a href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden md:inline">
                  {t.membershipPage.backToHome}
                </span>
              </a>
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
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 py-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent leading-tight px-2">
            {t.membershipPage.title}
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
            {t.membershipPage.subtitle}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.membershipPage.description}
          </p>
        </div>

        {/* Benefits Section */}
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            {t.membershipPage.benefits.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-[#00629B]/50 rounded-2xl border-0 bg-white dark:bg-slate-900"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "#00629B" }}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="shadow-xl border-0 rounded-2xl bg-white dark:bg-slate-900">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                  {t.membershipPage.formSection.title}
                </h2>
                <p className="text-muted-foreground">
                  {t.membershipPage.formSection.description}
                </p>
              </div>

              {/* Form Iframe */}
              <div
                className="relative w-full"
                style={{ minHeight: "800px" }}
              >
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm rounded-lg">
                    <Loader2 className="h-12 w-12 animate-spin text-[#00629B] mb-4" />
                    <p className="text-muted-foreground">
                      {t.membershipPage.formSection.loading}
                    </p>
                  </div>
                )}

                {formError ? (
                  <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>
                        {t.membershipPage.formSection.error}
                      </strong>
                      <br />
                      {
                        t.membershipPage.formSection
                          .errorDescription
                      }
                    </AlertDescription>
                  </Alert>
                ) : (
                  <iframe
                    src={getFormUrl()}
                    className="w-full rounded-lg border-0 dark:invert-[0.9] dark:hue-rotate-180"
                    style={{
                      height: "800px",
                      filter: isDarkMode
                        ? "invert(0.9) hue-rotate(180deg)"
                        : "none",
                    }}
                    onLoad={() => setIsLoading(false)}
                    title="Membership Application Form"
                  >
                    {t.membershipPage.formSection.loading}
                  </iframe>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info - Kaldırıldı, footer'a taşındı */}
      </main>

      {/* Footer - EventApplicationPage ile aynı */}
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
                  <MapPin
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
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-200 dark:text-blue-100 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 transition-transform flex items-center"
                      >
                        {t.footer.links.ieeeTurkey}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-200 dark:text-blue-100 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 transition-transform flex items-center"
                      >
                        {t.footer.links.estu}
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

          {/* Copyright */}
          <Separator className="my-8 bg-white/10" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-200 dark:text-blue-100">
              © {new Date().getFullYear()} IEEE ESTU Student
              Branch. {t.footer.rights}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-gray-200 dark:text-blue-100 hover:text-white transition-colors duration-200"
              >
                {t.footer.privacy}
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="#"
                className="text-gray-200 dark:text-blue-100 hover:text-white transition-colors duration-200"
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