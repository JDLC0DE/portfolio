export const handleScroll = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    // Obtener el margen superior dinámicamente
    const computedStyle = window.getComputedStyle(element)
    const marginTop = parseInt(computedStyle.marginTop, 10) || 0
    const headerHeight = 65

    // Calcular la posición de desplazamiento con ajuste del margen
    const yPosition =
      element.getBoundingClientRect().top - marginTop - headerHeight

    window.scrollTo({ top: yPosition, behavior: 'smooth' })
  }
}
