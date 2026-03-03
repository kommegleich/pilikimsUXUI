import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // 항상 창 전체의 마우스 움직임을 추적하여 부드러운 호버칩 좌표 갱신 유지
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex flex-col items-center justify-center">

      {/* Centered Text */}
      <motion.div
        className="text-4xl md:text-6xl font-black tracking-tight cursor-default z-10"
        style={{ fontFamily: 'Inter, sans-serif' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        PLK
      </motion.div>

      {/* Hover Chip */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="fixed pointer-events-none z-50 text-white text-xs px-3 py-1.5 rounded-md font-medium tracking-wide shadow-lg"
            style={{
              backgroundColor: '#121212',
              left: mousePosition.x + 15,
              top: mousePosition.y + 15,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
          >
            맥락
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App;
