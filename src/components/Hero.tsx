import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#020817] flex flex-col justify-center min-h-screen">
      {/* Background gradients resembling the screenshot's floating lights */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-600 rounded-full blur-[150px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-blue-600 rounded-full blur-[150px] opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center text-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] max-w-4xl"
        >
          Impulsá tu negocio con <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">tecnología</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl font-medium leading-relaxed"
        >
          Soluciones diseñadas específicamente para cubrir las necesidades de medianas y grandes empresas, ayudando a incrementar la eficiencia, centralizar la información y brindar un servicio más personalizado y coherente.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <a href="#soluciones" className="inline-flex justify-center items-center px-8 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-full transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            Quiero saber más
          </a>
        </motion.div>
      </div>

    </section>
  );
}
