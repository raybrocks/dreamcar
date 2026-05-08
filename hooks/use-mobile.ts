import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Set initial value inside callback to avoid warning if possible, but actually we can set initial value during useState
    // Wait, useState cannot access window on server side.
    // So we avoid setting it immediately. Instead we set it inside a microtask so it's not synchronous
    
    let isMounted = true;
    if (isMounted && mql.matches !== isMobile) {
      setTimeout(() => {
        setIsMobile(mql.matches)
      }, 0)
    }
    
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }
    
    mql.addEventListener("change", onChange)
    return () => {
      isMounted = false;
      mql.removeEventListener("change", onChange)
    }
  }, [isMobile])

  return isMobile
}
