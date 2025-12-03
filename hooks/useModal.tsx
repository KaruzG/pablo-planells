"use client"

import { useState, useCallback } from 'react';

export const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = useCallback(() => {
    setIsOpen(true);
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  const toggleModal = useCallback(() => {
    setIsOpen(prev => !prev);
    document.body.style.overflow = isOpen ? 'unset' : 'hidden';
  }, [isOpen]);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
  };
};