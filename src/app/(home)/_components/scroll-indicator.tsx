'use client'

import { motion } from 'motion/react'

export function ScrollIndicator() {
  return (
    <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center gap-1">
      <div className="h-7 w-1 overflow-hidden rounded-full bg-muted">
        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          className="h-3 w-full rounded-full bg-nave"
        ></motion.div>
      </div>
      <span className="text-[10px] text-muted-foreground">SCROLL</span>
    </div>
  )
}
