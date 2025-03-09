import React, { useState } from 'react';
import { Search, Star, Sparkles, Brain, Globe, ChevronRight, ExternalLink, Rocket, Code, Palette, Book, Terminal, Cloud, ChevronDown, ChevronUp } from 'lucide-react';

interface Resource {
  title: string;
  description: string;
  url: string;
  category: 'ai' | 'tech' | 'learning' | 'design' | 'cloud' | 'dev';
  featured?: boolean;
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['ai', 'tech', 'learning', 'design', 'cloud', 'dev']);
  
  const resources: Resource[] = [
    // AI Tools
    {
      title: 'ChatGPT',
      description: '领先的AI对话模型，支持自然语言交互和多样化任务',
      url: 'https://chat.openai.com',
      category: 'ai',
      featured: true
    },
    {
      title: 'Midjourney',
      description: '强大的AI图像生成工具，创造惊艳的艺术作品',
      url: 'https://midjourney.com',
      category: 'ai',
      featured: true
    },
    {
      title: 'Hugging Face',
      description: 'AI模型开源社区，机器学习资源库',
      url: 'https://huggingface.co',
      category: 'ai'
    },
    {
      title: 'Claude',
      description: '智能AI助手，擅长分析和创作1',
      url: 'https://claude.ai',
      category: 'ai'
    },
    {
      title: 'Stable Diffusion',
      description: '开源图像生成模型，支持本地部署',
      url: 'https://stability.ai',
      category: 'ai'
    },
    {
      title: 'Anthropic',
      description: '安全可靠的AI研究与应用平台',
      url: 'https://anthropic.com',
      category: 'ai'
    },
    {
      title: 'Runway',
      description: 'AI视频生成与编辑工具',
      url: 'https://runway.ml',
      category: 'ai'
    },
    {
      title: 'Jasper',
      description: 'AI文案写作助手',
      url: 'https://jasper.ai',
      category: 'ai'
    },

    // Tech Resources
    {
      title: 'GitHub',
      description: '全球最大的代码托管平台，开发者必备工具',
      url: 'https://github.com',
      category: 'tech',
      featured: true
    },
    {
      title: 'Stack Overflow',
      description: '程序员最大的技术问答社区',
      url: 'https://stackoverflow.com',
      category: 'tech'
    },
    {
      title: 'Dev.to',
      description: '开发者分享社区，技术文章和讨论',
      url: 'https://dev.to',
      category: 'tech'
    },
    {
      title: 'Product Hunt',
      description: '发现最新科技产品和创新工具',
      url: 'https://producthunt.com',
      category: 'tech'
    },
    {
      title: 'Hacker News',
      description: '技术新闻和深度讨论社区',
      url: 'https://news.ycombinator.com',
      category: 'tech'
    },
    {
      title: 'MDN Web Docs',
      description: '最全面的Web开发文档资源',
      url: 'https://developer.mozilla.org',
      category: 'tech'
    },
    {
      title: 'CodePen',
      description: '在线代码编辑与分享平台',
      url: 'https://codepen.io',
      category: 'tech'
    },

    // Learning Platforms
    {
      title: 'Coursera',
      description: '顶级院校在线课程平台，提供专业认证',
      url: 'https://coursera.org',
      category: 'learning',
      featured: true
    },
    {
      title: 'freeCodeCamp',
      description: '免费学习编程的开源社区',
      url: 'https://freecodecamp.org',
      category: 'learning'
    },
    {
      title: 'Udemy',
      description: '实用技能在线学习平台',
      url: 'https://udemy.com',
      category: 'learning'
    },
    {
      title: 'edX',
      description: '高质量在线教育平台',
      url: 'https://edx.org',
      category: 'learning'
    },
    {
      title: 'LeetCode',
      description: '程序员刷题平台',
      url: 'https://leetcode.com',
      category: 'learning'
    },
    {
      title: 'Codecademy',
      description: '交互式编程学习平台',
      url: 'https://codecademy.com',
      category: 'learning'
    },
    {
      title: 'Khan Academy',
      description: '免费优质教育资源',
      url: 'https://khanacademy.org',
      category: 'learning'
    },

    // Design Resources
    {
      title: 'Figma',
      description: '专业的在线设计协作工具',
      url: 'https://figma.com',
      category: 'design',
      featured: true
    },
    {
      title: 'Dribbble',
      description: '设计师作品展示与灵感平台',
      url: 'https://dribbble.com',
      category: 'design'
    },
    {
      title: 'Behance',
      description: '创意作品集与设计社区',
      url: 'https://behance.net',
      category: 'design'
    },
    {
      title: 'Canva',
      description: '简单易用的在线设计工具',
      url: 'https://canva.com',
      category: 'design'
    },
    {
      title: 'Coolors',
      description: '配色方案生成工具',
      url: 'https://coolors.co',
      category: 'design'
    },
    {
      title: 'Unsplash',
      description: '免费高质量图片资源',
      url: 'https://unsplash.com',
      category: 'design'
    },
    {
      title: 'Font Awesome',
      description: '图标字体库',
      url: 'https://fontawesome.com',
      category: 'design'
    },

    // Cloud Services
    {
      title: 'Vercel',
      description: '现代网站托管和部署平台',
      url: 'https://vercel.com',
      category: 'cloud',
      featured: true
    },
    {
      title: 'Netlify',
      description: '自动化的网站构建和部署',
      url: 'https://netlify.com',
      category: 'cloud'
    },
    {
      title: 'Railway',
      description: '简单高效的应用部署平台',
      url: 'https://railway.app',
      category: 'cloud'
    },
    {
      title: 'Supabase',
      description: '开源的Firebase替代品',
      url: 'https://supabase.com',
      category: 'cloud'
    },
    {
      title: 'Cloudflare',
      description: 'CDN和网站安全服务',
      url: 'https://cloudflare.com',
      category: 'cloud'
    },
    {
      title: 'DigitalOcean',
      description: '云服务器和开发者工具',
      url: 'https://digitalocean.com',
      category: 'cloud'
    },

    // Development Tools
    {
      title: 'VS Code',
      description: '强大的代码编辑器',
      url: 'https://code.visualstudio.com',
      category: 'dev',
      featured: true
    },
    {
      title: 'Postman',
      description: 'API开发和测试工具',
      url: 'https://postman.com',
      category: 'dev'
    },
    {
      title: 'Docker',
      description: '容器化应用开发平台',
      url: 'https://docker.com',
      category: 'dev'
    },
    {
      title: 'Git',
      description: '版本控制系统',
      url: 'https://git-scm.com',
      category: 'dev'
    },
    {
      title: 'npm',
      description: 'Node.js包管理器',
      url: 'https://npmjs.com',
      category: 'dev'
    },
    {
      title: 'Insomnia',
      description: 'API设计和测试工具',
      url: 'https://insomnia.rest',
      category: 'dev'
    }
  ];

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredResources = resources.filter(r => r.featured);
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai':
        return <Brain className="w-5 h-5 text-purple-500" />;
      case 'tech':
        return <Rocket className="w-5 h-5 text-blue-500" />;
      case 'learning':
        return <Book className="w-5 h-5 text-green-500" />;
      case 'design':
        return <Palette className="w-5 h-5 text-pink-500" />;
      case 'cloud':
        return <Cloud className="w-5 h-5 text-sky-500" />;
      case 'dev':
        return <Terminal className="w-5 h-5 text-amber-500" />;
      default:
        return <Code className="w-5 h-5 text-slate-500" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai':
        return 'purple';
      case 'tech':
        return 'blue';
      case 'learning':
        return 'green';
      case 'design':
        return 'pink';
      case 'cloud':
        return 'sky';
      case 'dev':
        return 'amber';
      default:
        return 'slate';
    }
  };
  
  const toggleCategory = (category: string) => {
    setExpandedCategories((prev: string[]) => 
      prev.includes(category) 
        ? prev.filter((cat: string) => cat !== category) 
        : [...prev, category]
    );
  };

  const isCategoryExpanded = (category: string): boolean => {
    return expandedCategories.includes(category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-900/20"></div>
        <div className="max-w-5xl mx-auto px-4 py-12 relative">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white flex items-center justify-center gap-3 mb-4">
              <Globe className="w-8 h-8 md:w-10 md:h-10" />
              精英导航
            </h1>
            <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto font-medium">
              探索数字世界无限可能 · 发现优质资源终极指南
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 -mt-8">
        {/* Search */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-white rounded-xl shadow-lg transform -skew-y-2"></div>
          <div className="relative bg-white rounded-xl shadow-lg p-4">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5" />
              <input
                type="text"
                placeholder="搜索优质资源..."
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border-2 border-slate-100 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Featured Section */}
        {searchTerm === '' && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-yellow-500" />
              精选推荐
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {featuredResources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200"
                >
                  <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 line-clamp-2">{resource.description}</p>
                  <div className="mt-3 flex items-center text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-medium">了解更多</span>
                    <ChevronRight className="w-3 h-3 ml-1" />
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Categories */}
        <div className="space-y-8 pb-12">
          {['ai', 'tech', 'learning', 'design', 'cloud', 'dev'].map((category) => (
            <section key={category}>
              <div 
                className="text-xl font-bold text-slate-800 flex items-center justify-between mb-4 cursor-pointer hover:opacity-80 transition-opacity p-2 rounded-lg hover:bg-slate-50"
                onClick={() => toggleCategory(category)}
              >
                <div className="flex items-center gap-2">
                  {getCategoryIcon(category)}
                  {{
                    ai: 'AI工具',
                    tech: '技术资源',
                    learning: '学习平台',
                    design: '设计资源',
                    cloud: '云服务',
                    dev: '开发工具'
                  }[category]}
                  <span className={`ml-2 text-xs font-normal bg-${getCategoryColor(category)}-100 text-${getCategoryColor(category)}-700 px-2 py-0.5 rounded-full`}>
                    {filteredResources.filter(r => r.category === category).length}
                  </span>
                </div>
                <div className={`text-${getCategoryColor(category)}-500`}>
                  {isCategoryExpanded(category) ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </div>
              
              <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-3 overflow-hidden transition-all duration-300 ease-in-out ${isCategoryExpanded(category) ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {filteredResources
                  .filter(r => r.category === category)
                  .map((resource) => (
                    <a
                      key={resource.title}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-${getCategoryColor(category)}-200`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className={`text-sm font-semibold text-slate-800 group-hover:text-${getCategoryColor(category)}-600 transition-colors`}>
                            {resource.title}
                          </h3>
                          <p className="text-xs text-slate-600 mt-1">{resource.description}</p>
                        </div>
                        <ExternalLink className={`w-4 h-4 text-slate-400 group-hover:text-${getCategoryColor(category)}-500 transition-colors`} />
                      </div>
                    </a>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;