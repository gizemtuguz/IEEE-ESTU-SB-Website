# IEEE ESTU Üyelik Formu Kurulum Rehberi

## 📋 Genel Bakış

IEEE ESTU Student Branch için üyelik başvuru formu sayfası oluşturulmuştur. Bu sayfa Google Forms entegrasyonu ile çalışmaktadır ve tam Türkçe/İngilizce dil desteği sunmaktadır.

## 🌐 URL Yapısı

Üyelik sayfası aşağıdaki URL'lerden erişilebilir:
- **Türkçe**: `/uyelik` veya `/membership`
- **İngilizce**: `/membership` veya `/uyelik`

URL otomatik olarak `https://membership.ieeeestu.org` veya ana domain altında `/membership` şeklinde çalışacaktır.

## 🔧 Google Form Entegrasyonu

### Adım 1: Google Form Oluşturma

1. Google Forms'a gidin: https://forms.google.com
2. Yeni bir form oluşturun
3. Üyelik için gerekli alanları ekleyin:
   - Ad Soyad
   - E-posta
   - Telefon
   - Bölüm
   - Sınıf
   - İlgi Alanları
   - vs.

### Adım 2: Form URL'sini Alma

1. Google Forms'da "Gönder" butonuna tıklayın
2. `<>` (Embed) ikonuna tıklayın
3. Form URL'sini kopyalayın (genellikle `https://docs.google.com/forms/d/e/...` şeklinde)

### Adım 3: URL'yi Projeye Ekleme

`/MembershipPage.tsx` dosyasını açın ve aşağıdaki satırı bulun:

```typescript
const GOOGLE_FORM_BASE_URL = "YOUR_MEMBERSHIP_GOOGLE_FORM_URL_HERE";
```

Bu satırı kendi Google Form URL'nizle değiştirin:

```typescript
const GOOGLE_FORM_BASE_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf.../viewform";
```

## ✨ Özellikler

### 1. **Tam Dil Desteği**
- Türkçe ve İngilizce otomatik geçiş
- Tüm UI elementleri çevrilmiş
- Dil tercihi localStorage'da saklanıyor

### 2. **Dark Mode Desteği**
- Google Forms iframe'i için CSS filter yöntemi
- Otomatik tema senkronizasyonu
- Tema tercihi localStorage'da saklanıyor

### 3. **Responsive Tasarım**
- Mobil, tablet ve desktop uyumlu
- Touch-friendly butonlar
- Optimize edilmiş form görünümü

### 4. **Üye Avantajları Bölümü**
- 4 ana kategori:
  - Teknik Gelişim
  - Networking
  - Projeler
  - Etkinlikler
- Hover efektleri
- İkon bazlı görsel sunum

### 5. **İletişim Bilgileri**
- E-posta: ieee@estu.edu.tr
- Telefon: +90 222 335 05 80
- Adres: ESTU Mühendislik Fakültesi
- Sosyal medya linkleri

## 🔗 Buton Yönlendirmeleri

Üyelik formuna yönlendiren butonlar:

1. **Header (Desktop & Mobile)**
   - "Üye Ol" / "Join Us" butonu
   - `/membership` sayfasına yönlendiriyor

2. **Team Section (Ana Sayfa)**
   - "Kayıt Formu" / "Registration Form" butonu
   - `/membership` sayfasına yönlendiriyor

3. **Hamburger Menü (Mobil)**
   - "Üye Ol" / "Join Us" butonu
   - `/membership` sayfasına yönlendiriyor

## 📱 Mobil Optimizasyon

- Responsive form iframe (800px yükseklik)
- Stack layout (kartlar alt alta)
- Touch-friendly butonlar
- Optimize edilmiş padding ve spacing

## 🎨 Dark Mode İçin Google Forms

Google Forms dark mode için şu CSS filter kullanılıyor:

```css
filter: invert(0.9) hue-rotate(180deg)
```

Bu yöntem:
- ✅ Google Forms'u karanlık temaya çeviriyor
- ✅ Metin okunabilirliğini koruyor
- ✅ Performans dostu
- ⚠️ Bazı renklerde hafif kayma olabilir

## 🚀 Deployment

### Vercel / Netlify Routing

Eğer Vercel veya Netlify kullanıyorsanız, `vercel.json` veya `netlify.toml` dosyası oluşturun:

**Vercel (`vercel.json`):**
```json
{
  "rewrites": [
    { "source": "/membership", "destination": "/" },
    { "source": "/uyelik", "destination": "/" },
    { "source": "/events", "destination": "/" },
    { "source": "/etkinlikler", "destination": "/" }
  ]
}
```

**Netlify (`netlify.toml`):**
```toml
[[redirects]]
  from = "/membership"
  to = "/"
  status = 200

[[redirects]]
  from = "/uyelik"
  to = "/"
  status = 200

[[redirects]]
  from = "/events"
  to = "/"
  status = 200

[[redirects]]
  from = "/etkinlikler"
  to = "/"
  status = 200
```

## 📝 Özelleştirme

### Renk Değişiklikleri

Tüm mavi renkler `#00629B` kullanıyor. Değiştirmek için:

```tsx
style={{ backgroundColor: '#00629B' }}
```

satırlarını bulup yeni renginizi yazın.

### İkon Değişiklikleri

Lucide React ikonları kullanılıyor:

```tsx
import { Lightbulb, Users, Rocket, Trophy } from "lucide-react";
```

### Çeviri Ekleme

`/translations.ts` dosyasında `membershipPage` objesini düzenleyin.

## 🐛 Sorun Giderme

### Form Görünmüyor
- Google Form URL'sinin doğru olduğundan emin olun
- URL'nin `viewform` ile bittiğinden emin olun
- CORS ayarlarını kontrol edin

### Dark Mode Çalışmıyor
- `localStorage` kontrolü yapın
- CSS filter desteğini kontrol edin
- Theme senkronizasyonunu test edin

### Mobil Görünüm Bozuk
- Responsive class'ları kontrol edin
- `flex-col sm:flex-row` gibi breakpoint'leri inceleyin
- Padding ve margin değerlerini gözden geçirin

## 📞 Destek

Sorunlarınız için:
- E-posta: ieee@estu.edu.tr
- GitHub: [Proje repository]

---

**Son Güncelleme:** 23 Ekim 2025
**Versiyon:** 1.0.0
