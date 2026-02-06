import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'

const ScrollToTop = () => {
    const { pathname } = useLocation()
    const lenis = useLenis()

    useEffect(() => {
        // 1. Native Window Scroll (Instant)
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }
        window.scrollTo(0, 0)

        // 2. Lenis Scroll (Instant)
        if (lenis) {
            lenis.scrollTo(0, { immediate: true })
        }

    }, [pathname, lenis])

    return null
}

export default ScrollToTop
