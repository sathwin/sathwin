"use client";

import { motion } from "framer-motion";

interface ProfileImageProps {
  src?: string;
  alt: string;
  size?: number;
}

export default function ProfileImage({ src = "/profile.jpg", alt, size = 200 }: ProfileImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex-shrink-0"
      style={{ width: size, height: size }}
    >
      {/* Profile frame - black background */}
      <div
        className="relative bg-transparent overflow-hidden"
        style={{ width: size }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-auto object-contain"
            style={{
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 90%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 90%)',
            }}
          />
        ) : (
          // Fallback gradient avatar
          <div className="w-full aspect-square bg-gradient-to-br from-[#ff6b35]/20 via-[#f7931e]/20 to-[#ffd166]/20 flex items-center justify-center rounded-2xl">
            <span className="text-5xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#f7931e] bg-clip-text text-transparent tracking-tighter">
              {alt.split(' ').map(n => n[0]).join('').toUpperCase()}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
