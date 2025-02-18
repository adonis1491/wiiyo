import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from 'emailjs-com'; // 導入 EmailJS

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // 新增狀態來管理提示訊息

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 使用 EmailJS 發送郵件
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // 從環境變量讀取 Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // 從環境變量讀取 Template ID
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID // 從環境變量讀取 User ID (API Key)
      )
      .then(
        (response) => {
          setIsSubmitted(true); // 表單提交成功後，設置狀態為 true
          setFormData({
            name: '',
            email: '',
            message: ''
          });

          // 5 秒後自動隱藏提示訊息
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        },
        (error) => {
          console.error('Failed to send message:', error);
          alert('Failed to send message.');
        }
      );
  };

  return (
    <section ref={ref} id="contact" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Together 洽談</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to complete your digital presence? Let's contact us. 請和我聯繫.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {isSubmitted ? ( // 如果表單已提交，顯示提示訊息
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-8 bg-white/10 rounded-lg"
            >
              <p className="text-xl text-white">
                已送出，我們會盡快回覆您。Thanks.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
              onSubmit={handleSubmit}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                      placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                      transition-all duration-300"
                    placeholder="Tom Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                      placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                      transition-all duration-300"
                    placeholder="tomtom@gmail.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                    placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                    transition-all duration-300"
                  placeholder="Tell us about your project. 有甚麼想和我們聊聊..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg px-8 py-4
                  flex items-center justify-center space-x-2 hover:from-purple-700 hover:to-pink-700 
                  transition-all duration-300"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}