import { Card, CardContent } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';

export function Sponsors() {
  const { t } = useLanguage();
  // Mock sponsor logos with placeholder company names
  const sponsors = [
    {
      name: "Microsoft",
      tier: "Platinum",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      description: "Cloud services ve developer tools sponsoru"
    },
    {
      name: "Google",
      tier: "Platinum", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      description: "AI/ML etkinlikleri ana sponsoru"
    },
    {
      name: "Amazon",
      tier: "Gold",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", 
      description: "AWS infrastructure desteği"
    },
    {
      name: "Intel",
      tier: "Gold",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg",
      description: "Hardware ve teknoloji partneri"
    },
    {
      name: "GitHub",
      tier: "Silver",
      logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      description: "Açık kaynak proje desteği"
    },
    {
      name: "JetBrains", 
      tier: "Silver",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/JetBrains_Logo_2016.svg",
      description: "IDE ve geliştirici araçları"
    }
  ];

  const getTierStyle = (tier: string) => {
    switch (tier) {
      case "Platinum":
        return "border-4 border-gray-300 dark:border-gray-600 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700";
      case "Gold":
        return "border-4 border-yellow-300 dark:border-yellow-600 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30";
      case "Silver":
        return "border-4 border-gray-400 dark:border-gray-600 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-slate-800 dark:to-slate-700";
      default:
        return "border-2 border-gray-200 dark:border-gray-700 bg-card";
    }
  };

  const getTierBadgeStyle = (tier: string) => {
    switch (tier) {
      case "Platinum":
        return "bg-gray-600 text-white";
      case "Gold":
        return "bg-yellow-600 text-white";
      case "Silver":
        return "bg-gray-500 text-white";
      default:
        return "text-white";
    }
  };

  const getTierBadgeCustomStyle = (tier: string) => {
    if (tier === "default") return { backgroundColor: '#00629B' };
    return {};
  };

  const getLogoSize = (tier: string) => {
    switch (tier) {
      case "Platinum":
        return "h-16 w-auto max-w-[200px]";
      case "Gold":
        return "h-12 w-auto max-w-[160px]";
      case "Silver":
        return "h-10 w-auto max-w-[140px]";
      default:
        return "h-8 w-auto max-w-[120px]";
    }
  };

  return (
    <section id="sponsors" className="py-20 bg-gray-100 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.sponsors.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.sponsors.subtitle}
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-center text-primary mb-8">
            {t.sponsors.platinum}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sponsors.filter(s => s.tier === "Platinum").map((sponsor, index) => (
              <Card 
                key={`platinum-${index}`} 
                className={`group hover:shadow-xl dark:hover:shadow-[#00629B]/20 dark:hover:ring-1 dark:hover:ring-[#00629B]/50 transition-all duration-300 rounded-2xl ${getTierStyle(sponsor.tier)} dark:hover:bg-slate-970 hover:-translate-y-1`}
              >
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mb-6 min-h-[80px]">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className={`${getLogoSize(sponsor.tier)} object-contain filter group-hover:scale-105 transition-transform duration-300`}
                      style={{ filter: 'grayscale(20%)' }}
                    />
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getTierBadgeStyle(sponsor.tier)}`}>
                    {sponsor.tier} {t.sponsors.partner}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {sponsor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-center text-primary mb-8">
            {t.sponsors.gold}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {sponsors.filter(s => s.tier === "Gold").map((sponsor, index) => (
              <Card 
                key={`gold-${index}`} 
                className={`group hover:shadow-lg dark:hover:shadow-[#00629B]/20 dark:hover:ring-1 dark:hover:ring-[#00629B]/50 transition-all duration-300 rounded-2xl ${getTierStyle(sponsor.tier)} dark:hover:bg-slate-970 hover:-translate-y-1`}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4 min-h-[60px]">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className={`${getLogoSize(sponsor.tier)} object-contain filter group-hover:scale-105 transition-transform duration-300`}
                      style={{ filter: 'grayscale(30%)' }}
                    />
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${getTierBadgeStyle(sponsor.tier)}`}>
                    {sponsor.tier} {t.sponsors.partner}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {sponsor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16">
          <h3 className="font-semibold text-center text-primary mb-8">
            {t.sponsors.silver}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {sponsors.filter(s => s.tier === "Silver").map((sponsor, index) => (
              <Card 
                key={`silver-${index}`} 
                className={`group hover:shadow-lg dark:hover:shadow-[#00629B]/20 dark:hover:ring-1 dark:hover:ring-[#00629B]/50 transition-all duration-300 rounded-xl ${getTierStyle(sponsor.tier)} dark:hover:bg-slate-970 hover:-translate-y-1`}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4 min-h-[60px]">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className={`${getLogoSize(sponsor.tier)} object-contain filter group-hover:scale-105 transition-transform duration-300`}
                      style={{ filter: 'grayscale(40%)' }}
                    />
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getTierBadgeStyle(sponsor.tier)}`}>
                    {sponsor.tier} {t.sponsors.partner}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {sponsor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="mt-16">
          <Card className="border-0 rounded-2xl text-white" style={{ background: `linear-gradient(to right, #00629B, #004f7c)` }}>
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                {t.sponsors.partnership.title}
              </h3>
              <p className="text-blue-50 mb-6 max-w-2xl mx-auto leading-relaxed">
                {t.sponsors.partnership.description}
              </p>
              <button 
                className="border-2 border-white text-white hover:bg-white px-8 py-3 rounded-xl font-medium transition-colors duration-200"
                style={{ '&:hover': { color: '#00629B' } }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#00629B'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
              >
                {t.sponsors.partnership.button}
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}