# Lyken Agency Website - Open Decisions

## Decisao ativa - target `#about`

Status: decisao ativa e documentada.

Decisao: manter temporariamente o target `#about` apontando para a secao Journey.

Motivo: nesta etapa, a secao Journey funciona como a apresentacao editorial da Lyken e ancora a narrativa inicial da marca.

Impacto: a navegacao permanece estavel entre EN/PT e preserva os targets documentados da Fase 03.

Revisao futura: esta decisao podera ser revisada quando uma secao About dedicada for definida ou quando a arquitetura final das secoes institucionais for auditada.

## Decisao registrada - ordem atual com Process

Status: mantida conforme implementacao atual e UX Flow documentado.

Decisao: manter a ordem Journey -> Services -> Process -> Solutions -> Why Lyken -> Contact.

Motivo: a ordem atual coincide com o fluxo definido em docs/UX_FLOW_AND_NAVIGATION.md e preserva Process como ponte metodologica entre a oferta principal e as solucoes por estagio.

Revisao futura: a ordem pode ser reavaliada na auditoria final de UX, sem expandir escopo da Fase 07.

## Decisao registrada - Transformation Layers

Status: removido dos dados da Fase 07.

Decisao: Transformation Layers foi removido dos dados da Fase 07 porque nao ha componente renderizado nesta etapa.

Motivo: evitar dados mortos e manter o conteudo alinhado ao que o app realmente renderiza.

Revisao futura: caso a secao seja retomada, deve ser replanejada em fase propria ou em revisao posterior, sem afetar Services, Solutions e Why Lyken.

## Decisao registrada - placeholder de services

Status: placeholder removido.

Decisao: o placeholder em src/data/services foi removido, porque a arquitetura validada centraliza o conteudo bilingue em src/data/content/en.js e src/data/content/pt.js.

Motivo: evitar estrutura ambigua enquanto nao existe refatoracao ativa para separar os dados dessa secao.

Revisao futura: uma separacao por dominio so deve ser retomada quando houver plano de migracao claro.

## Decisao registrada - motion da Fase 07

Status: pendencia registrada para fase posterior.

Decisao: scroll reveals de Services, Solutions e Why Lyken serao tratados na Fase 08 - Motion & Interactions.

Motivo: manter o controle de escopo desta correcao e preservar consistencia global do motion system.

## Decisao registrada - Contact congelado ate Fase 09

Status: congelado para Fase 08.

Decisao: Contact/Form ja existe como secao visual/previa no projeto, mas sua logica funcional, validacao final, envio, integracoes e otimizacao de conversao ficam congeladas ate a Fase 09 - Contact & Conversion.

Motivo: durante a Fase 08, nenhuma evolucao funcional de Contact deve ser feita.

Revisao futura: revisar comportamento, validacao, envio e integracoes somente na Fase 09.

## Decisao registrada - loading e motion atuais da Fase 08

Status: preservar ate nova auditoria visual.

Decisao: a experiencia densa de loading em `src/components/motion/LoadingExperience.jsx` deve ser preservada, incluindo particulas, linhas, malha digital, formacao `LYKEN`, assinatura `Agency` e frase bilingue.

Motivo: esta experiencia foi restaurada apos uma correcao anterior ter simplificado indevidamente o site. Correcoes futuras nao devem remover, simplificar ou redesenhar o loading sem pedido explicito do usuario.

Ajustes recentes registrados: convergencia das bolinhas acelerada, `Agency` antecipado e `LYKEN` ajustado para finalizar com presenca mais gold e menos branco claro.

Revisao futura: somente em nova auditoria visual da Fase 08 ou pedido explicito de redesign do loading.
