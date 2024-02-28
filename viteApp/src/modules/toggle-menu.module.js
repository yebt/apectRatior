import Alpine from 'alpinejs'

Alpine.data('toggleMenu', () => ({
  isOpen: false,
  toggle () {
    this.isOpen = !this.isOpen
  }
}))
