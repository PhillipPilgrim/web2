import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

const AnimatedLanguage = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href="/languages"
      className="group inline-block relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="font-[family-name:var(--font-switzer-semibold)] tracking-tight text-zinc-300 text-3xl sm:text-3xl lg:text-3xl">
        Jazyky
      </h1>

      <div className="relative mt-2">
        {/* Underline */}
        <motion.div
          className="absolute -top-2 left-0 h-[1px] bg-zinc-200"
          initial={{ width: "100%" }}
          animate={{ width: isHovered ? "100%" : "80%" }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </Link>
  )
}

export {AnimatedLanguage}