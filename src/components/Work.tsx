import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Web3+AI Prompt交易所',
    category: 'AI提示詞交易平台，支援多種AI模型和類型（如Coding、Image、Video和各種多模態生成內容',
   image: 'https://blog.sagipl.com/wp-content/uploads/2022/09/web3.0-marketing.jpg',
    color: 'from-purple-600 to-blue-600',
    size: 'medium',
    link: 'https://v0-marketplace-i6xqt1.vercel.app/' // 確保連結存在
  },
    {
    title: 'Traffic Driven 高流量-全球城市時區',
    category: 'Web Info. 內容網站集群, 結合LLM技術, 快速生成各種高質量資訊內容網站',
    image: 'https://images.unsplash.com/photo-1646949576222-19d14dd7d8cb?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80',
    color: 'from-purple-600 to-blue-600',
    size: 'medium',
    link: 'https://globaltime.vercel.app/' // 確保連結存在
  },
    {
    title: 'eCommerce 區塊鏈電商',
    category: 'B2B2C古董藝術品開店平台. RWD實體資產Token化與託管服務, 結合AI智能鑑價與區塊鏈技術, 加速與便捷資產所有權交易與流通',
    image: 'https://images.unsplash.com/photo-1516547375098-9efa2ae4f0c6?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80',
    color: 'from-cyan-600 to-teal-600',
    size: 'medium',
    link: 'https://enshrine.ppap.io/' // 添加連結
  },
    {
    title: 'Creative Flow 互動式教學網站',
    category: 'Website Design 音樂 Meets AI',
    image: 'https://images.unsplash.com/photo-1636538290783-90d775ae3d6a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80',
    color: 'from-red-600 to-orange-600',
    size: 'medium',
    link: 'https://followplay-piano-assistant.lovable.app' // 添加連結
  },
    {
    title: 'ChatBot Application 聊天機器人',
    category: 'AI Saas 智能客服, 1對1客服, 多人在現聊天室',
    image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80',
    color: 'from-cyan-600 to-teal-600',
    size: 'large',
    link: 'https://wiiyo.ppap.io/login/' // 添加連結
  },
    {
    title: 'Web POS 輕量級本地端POS',
    category: 'Web Application 網站應用,.小商家.攤商自助商品管理.結帳處理與帳務紀錄.所有資訊由用戶自有裝置儲存',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80',
    color: 'from-blue-600 to-cyan-600',
    size: 'medium',
    link: 'https://aesthetic-wisp-513f3e.netlify.app/' // 添加連結
  },
  {
    title: 'Tech Innovate 用戶風控',
    category: 'Security 資訊安全與監控, 裝置.網路.瀏覽器多重Fingerprint鑑別',
    image: 'https://images.unsplash.com/photo-1610168388710-a8cfbafe6c30?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80',
    color: 'from-teal-600 to-green-600',
    size: 'small',
    link: 'https://fing1111.netlify.app/' // 添加連結
  },
  {
    title: 'Video Generated MV視頻生成',
    category: 'AI Music Video 聲音視覺化, AI視訊剪輯',
    image: 'https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=1536,f=jpeg,q=85/posts/images/684949401679956949/be224285-8e5b-43cd-8835-827465221bcf.png?auto=format&fit=crop&q=80',
    color: 'from-red-600 to-orange-600',
    size: 'large',
    link: 'https://www.youtube.com/@Rock-1491' // 添加連結
  },
  {
    title: 'Online Game H5小遊戲',
    category: 'Web Gaming 遊戲化行銷, 提升用戶黏著度',
    image: 'https://images.unsplash.com/photo-1620808244394-f4b654ff7d8b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80',
    color: 'from-red-600 to-orange-600',
    size: 'small',
    link: 'https://btcbet.vercel.app/' // 添加連結
  },
  {
    title: 'Digital Dreams 生成式AI影像',
    category: 'Visual Design 多模態圖片生成, 批量生成一致性角色與品牌識別',
    image: 'https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=1536,f=jpeg,q=85/posts/images/684949401679956949/08693aeb-aa86-4650-8f0b-8a80bd39eeff.png?auto=format&fit=crop&q=80',
    color: 'from-orange-600 to-yellow-600',
    size: 'large',
    link: 'https://tensor.art/u/684949401679956949' // 添加連結
  },
    {
    title: 'Progressive Web APP PWA應用',
    category: '漸進式網路應用程式,倒數計時器專注提升效率',
    image: 'https://images.unsplash.com/photo-1599981819329-31f250c3bc75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'from-orange-600 to-yellow-600',
    size: 'large',
    link: 'https://symphonious-zuccutto-ae2e5f.netlify.app/' // 添加連結
  },
  {
    title: 'Gaming Shop 品牌商店',
    category: 'Branding eShop 網路營銷, 品牌電商傳遞價值',
    image: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'from-red-600 to-orange-600',
    size: 'medium',
    link: 'https://v0-hoodie-store-u6nds7.vercel.app/' // 添加連結
  }
];

const getSizeClass = (size: string) => {
  switch (size) {
    case 'large':
      return 'h-[600px]';
    case 'medium':
      return 'h-[400px]';
    case 'small':
      return 'h-[300px]';
    default:
      return 'h-[400px]';
  }
};

export default function Work() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleProjectClick = (link: string) => {
    if (link) {
      window.open(link, '_blank'); // 在新標籤頁中打開連結
    } else {
      console.error('No link provided for this project.');
    }
  };

  return (
    <section ref={ref} id="work" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Work 案例</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transforming visions into digital masterpieces
          </p>
        </motion.div>

        <div className="masonry">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative w-full ${getSizeClass(project.size)} mb-6 overflow-hidden rounded-2xl cursor-pointer`}
              onClick={() => handleProjectClick(project.link)} // 確保傳遞正確的連結
            >
              <div className="absolute inset-0 bg-black/60 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-40" />
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 mix-blend-multiply group-hover:opacity-40 transition-opacity duration-300`} />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm font-medium text-white/80 backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full"
                  >
                    {project.category}
                  </motion.span>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center
                      opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="transform group-hover:-translate-y-2 transition-transform duration-300"
                >
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="h-1 w-12 bg-white rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-300" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}