import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface BlogPostData {
  tr: {
    title: string;
    excerpt: string;
    author: string;
    category: string;
    readTime: string;
  };
  en: {
    title: string;
    excerpt: string;
    author: string;
    category: string;
    readTime: string;
  };
  date: string;
  image: string;
}

export function Blog() {
  const { t, language } = useLanguage();
  
  const blogPosts: BlogPostData[] = [
    {
      tr: {
        title: "IEEE Xtreme Yarışmasına Hazırlık İpuçları",
        excerpt: "24 saatlik programlama maratonu için etkili hazırlık stratejileri ve algoritmik problem çözme teknikleri.",
        author: "Ahmet Yılmaz",
        category: "Yarışma",
        readTime: "5 dk"
      },
      en: {
        title: "IEEE Xtreme Competition Preparation Tips",
        excerpt: "Effective preparation strategies and algorithmic problem-solving techniques for the 24-hour programming marathon.",
        author: "Ahmet Yılmaz",
        category: "Competition",
        readTime: "5 min"
      },
      date: "2025-08-15",
      image: "https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBjb21wZXRpdGlvbiUyMGhhY2thdGhvbnxlbnwxfHx8fDE3NTcxODg4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      tr: {
        title: "Machine Learning'e Başlangıç Rehberi",
        excerpt: "Yapay zeka ve makine öğrenmesi dünyasına adım atmak isteyenler için temel kavramlar ve öğrenme yolları.",
        author: "Zeynep Kaya",
        category: "Teknik",
        readTime: "8 dk"
      },
      en: {
        title: "Beginner's Guide to Machine Learning",
        excerpt: "Essential concepts and learning paths for those wanting to step into the world of artificial intelligence and machine learning.",
        author: "Zeynep Kaya",
        category: "Technical",
        readTime: "8 min"
      },
      date: "2025-08-10",
      image: "https://images.unsplash.com/photo-1596496356933-9b6e0b186b88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd29ya3Nob3AlMjBzdHVkZW50c3xlbnwxfHx8fDE3NTcyNDYzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      tr: {
        title: "IEEE Üyeliğinin Faydaları",
        excerpt: "IEEE üyesi olmanın akademik ve profesyonel kariyerinize sağladığı avantajlar ve fırsatlar.",
        author: "Mehmet Demir",
        category: "IEEE",
        readTime: "4 dk"
      },
      en: {
        title: "Benefits of IEEE Membership",
        excerpt: "Advantages and opportunities that IEEE membership provides for your academic and professional career.",
        author: "Mehmet Demir",
        category: "IEEE",
        readTime: "4 min"
      },
      date: "2025-08-05",
      image: "https://images.unsplash.com/photo-1672917187338-7f81ecac3d3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzU3MjQ2MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const getCategoryColor = (category: string) => {
    const categoryKey = category.toLowerCase();
    if (categoryKey === "yarışma" || categoryKey === "competition") {
      return "bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200";
    }
    if (categoryKey === "teknik" || categoryKey === "technical") {
      return "bg-slate-200 dark:bg-slate-700 text-gray-800 dark:text-gray-100";
    }
    if (categoryKey === "ieee") {
      return "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200";
    }
    return "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const locale = language === 'tr' ? 'tr-TR' : 'en-US';
    return date.toLocaleDateString(locale, { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" className="py-20 bg-gray-100 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.blog.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.blog.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            const postData = language === 'tr' ? post.tr : post.en;
            
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl dark:hover:shadow-[#00629B]/20 dark:hover:ring-1 dark:hover:ring-[#00629B]/50 transition-all duration-300 rounded-2xl border-0 bg-white dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-970 hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={post.image}
                    alt={postData.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(postData.category)}`}>
                      {postData.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:transition-colors duration-200" style={{ '&:hover': { color: '#00629B' } }} onMouseEnter={(e) => e.currentTarget.style.color = '#00629B'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                    {postData.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {postData.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <span>{postData.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <button 
                      className="font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform duration-200"
                      style={{ color: '#00629B' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#004f7c'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#00629B'}
                    >
                      {t.blog.readMore}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
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
