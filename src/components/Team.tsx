import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Linkedin, Mail, Github } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface TeamMemberData {
  tr: {
    name: string;
    position: string;
    department: string;
    bio: string;
  };
  en: {
    name: string;
    position: string;
    department: string;
    bio: string;
  };
  image: string;
  section:
    | "boardOfDirectors"
    | "administrativeBoard"
    | "auditBoard";
}

export function Team() {
  const { t, language } = useLanguage();

  const teamMembers: TeamMemberData[] = [
    // Yönetim Kurulumuz (4 kişi)
    {
      tr: {
        name: "Gizem Tuğuz",
        position: "Yönetim Kurulu Başkanı",
        department: "Bilgisayar Mühendisliği",
        bio: "Tüm strateji, iletişim, koordinasyon",
      },
      en: {
        name: "Gizem Tuğuz",
        position: "President",
        department: "Computer Engineering",
        bio: "Strategy, communication, coordination",
      },
      image:
        "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzYxMDc0OTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      section: "boardOfDirectors",
    },
    {
      tr: {
        name: "Hüseyin Özçınar",
        position: "Yönetim Kurulu Başkan Yrd.",
        department: "Elektrik & Elektronik Mühendisliği",
        bio: "Takımlardan destek, organizasyon",
      },
      en: {
        name: "Hüseyin Özcınar",
        position: "Vice President",
        department: "Electrical & Electronics Engineering",
        bio: "Team support, organization",
      },
      image:
        "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MTA3ODIxNnww&ixlib=rb-4.1.0&q=80&w=1080",
      section: "boardOfDirectors",
    },
    {
      tr: {
        name: "Sıla Alhan",
        position: "Sayman",
        department: "Elektrik & Elektronik Mühendisliği",
        bio: "Mali işler, bütçe, harcama takibi",
      },
      en: {
        name: "Sıla Alhan",
        position: "Treasurer",
        department: "Electrical & Electronics Engineering",
        bio: "Financial matters, budget, expense tracking",
      },
      image:
        "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzYxMDc0OTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      section: "boardOfDirectors",
    },
    {
      tr: {
        name: "Ahmet Hakan Erdur",
        position: "Genel Sekreter",
        department: "Makine Mühendisliği",
        bio: "Yazışmalar, tutanaklar, arşiv",
      },
      en: {
        name: "Ahmet Hakan Erdur",
        position: "General Secretary",
        department: "Mechanical Engineering",
        bio: "Correspondence, minutes, archive",
      },
      image:
        "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjExNzM2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      section: "boardOfDirectors",
    },
    // İdari Kurulumuz (7 kişi)
    {
      tr: {
        name: "Efe Aral",
        position: "AESS Komite Başkanı",
        department: "Uçak Mühendisliği",
        bio: "Havacılık ve elektronik sistemler",
      },
      en: {
        name: "Efe Aral",
        position: "AESS Committee Chair",
        department: "Aeronautical Engineering",
        bio: "Aviation and electronic systems",
      },
      image:
        "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MTA3ODIxNnww&ixlib=rb-4.1.0&q=80&w=1080",
      section: "administrativeBoard",
    },
    {
      tr: {
        name: "Kutay Demirel",
        position: "ComSoc Komite Başkanı",
        department: "Elektrik & Elektronik Mühendisliği",
        bio: "Haberleşme ve ağ teknolojileri",
      },
      en: {
        name: "Kutay Demirel",
        position: "ComSoc Committee Chair",
        department: "Electrical & Electronics Engineering",
        bio: "Communication and network technologies",
      },
      image:
        "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjExNzM2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      section: "administrativeBoard",
    },
    {
      tr: {
        name: "Alp Karınca",
        position: "CS Komite Başkanı",
        department: "Bilgisayar Mühendisliği",
        bio: "Yazılım ve bilgisayar bilimleri",
      },
      en: {
        name: "Alp Karınca",
        position: "CS Committee Chair",
        department: "Computer Engineering",
        bio: "Software and computer sciences",
      },
      image:
        "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MTA3ODIxNnww&ixlib=rb-4.1.0&q=80&w=1080",
      section: "administrativeBoard",
    },
    {
      tr: {
        name: "Ahmet Kaan Can",
        position: "PES Komite Başkanı",
        department: "Elektrik & Elektronik Mühendisliği",
        bio: "Enerji sistemleri ve güç elektroniği",
      },
      en: {
        name: "Ahmet Kaan Can",
        position: "PES Committee Chair",
        department: "Electrical & Electronics Engineering",
        bio: "Energy systems and power electronics",
      },
      image:
        "https://images.unsplash.com/photo-1614492898637-435e0f87cef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnQlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjExNzM2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      section: "administrativeBoard",
    },
    {
      tr: {
        name: "Şenay Doğan",
        position: "WIE Affinity Group Başkanı",
        department: "Çevre Mühendisliği",
        bio: "Kadınların mühendislikte temsili",
      },
      en: {
        name: "Şenay Doğan",
        position: "WIE Affinity Group Chair",
        department: "Environmental Engineering",
        bio: "Women's representation in engineering",
      },
      image:
        "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzYxMDc0OTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      section: "administrativeBoard",
    },
    {
      tr: {
        name: "Mahmut Kırgıl",
        position: "KÖK Koordinatörü",
        department: "Elektrik & Elektronik Mühendisliği",
        bio: "Organizasyon ve koordinasyon",
      },
      en: {
        name: "Mahmut Kırgıl",
        position: "KÖK Coordinator",
        department: "Electrical & Electronics Engineering",
        bio: "Organization and coordination",
      },
      image:
        "https://images.unsplash.com/photo-1731419223715-aec6664f9011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3R1ZGVudCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjExNzM2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      section: "administrativeBoard",
    },
    {
      tr: {
        name: "Meryem Bilgiç",
        position: "PR Koordinatörü",
        department: "Bulut Bilişim Operatörlüğü",
        bio: "İletişim, sosyal medya, tasarım",
      },
      en: {
        name: "Meryem Bilgiç",
        position: "PR Coordinator",
        department: "Cloud Computing Operatoring",
        bio: "Communication, social media, design",
      },
      image:
        "https://images.unsplash.com/photo-1743327608361-698da1c56900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMHByb2Zlc3Npb25hbCUyMHBob3RvfGVufDF8fHx8MTc2MTE3MDI4MHww&ixlib=rb-4.1.0&q=80&w=1080",
      section: "administrativeBoard",
    },
    // Denetim Kurulumuz (3 kişi)
    {
      tr: {
        name: "Ezgi Güner",
        position: "Denetim Kurulu Üyesi",
        department: "Elektrik & Elektronik Mühendisliği",
        bio: "İç denetim",
      },
      en: {
        name: "Ezgi Güner",
        position: "Audit Board Member",
        department: "Electrical & Electronics Engineering",
        bio: "Internal audit",
      },
      image:
        "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzYxMDc0OTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      section: "auditBoard",
    },
    {
      tr: {
        name: "Katre Azra Yıldırım",
        position: "Denetim Kurulu Üyesi",
        department: "Elektrik & Elektronik Mühendisliği",
        bio: "İç denetim",
      },
      en: {
        name: "Katre Azra Yıldırım",
        position: "Audit Board Member",
        department: "Electrical & Electronics Engineering",
        bio: "Internal audit",
      },
      image:
        "https://images.unsplash.com/photo-1743327608361-698da1c56900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMHByb2Zlc3Npb25hbCUyMHBob3RvfGVufDF8fHx8MTc2MTE3MDI4MHww&ixlib=rb-4.1.0&q=80&w=1080",
      section: "auditBoard",
    },
    {
      tr: {
        name: "Selin Gül Kurt",
        position: "Denetim Kurulu Üyesi",
        department: "Elektrik & Elektronik Mühendisliği",
        bio: "İç denetim",
      },
      en: {
        name: "Selin Gül Kurt",
        position: "Audit Board Member",
        department: "Electrical & Electronics Engineering",
        bio: "Internal audit",
      },
      image:
        "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzYxMDc0OTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      section: "auditBoard",
    },
  ];

  const getPositionColor = (position: string) => {
    if (
      position.includes("Başkan") ||
      position.includes("President") ||
      position.includes("Chair")
    )
      return "text-white";
    if (
      position.includes("Koordinatör") ||
      position.includes("Coordinator")
    )
      return "bg-green-600 dark:bg-green-700 text-white";
    return "bg-gray-600 dark:bg-gray-700 text-white";
  };

  const getPositionStyle = (position: string) => {
    if (
      position.includes("Başkan") ||
      position.includes("President") ||
      position.includes("Chair")
    )
      return { backgroundColor: "#00629B" };
    return {};
  };

  const renderSection = (
    sectionKey:
      | "boardOfDirectors"
      | "administrativeBoard"
      | "auditBoard",
    title: string,
  ) => {
    const members = teamMembers.filter(
      (member) => member.section === sectionKey,
    );

    return (
      <div key={sectionKey} className="mb-20">
        <h3
          className="text-2xl md:text-3xl font-bold text-center mb-12"
          style={{ color: "#00629B" }}
        >
          {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => {
            const memberData =
              language === "tr" ? member.tr : member.en;

            return (
              <Card
                key={index}
                className="group hover:shadow-xl dark:hover:shadow-[#00629B]/20 dark:hover:ring-1 dark:hover:ring-[#00629B]/50 transition-all duration-300 rounded-2xl border-0 bg-white dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-970 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  {/* Profile Image with Professional Frame */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-1">
                      <img
                        src={member.image}
                        alt={memberData.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {memberData.name}
                    </h3>

                    <Badge
                      className={`mb-3 px-3 py-1 rounded-full text-xs font-medium ${getPositionColor(memberData.position)}`}
                      style={getPositionStyle(
                        memberData.position,
                      )}
                    >
                      {memberData.position}
                    </Badge>

                    <p
                      className="text-sm font-medium mb-3"
                      style={{ color: "#00629B" }}
                    >
                      {memberData.department}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-3">
                      <button className="w-8 h-8 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-[#00629B] hover:text-white dark:hover:bg-[#00629B] dark:hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200">
                        <Linkedin className="h-4 w-4" />
                      </button>
                      <button className="w-8 h-8 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-[#00629B] hover:text-white dark:hover:bg-[#00629B] dark:hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200">
                        <Mail className="h-4 w-4" />
                      </button>
                      <button className="w-8 h-8 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-[#00629B] hover:text-white dark:hover:bg-[#00629B] dark:hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200">
                        <Github className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section
      id="team"
      className="py-20 bg-gray-100 dark:bg-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.team.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.team.subtitle}
          </p>
        </div>

        {/* Yönetim Kurulumuz / Board of Directors */}
        {renderSection(
          "boardOfDirectors",
          t.team.sections.boardOfDirectors,
        )}

        {/* İdari Kurulumuz / Administrative Board */}
        {renderSection(
          "administrativeBoard",
          t.team.sections.administrativeBoard,
        )}

        {/* Denetim Kurulumuz / Audit Board */}
        {renderSection(
          "auditBoard",
          t.team.sections.auditBoard,
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {t.team.join}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t.team.joinDescription}
            </p>
            <a href="/membership">
              <button className="bg-[#00629B] hover:bg-[#004f7c] text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg dark:shadow-[#00629B]/30 dark:hover:shadow-[#00629B]/50 dark:hover:ring-2 dark:hover:ring-[#00629B]/50">
                {t.team.joinButton}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}