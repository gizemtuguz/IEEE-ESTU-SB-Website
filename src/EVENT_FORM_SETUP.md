# Etkinlik Başvuru Formu Kurulum Rehberi

## 📋 Genel Bakış

Etkinlik başvuru formu sayfası artık sitenize entegre edildi. Bu sayfa hem ana site içinde hem de ayrı bir subdomain'de (events.ieeeestu.org) kullanılabilir.

## 🔧 Google Form Entegrasyonu

### Adım 1: Google Form Oluşturma
1. Google Forms'a gidin: https://forms.google.com
2. Yeni bir form oluşturun
3. Etkinlik başvurusu için gerekli alanları ekleyin:
   - Ad Soyad
   - E-posta
   - Telefon
   - Öğrenci Numarası
   - Bölüm
   - Sınıf
   - İlgili Etkinlik
   - vb.

### Adım 2: Form Embed Kodu Alma
1. Google Form'u açın
2. Sağ üst köşedeki "Gönder" butonuna tıklayın
3. "< >" (Embed HTML) sekmesini seçin
4. Form URL'sini kopyalayın (örnek: `https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true`)

### Adım 3: URL'yi Projeye Ekleme
`/EventApplicationPage.tsx` dosyasını açın ve şu satırı bulun:

```typescript
const GOOGLE_FORM_URL = "YOUR_GOOGLE_FORM_URL_HERE";
```

Bu satırı kopyaladığınız Google Form URL'si ile değiştirin:

```typescript
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true";
```

## 🌐 Deployment Seçenekleri

### Seçenek 1: Subdomain (events.ieeeestu.org)
1. DNS ayarlarınızda `events` subdomain'i için A kaydı oluşturun
2. Sunucunuzda yeni bir virtual host yapılandırın
3. EventApplicationPage.tsx'i ana sayfa olarak ayarlayın
4. SSL sertifikası ekleyin (Let's Encrypt önerilir)

### Seçenek 2: Ana Site İçinde Route
Ana site zaten `/events` veya `/etkinlikler` path'lerini tanıyor. Kullanıcılar şu URL'lerle sayfaya erişebilir:
- `https://www.ieeeestu.org/events`
- `https://www.ieeeestu.org/etkinlikler`

## 🔗 Link Yapılandırması

Etkinlik kartlarındaki "Başvuru Formu" butonu şu anda `https://events.ieeeestu.org` adresine yönlendiriyor.

Bu linki değiştirmek için `/components/Events.tsx` dosyasında şu satırı bulun:

```tsx
<a href="https://events.ieeeestu.org" target="_blank" rel="noopener noreferrer">
```

İstediğiniz URL ile değiştirin:
- Subdomain kullanıyorsanız: `https://events.ieeeestu.org`
- Ana site route kullanıyorsanız: `/events` veya `/etkinlikler`

## 🎨 Özelleştirme

### Sayfa Başlığı ve Açıklamalar
`/translations.ts` dosyasında `events.applicationPage` bölümünü düzenleyin:

```typescript
applicationPage: {
  title: "Etkinlik Başvuru Formu",
  subtitle: "Etkinliklerimize başvurmak için aşağıdaki formu doldurun.",
  description: "...",
  backToHome: "Ana Sayfaya Dön",
  loadingForm: "Form yükleniyor...",
  formNotAvailable: "Form şu anda kullanılamıyor...",
}
```

### Etkinlik Bilgi Kartları
EventApplicationPage.tsx dosyasında info kartlarını özelleştirebilirsiniz:
- Tarih bilgisi
- Süre
- Konum
- Katılım durumu

### Renk ve Stil
- Ana renk: `#00629B` (IEEE ESTU mavi)
- Buton hover rengi: `#004f7c`
- Dark mode tam destekleniyor

## 📱 Responsive Tasarım

Sayfa tüm cihazlarda düzgün çalışacak şekilde tasarlandı:
- Mobil (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🌍 Dil Desteği

Sayfa Türkçe ve İngilizce dillerini destekler. Kullanıcılar header'daki dil değiştirme butonu ile dil seçebilir.

## ✅ Test Checklist

- [ ] Google Form URL'si doğru mu yapılandırıldı?
- [ ] Form iframe'i düzgün yükleniyor mu?
- [ ] Ana sayfaya dönüş butonu çalışıyor mu?
- [ ] Dil değiştirme çalışıyor mu?
- [ ] Dark mode doğru çalışıyor mu?
- [ ] Mobil görünüm test edildi mi?
- [ ] SSL sertifikası var mı? (subdomain için)
- [ ] Form gönderimi sonrası e-posta bildirimi ayarlandı mı?

## 🆘 Sorun Giderme

### Form Görünmüyor
- Google Form URL'sini kontrol edin
- `embedded=true` parametresinin URL'de olduğundan emin olun
- Tarayıcı konsolunda hata var mı kontrol edin

### Sayfa Yüklenmiyor
- `/EventApplicationPage.tsx` dosyasının doğru import edildiğini kontrol edin
- App.tsx'teki route kontrolünü inceleyin

### Stil Sorunları
- globals.css dosyasının yüklendiğinden emin olun
- Dark mode için localStorage'da 'theme' değerini kontrol edin

## 📞 İletişim

Teknik destek için: ieee@estu.edu.tr
