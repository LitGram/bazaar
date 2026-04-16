import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.catalog': 'Catalog',
    'nav.register': 'Register',
    'nav.search': 'Search products...',
    'hero.title': 'Jaitsar Village Marketplace',
    'hero.subtitle': 'Everything you need from Agriculture to Kirana, available locally.',
    'cat.agriculture': 'Agriculture',
    'cat.grocery': 'Grocery',
    'cat.mandi': 'Mandi',
    'cat.dairy': 'Dairy',
    'cat.electronics': 'Electronics',
    'cat.services': 'Local Services',
    'btn.interested': 'Interested',
    'btn.view_catalog': 'View Catalog',
    'common.available': 'Available Locally',
    'footer.made_for': 'Made for Jaitsar',
    'footer.location': 'Jaitsar, Rajasthan',
    'vendor.title': 'Sell on Bazaar',
    'vendor.subtitle': 'Jaitsar Digital Partner Program',
    'vendor.fullname': 'Full Name',
    'vendor.fullnamePlaceholder': 'Enter your name',
    'vendor.phone': 'Phone Number',
    'vendor.phonePlaceholder': '10-digit mobile number',
    'vendor.businessType': 'Business Type',
    'vendor.businessPlaceholder': 'Select Category',
    'vendor.village': 'Village / Mohalla',
    'vendor.villagePlaceholder': 'E.g. Jaitsar, Suratgarh, etc.',
    'vendor.whatsapp': 'WhatsApp Number (Optional)',
    'vendor.whatsappPlaceholder': 'If different from phone',
    'vendor.submit': 'Submit Application',
    'vendor.agreement': 'By submitting, you agree to connect with our outreach team.',
    'vendor.success.title': 'Registration Sent!',
    'vendor.success.message': 'Our team will call you within 24 hours to verify your business and list your products.',
    'vendor.success.back': 'Back to Home',
  },
  hi: {
    'nav.home': 'होम',
    'nav.catalog': 'कैटलॉग',
    'nav.register': 'पंजीकरण',
    'nav.search': 'सामान ढूँढें...',
    'hero.title': 'जैतसर ग्राम बाजार',
    'hero.subtitle': 'खेती से लेकर किराना तक, सब कुछ अब आपके हाथ में।',
    'cat.agriculture': 'कृषि',
    'cat.grocery': 'किराना',
    'cat.mandi': 'मंडी',
    'cat.dairy': 'डेयरी',
    'cat.electronics': 'इलेक्ट्रॉनिक्स',
    'cat.services': 'सेवाएं',
    'btn.interested': 'रुचि है',
    'btn.view_catalog': 'कैटलॉग देखें',
    'common.available': 'स्थानीय स्तर पर उपलब्ध',
    'footer.made_for': 'जैतसर के लिए निर्मित',
    'footer.location': 'जैतसर, राजस्थान',
    'vendor.title': 'बाज़ार पर बेचें',
    'vendor.subtitle': 'जैतसर डिजिटल पार्टनर प्रोग्राम',
    'vendor.fullname': 'पूरा नाम',
    'vendor.fullnamePlaceholder': 'अपना नाम लिखें',
    'vendor.phone': 'फोन नंबर',
    'vendor.phonePlaceholder': '10-अंकों का मोबाइल नंबर',
    'vendor.businessType': 'व्यापार का प्रकार',
    'vendor.businessPlaceholder': 'श्रेणी चुनें',
    'vendor.village': 'गांव / मोहल्ला',
    'vendor.villagePlaceholder': 'जैसे: जैतसर, सूरतगढ़, आदि',
    'vendor.whatsapp': 'व्हाट्सएप नंबर (वैकल्पिक)',
    'vendor.whatsappPlaceholder': 'अगर फोन नंबर से अलग है',
    'vendor.submit': 'आवेदन जमा करें',
    'vendor.agreement': 'जमा करके, आप हमारी आउटरीच टीम से जुड़ने के लिए सहमत हैं।',
    'vendor.success.title': 'पंजीकरण भेजा गया!',
    'vendor.success.message': 'हमारी टीम आपके व्यवसाय को सत्यापित करने और आपके सामान को सूचीबद्ध करने के लिए 24 घंटों के भीतर आपको कॉल करेगी।',
    'vendor.success.back': 'वापस होम पर जाएं',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
