import React, { createContext, useContext, useState } from 'react';

export interface PopularAgent {
  id: string;
  title: string;
  iconName: string;
  rating: string;
  users: string;
  imageUrl: string;
  imgSeed: string;
}

export interface LandingConfig {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroBgImage: string;
  heroPreviewImage: string;
  popularAgents: PopularAgent[];
  partnerTitle: string;
  partnerDescription: string;
  partnerStats: string;
  partnerStatsSub: string;
}

const defaultConfig: LandingConfig = {
  heroTitle: '智能赋能，连接未来',
  heroSubtitle: '下一代 AI 运营',
  heroDescription: '为构建、部署和扩展 AI 智能体而生的终极生态系统，助力企业实现精准高效的运营转型。',
  heroBgImage: 'https://picsum.photos/seed/world/1920/1080',
  heroPreviewImage: 'https://picsum.photos/seed/analytics/800/600',
  popularAgents: [
    { id: '1', title: '智能编程助手', iconName: 'Terminal', rating: '4.9', users: '2.4k', imageUrl: '', imgSeed: 'code' },
    { id: '2', title: '创意设计机器人', iconName: 'Palette', rating: '4.8', users: '1.8k', imageUrl: '', imgSeed: 'design' },
    { id: '3', title: '金融分析师', iconName: 'TrendingUp', rating: '4.9', users: '3.1k', imageUrl: '', imgSeed: 'finance' },
  ],
  partnerTitle: '与我们共同成长',
  partnerDescription: '加入我们的全球合作伙伴 network，将您的创意变现。我们为您提供底层设施，您只需专注于创意发挥。',
  partnerStats: '合作伙伴累计收益: $12.5M+',
  partnerStatsSub: '2024年分发至全球45个国家',
};

interface ConfigContextType {
  config: LandingConfig;
  updateConfig: (newConfig: Partial<LandingConfig>) => void;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<LandingConfig>(() => {
    const saved = localStorage.getItem('landing_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Merge saved with default to handle new fields
        return { ...defaultConfig, ...parsed };
      } catch (e) {
        console.error('Failed to parse landing_config', e);
        return defaultConfig;
      }
    }
    return defaultConfig;
  });

  const updateConfig = (newConfig: Partial<LandingConfig>) => {
    const updated = { ...config, ...newConfig };
    setConfig(updated);
    localStorage.setItem('landing_config', JSON.stringify(updated));
  };

  return (
    <ConfigContext.Provider value={{ config, updateConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) throw new Error('useConfig must be used within a ConfigProvider');
  return context;
};
