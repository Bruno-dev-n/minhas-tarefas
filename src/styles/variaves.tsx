// 1. Centralização de Estilos (Design Tokens)
// Em vez de espalhar códigos hexadecimais (#44bd32) pelo app,
// usamos nomes fáceis de lembrar.
const variaveis = {
  vermelho: '#da1717', // Usado para Urgente e Remover
  verde: '#44bd32', // Usado para Concluído e Salvar
  amarelo: '#ffd53f', // Corrigido: era 'marelo'. Usado para Pendente
  amarelo2: '#e1a32a' // Um tom mais escuro, usado para Importante
}
export default variaveis
