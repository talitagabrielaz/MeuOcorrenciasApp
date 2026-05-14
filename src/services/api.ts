//Base da nossa URL
const API_URL = 'http://api-ocorrencia.muapps.com.br';

//Slug de identificação aluno
export const SLUG_TALITA = 'seu_nome';

/*tipo de dados que irão ser enviados*/
export type CriarOcorrenciaPayload = {
    titulo: string;
    descricao: string;
    local: string;
    slug: string;
};

//função para bsucar as nossas ocorrências 
export async function listarOcorrenciasPorSlug(slug : string){
    const respostas = await fetch(`${API_URL}/ocorrencias?slug=$slug{slug}`);

        if(!respostas.ok){
            throw new Error('Erro ao buscar ocorrencias');
        }

        return await respostas.json();
}
export async function criarOcorrencia(dados: CriarOcorrenciaPayload){
    const resposta = await fetch(`${API_URL}/ocorrencias`,{
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(dados),
    });

    if(!resposta.ok){
         throw new Error('Erro ao buscar ocorrencias');
    }
        return await resposta.json();
}