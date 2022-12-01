import { useEffect } from 'react'
import ClientOnlyPortal from './ClientOnlyPortal'
import styles from './modal.module.css'

export default function Modal({ children, toggleModal }) {
  useEffect(() => {
    // Close dropdown via escape key
    const handleEsc = event => {
      if (event.keyCode === 27) {
        toggleModal();
      }
    }

    window.addEventListener('keydown', handleEsc, false);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    }
  }, []);

  return (
    <ClientOnlyPortal selector="#modal">
      <div className={styles.portal}>
        <div className={styles.portalContainer}>
          {children}
          <div
            className={styles.close}
            onClick={toggleModal}
          />
        </div>
      </div>

      <style jsx>{`
        :global(body) {
          overflow: hidden;
        }
      `}</style>
    </ClientOnlyPortal>
  )
}