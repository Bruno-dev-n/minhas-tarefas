// 1. O que é um Enum?
// É uma forma de dar nomes amigáveis a valores fixos.
// Em vez de escrever "urgente" solto no código, usamos Prioridade.URGENTE.

// 2. Enum de Prioridades
// Define os níveis de importância que uma tarefa pode ter.
export enum Prioridade {
  URGENTE = 'urgente',
  IMPORTANTE = 'importante',
  NORMAL = 'normal'
}

// 3. Enum de Status
// Define o ciclo de vida da tarefa (se ela está pronta ou não).
export enum Status {
  PENDENTE = 'pendente',
  CONCLUIDO = 'concluido'
}
