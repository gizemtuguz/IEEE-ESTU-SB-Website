import { Card, CardContent } from "./ui/card";
import { Lightbulb, Users, Target, Rocket } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();
  const features = [
    {
      icon: (
        <Lightbulb className="h-8 w-8" />
      ),
      title: t.about.features.innovation.title,
      description: t.about.features.innovation.description,
    },
    {
      icon: (
        <Users className="h-8 w-8" />
      ),
      title: t.about.features.community.title,
      description: t.about.features.community.description,
    },
    {
      icon: (
        <Target className="h-8 w-8" />
      ),
      title: t.about.features.goalOriented.title,
      description: t.about.features.goalOriented.description,
    },
    {
      icon: (
        <Rocket className="h-8 w-8" />
      ),
      title: t.about.features.growth.title,
      description: t.about.features.growth.description,
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gray-100 dark:bg-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.about.title}
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {t.about.intro.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            <div className="bg-slate-200 dark:bg-slate-800 rounded-2xl p-6 mt-8">
              <p className="text-primary font-medium mb-2">
                {t.about.callout}
              </p>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>
                  <span className="font-medium">
                    {t.about.president}:
                  </span>{" "}
                  Gizem TUĞUZ
                </p>
                <p>
                  <span className="font-medium">
                    {t.about.advisor}:
                  </span>{" "}
                  Dr. Öğr. Üyesi Sıtkı GÜNER
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg dark:hover:shadow-[#00629B]/20 dark:hover:ring-1 dark:hover:ring-[#00629B]/50 transition-shadow duration-300 rounded-2xl border-0 bg-white dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-970"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-4 text-[#00629B] dark:text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              {t.about.mission}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              IEEE'nin global vizyon ve değerleriyle uyum
              içinde, Eskişehir Teknik Üniversitesi bünyesinde
              teknoloji ve mühendislik alanında öğrencilerin
              akademik ve profesyonel gelişimlerini desteklemek,
              yenilikçi projeler geliştirmek ve sektör ile
              academia arasında köprü kurmaktır.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "#00629B" }}
                />
                <p className="text-muted-foreground">
                  Teknik workshop ve seminerler düzenleme
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "#00629B" }}
                />
                <p className="text-muted-foreground">
                  Uluslararası yarışmalara katılım
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "#00629B" }}
                />
                <p className="text-muted-foreground">
                  Sektör profesyonelleriyle networking
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "#00629B" }}
                />
                <p className="text-muted-foreground">
                  Açık kaynak projelere katkı
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1672917187338-7f81ecac3d3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzU3MjQ2MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="IEEE ESTU Team"
              className="rounded-2xl shadow-lg w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}