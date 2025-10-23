import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  MapPin,
  Mail,
  Send,
  MessageCircle,
  Instagram,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: t.contact.info.address,
      details: [
        "Eskişehir Teknik Üniversitesi",
        "Mühendislik Fakültesi",
        "26555 Tepebaşı/Eskişehir",
      ],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: t.contact.info.email,
      details: ["ieee@estu.edu.tr", "info@ieeeestu.org"],
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      handle: "@ieeeestu",
      url: "#",
      icon: <Instagram className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      handle: "IEEE ESTU",
      url: "#",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Twitter",
      handle: "@ieeeestu",
      url: "#",
      icon: <Twitter className="h-5 w-5" />,
    },
    {
      name: "GitHub",
      handle: "ieee-estu",
      url: "#",
      icon: <Github className="h-5 w-5" />,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gray-100 dark:bg-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 bg-black dark:bg-white bg-clip-text text-transparent leading-relaxed py-2">
            {t.contact.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8 flex items-center">
                <MessageCircle className="h-6 w-6 text-[#00629B] mr-3" />
                {t.contact.info.title}
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg dark:hover:shadow-[#00629B]/20 dark:hover:ring-1 dark:hover:ring-[#00629B]/50 transition-shadow duration-300 rounded-2xl border-0 bg-white dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-970"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center flex-shrink-0 text-[#00629B] dark:text-white">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-2">
                            {info.title}
                          </h4>
                          {info.details.map((detail, idx) => (
                            <p
                              key={idx}
                              className="text-muted-foreground text-sm"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                {t.contact.info.social}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center space-x-3 p-4 bg-white dark:bg-slate-950 rounded-xl hover:bg-[#00629B] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-md dark:shadow-[#00629B]/10 dark:hover:shadow-[#00629B]/30 dark:hover:ring-1 dark:hover:ring-[#00629B]/50"
                  >
                    <div className="text-[#00629B] group-hover:text-white transition-colors">
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">
                        {social.name}
                      </p>
                      <p className="text-xs text-muted-foreground group-hover:text-blue-100">
                        {social.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="hover:shadow-xl dark:hover:shadow-[#00629B]/20 dark:hover:ring-1 dark:hover:ring-[#00629B]/50 transition-shadow duration-300 rounded-2xl border-0 bg-white dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-970">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <Send className="h-6 w-6 text-[#00629B] mr-3" />
                  {t.contact.form.title}
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        {t.contact.form.nameRequired}
                      </label>
                      <Input
                        placeholder={
                          t.contact.form.namePlaceholder
                        }
                        className="rounded-xl border-gray-200 dark:border-gray-700 focus:border-[#00629B] focus:ring-[#00629B]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        {t.contact.form.emailRequired}
                      </label>
                      <Input
                        type="email"
                        placeholder={
                          t.contact.form.emailPlaceholder
                        }
                        className="rounded-xl border-gray-200 dark:border-gray-700 focus:border-[#00629B] focus:ring-[#00629B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        {t.contact.form.phone}
                      </label>
                      <Input
                        placeholder={
                          t.contact.form.phonePlaceholder
                        }
                        className="rounded-xl border-gray-200 dark:border-gray-700 focus:border-[#00629B] focus:ring-[#00629B]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        {t.contact.form.subject}
                      </label>
                      <Input
                        placeholder={
                          t.contact.form.subjectPlaceholder
                        }
                        className="rounded-xl border-gray-200 dark:border-gray-700 focus:border-[#00629B] focus:ring-[#00629B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      {t.contact.form.messageRequired}
                    </label>
                    <Textarea
                      placeholder={
                        t.contact.form.messagePlaceholder
                      }
                      rows={6}
                      className="rounded-xl border-gray-200 dark:border-gray-700 focus:border-[#00629B] focus:ring-[#00629B] resize-none"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mt-1 w-4 h-4 border-gray-300 rounded"
                      style={{ accentColor: "#00629B" }}
                    />
                    <label
                      htmlFor="privacy"
                      className="text-sm text-muted-foreground"
                    >
                      {t.contact.form.privacy}
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-white rounded-xl py-3 font-medium transition-all duration-200"
                    style={{
                      background: `linear-gradient(to right, #00629B, #004f7c)`,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = `linear-gradient(to right, #004f7c, #003a5c)`)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = `linear-gradient(to right, #00629B, #004f7c)`)
                    }
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {t.contact.form.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location Map Placeholder */}
        <div className="mt-16">
          <Card className="rounded-2xl border-0 overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
              <div className="text-center">
                <MapPin
                  className="h-12 w-12 mx-auto mb-3"
                  style={{ color: "#00629B" }}
                />
                <p className="text-muted-foreground font-medium">
                  {t.contact.map.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t.contact.map.subtitle}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}