import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Plane,
  Radio,
  Cpu,
  Zap,
  Users,
  Calendar,
  Megaphone,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Committees() {
  const { t, language } = useLanguage();

  const committees = [
    {
      key: "aess",
      icon: Plane,
      color: "#00629B",
      gradient: "from-blue-500 to-blue-600",
      image:
        "https://images.unsplash.com/photo-1760638346074-e65e53d31e78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJvc3BhY2UlMjBkcm9uZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxMTc0MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      key: "comsoc",
      icon: Radio,
      color: "#5C4B99",
      gradient: "from-purple-500 to-purple-600",
      image:
        "https://images.unsplash.com/photo-1679857768766-4c6a46db3301?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGNvbW11bmljYXRpb24lMjBuZXR3b3JrfGVufDF8fHx8MTc2MTE3NDIyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      key: "cs",
      icon: Cpu,
      color: "#2D7A89",
      gradient: "from-teal-500 to-teal-600",
      image:
        "https://images.unsplash.com/photo-1739805591936-39f03383c9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzYxMTc0MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      key: "pes",
      icon: Zap,
      color: "#8B6F47",
      gradient: "from-amber-500 to-amber-600",
      image:
        "https://images.unsplash.com/photo-1668196469278-1dae4d5b25d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHJlbmV3YWJsZSUyMGVuZXJneXxlbnwxfHx8fDE3NjExNzQyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      key: "wie",
      icon: Users,
      color: "#9B4B6F",
      gradient: "from-pink-500 to-pink-600",
      image:
        "https://images.unsplash.com/photo-1748348209623-906c42dd1f7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVuZ2luZWVycyUyMHRlYW18ZW58MXx8fHwxNzYxMTc0MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      key: "kok",
      icon: Calendar,
      color: "#4B7C99",
      gradient: "from-cyan-500 to-cyan-600",
      image:
        "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxMTc0MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      key: "pr",
      icon: Megaphone,
      color: "#6B8B47",
      gradient: "from-green-500 to-green-600",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjExNjc3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section
      id="committees"
      className="py-20 bg-gray-100 dark:bg-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.committees.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.committees.subtitle}
          </p>
        </div>

        {/* Committees Grid - 3 per row, event card style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {committees.map((committee) => {
            const Icon = committee.icon;
            const committeeData = t.committees[
              committee.key as keyof typeof t.committees
            ] as any;

            return (
              <Card
                key={committee.key}
                className="group overflow-hidden hover:shadow-xl dark:hover:shadow-[#00629B]/20 dark:hover:ring-1 dark:hover:ring-[#00629B]/50 transition-all duration-300 rounded-2xl border-0 bg-white dark:bg-slate-950 hover:-translate-y-1"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={committee.image}
                    alt={committeeData.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${committee.gradient} opacity-20`}
                  />

                  {/* Badge with committee name */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      className="text-white px-3 py-1.5 rounded-full shadow-lg"
                      style={{
                        backgroundColor: committee.color,
                      }}
                    >
                      <Icon className="h-3.5 w-3.5 mr-1.5 inline" />
                      {committeeData.name}
                    </Badge>
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className="p-6">
                  {/* Full Name */}
                  <h3 className="font-semibold text-primary mb-2">
                    {committeeData.fullName}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {committeeData.description}
                  </p>

                  {/* Focus Areas */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-primary">
                      {language === "tr"
                        ? "Çalışma Alanları"
                        : "Focus Areas"}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {committeeData.areas.map(
                        (area: string, index: number) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors rounded-md"
                          >
                            {area}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}