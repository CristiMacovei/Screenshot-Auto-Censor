export function censorWord(str: string) {
  const allComponents = Array.from(document.querySelectorAll('*'));

  allComponents.forEach((component) => {
    if (
      component.children.length === 0 &&
      component.textContent.toLowerCase().includes(str.toLowerCase())
    ) {
      component.textContent = component.textContent.replaceAll(
        str,
        'Braindead Humanoid'
      );
    }
  });
}
