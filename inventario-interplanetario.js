let inventarioAlpha = [
    ["Cristal Rubion", "Plutão", 4500],
    ["Cápsula de Éter", "Júpiter", 7800],
    ["Nanofibra Luminosa", "Saturno", 12000],
    ["Minério Dourado", "Marte", 8500],
    ["Flor de Andrômeda", "Andrômeda", 13000],
    ["Ampulheta Galáctica", "Vênus", 2200],
    ["Fóssil Estelar", "Lua", 9000],
    ["Orbe do Caos", "Netuno", 9100],
    ["Lente do Vazio", "Buraco Negro X-1", 14300],
    ["Chave de Fóton", "Sol", 2300],
    ["Esfera Sombria", "Nêmesis", 13400],
    ["Granada de Íons", "Marte", 4100],
    ["Tecido Estelar", "Urano", 5300],
    ["Engrenagem Sombria", "Plutão", 6600],
    ["Fragmento Prismático", "Kepler-22b", 6400],
    ["Núcleo de Plasma", "Kepler-452b", 9100],
    ["Anel de Chronos", "Terra", 4900],
    ["Bateria Quântica", "Terra", 4000],
    ["Areia do Tempo", "Terra", 3100],
    ["Escudo de Luz", "Vênus", 4700],
    ["Catalisador Estelar", "Sirius", 12500],
    ["Pó de Cometa", "Netuno", 3000],
    ["Relógio Quântico", "Terra", 5000],
    ["Vórtice Gravitacional", "Saturno", 8800],
    ["Cristal Ômega", "Andrômeda", 13900],
    ["Cristal Ômega", "Andrômeda", 13900]
  ];
  
  let inventarioBeta = [
    ["Lâmina Solar", "Mercúrio", 6700],
    ["Cometa Engarrafado", "Netuno", 7600],
    ["Relíquia de Zordon", "Elysium", 25000],
    ["Pó Lunar", "Lua", 2900],
    ["Nevoeiro Encapsulado", "Júpiter", 3800],
    ["Chip de Matéria", "Ceres", 4100],
    ["Chave de Portais", "Júpiter", 5900],
    ["Globo de Plasma", "Terra", 7200],
    ["Mapa Estelar", "Vênus", 2100],
    ["Pedra Temporal", "Lua", 7800],
    ["Lanterna Estelar", "Sol", 3200],
    ["Fragmento de Eclipse", "Eclipse E-9", 8300],
    ["Ponte de Gelo", "Hoth", 3900],
    ["Fluido de Saturno", "Saturno", 4400],
    ["Fenda de Tempo", "Marte", 8700],
    ["Condutor Fotônico", "Sol", 3600],
    ["Memória Galáctica", "Terra", 5500],
    ["Livro de Nebulosa", "Andrômeda", 9200],
    ["Túnel Quântico", "Netuno", 4100],
    ["Canhão de Luz", "Vênus", 6800],
    ["Orbe Incandescente", "Sol", 9300],
    ["Matriz de Propulsão", "Vênus", 4500],
    ["Partícula Livre", "Urano", 5400],
    ["Capa de Invisibilidade", "Terra", 3900],
    ["Terminal de Dobra", "Alpha Centauri", 10500]
  ];

  // 1. Um item duplicado foi detectado no final do inventário Alpha. Remova a cópia.


  let itemRemovido = inventarioAlpha.pop()

console.log(`Item removido: ${itemRemovido}`);

console.log(`Depois do remover:`, inventarioAlpha);

console.table(inventarioAlpha)

// 2. Um artefato obsoleto foi removido do final da lista Beta após avaliação técnica.

let itemRemovidoBeta = inventarioBeta.pop()

console.log(`Item removido: ${itemRemovidoBeta}`);

console.log(`Depois de remover:`, inventarioBeta);

console.table(inventarioBeta)

// 3. Três novos artefatos da Terra foram entregues à nave Alpha. Adicione-os ao final.

inventarioAlpha.push(
    ["Peças cerâmicas", "Terra", 45000],
     ["Ferramentas talhadas em ossos", "Terra", 8900],
     ["Itens de adorno pessoal", 7900]
)

console.log(`Depois de adicionar:`, inventarioAlpha);

console.table(inventarioAlpha)

// 4. Dois artefatos especiais de Kepler foram coletados e adicionados à nave Beta.

inventarioBeta.push(
    ["Estrela", "Kepler", 7600], 
    ["Buraco negro", "Kepler", 11000]
)

console.log(`Depois de adicionar:`, inventarioBeta);

console.table(inventarioBeta)

// 5. Um item da Alpha precisa aparecer no topo da lista para ser destacado na vitrine

let itemRemovido2 = inventarioAlpha.pop()

inventarioAlpha.unshift(["Itens de adorno pessoal", 7900])
console.log(`Depois de dar prioridade ao item:`, inventarioAlpha);

console.table(inventarioAlpha)

// 6. Um item da Beta deve ser promovido para o início da lista para estudo prioritário.

let itemRemovido3 = inventarioBeta.pop()

inventarioBeta.unshift(["Terminal de Dobra", "Alpha Centauri", 10500])
console.log(`Depois de dar prioridade ao item:`, inventarioBeta);

console.table(inventarioBeta)

// 7. Um artefato incorreto foi inserido no topo da Alpha por engano. Ele deve ser excluído.

inventarioAlpha.shift()
console.log(`Depois de remover o primeir item:`, inventarioAlpha);

console.table(inventarioAlpha)

// 8. O primeiro item da Beta pertence a um museu e deve ser removido.

inventarioBeta.shift()
console.log(`Depois de remover o primeir item:`, inventarioBeta);

console.table(inventarioBeta)

// 9. Verifique se a “Relíquia de Zordon” está presente no inventário Beta. (nível hard)

const nomeItens = inventarioBeta.map((item) => item[0])

const reliquiaExiste = nomeItens.includes("Relíquia de Zordon");

console.log(reliquiaExiste);

// 10. Verifique se o item “Nanofibra Luminosa” ainda está disponível na Alpha. (nível hard)

const nomeItens2 = inventarioAlpha.map((item) => item[0])

const reliquiaExiste2 = nomeItens2.includes("Nanofibra Luminosa");

console.log(reliquiaExiste2);