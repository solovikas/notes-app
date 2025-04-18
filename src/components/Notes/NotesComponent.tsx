import type React from "react"
import { useEffect, useState } from "react"

import { Controls } from "./components/Controls/index"

const NotesComponent: React.FC = () => {
  return (
    <div className="w-full h-fit flex-grow mb-[14vh] max-sm:mb-[10vh]">
      <Controls />
    </div>
  )
}

export default NotesComponent
