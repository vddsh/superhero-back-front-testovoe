export const createFormData = async (target: HTMLFormElement) => {
  return (await new FormData(target))
}