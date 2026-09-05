import { useEffect, useState } from "react"

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "")

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    for (const el of elements) observer.observe(el)

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
