import { useEffect } from 'react';

function useClickOutside(panelRef, buttonRef, isOpen, closePanelHandler) {
    useEffect(() => {
        const handleMouseDown = (event) => {
            if (!isOpen || !panelRef.current || !buttonRef.current) {
                return;
            }
            if (!panelRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
                closePanelHandler();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleMouseDown);
        }

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
        };

    }, [isOpen, panelRef, buttonRef, closePanelHandler]); 
}

export default useClickOutside;