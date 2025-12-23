/**
 * Confirmação de exclusão de um contato
 * @author Erick Ribeiro
 * @param idcon
 */

function confirmar(idcon){
	let resposta = confirm("Deseja realmente excluir este contato?")
	if(resposta){
		window.location.href = "delete?idcon=" + idcon
	}
}