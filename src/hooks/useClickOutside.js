import { useEffect } from 'react';

function useClickOutside(panelRef, triggerRef, isOpen, closePanelHandler) {
    useEffect(() => {
        const handleMouseDown = (event) => {
            if (!isOpen || !panelRef.current) {
                return;
            }
            if (triggerRef.current && triggerRef.current.contains(event.target)) {
                return;
            }
            if (!panelRef.current.contains(event.target)) {
                closePanelHandler();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleMouseDown);
        }

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
        };

    }, [isOpen, panelRef, triggerRef, closePanelHandler]);
}

export default useClickOutside;