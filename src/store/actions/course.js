export function toggleLesson(module, lesson) {
  return {
    type: 'TOGGLE_LESSON', // Sempre precisa dessa chave para o redux
    module,
    lesson,
  };
}