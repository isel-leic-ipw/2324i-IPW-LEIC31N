Passo a passo para Instalar e configurar o Elasticsearch

A) Acessar documentação oficial em: https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html

B) Baixar e Extrair o Elasticsearch
- Acesse a página de downloads do Elasticsearch e baixe a versão desejada (Windows, Linux, IOS, etc.), em: https://www.elastic.co/downloads/elasticsearch

- Extrair o ficheiro zip ou tar.gz para o diretório desejado.

C) Iniciar o Elasticsearch
  - Vá até o diretório onde o Elasticsearch foi extraído.

  - Execute o Elasticsearch:
     - No Windows, execute bin\elasticsearch.bat.
     - No Linux/Mac, execute bin/elasticsearch.

D) Verifique a Instalação
 - Abra um navegador e acesse por exemplo: "http://localhost:9200".
 - Deve ver uma resposta JSON indicando que o Elasticsearch está em execução, exemplo:

{
  "name" : "your-node-name",
  "cluster_name" : "elasticsearch",
  "cluster_uuid" : "some-uuid",
  "version" : {
    "number" : "7.x.x",
    "build_flavor" : "default",
    "build_type" : "tar",
    "build_hash" : "some-hash",
    "build_date" : "some-date",
    "build_snapshot" : false,
    "lucene_version" : "some-version",
    "minimum_wire_compatibility_version" : "some-version",
    "minimum_index_compatibility_version" : "some-version"
  },
  "tagline" : "You Know, for Search"
}


E) Passo 4: Configurações Adicionais (Opcional)
  - Configurações de Cluster e Nó:
  - O ficheiro de configuração principal estará em config/elasticsearch.yml.
  - Pode ser necessário ajustar as configurações, por exemplo: nome do cluster, nome do nó, etc.

F) Instalar um Cliente ou Interface Gráfica (Opcional)
    - Pode utilizar ferramentas, "sugestão Postman" para interagir com o Elasticsearch.

G) Parar o Elasticsearch
   - Pressione Ctrl + C no terminal onde ele está sendo executado.

