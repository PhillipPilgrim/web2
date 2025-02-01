import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "@deemlol/next-icons"

const AnimatedTitle = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href="/about"
      className="group inline-block relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="font-[family-name:var(--font-switzer-semibold)] text-4xl tracking-tight text-zinc-200 sm:text-5xl lg:text-6xl">
        Filip Musálek
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

export {AnimatedTitle}