import { Participant } from '../lib/types';

/**
 * Lista de participantes do bolão.
 *
 * Quem tem múltiplas fichas recebe um `label` ("Aposta 1", "Aposta 2")
 * e um id único por ficha.
 *
 * pdfFile → nome do arquivo em /public/pdfs/
 */
export const PARTICIPANTS: Participant[] = [
  // Lista completa (usada na fase de grupos / arquivo histórico)
  { id: 'eduardo-alex',  name: 'Eduardo Alex',      pdfFile: 'eduardo-alex.pdf',  avatarFile: 'eduardo-alex.png' },
  { id: 'netinho',       name: 'Netinho',            pdfFile: 'netinho.pdf',       avatarFile: 'netinho.png' },
  { id: 'enio-1',        name: 'Enio Batalha',       label: 'Aposta 1', pdfFile: 'enio-1.pdf',       avatarFile: 'enio.png' },
  { id: 'enio-2',        name: 'Enio Batalha',       label: 'Aposta 2', pdfFile: 'enio-2.pdf',       avatarFile: 'enio.png' },
  { id: 'bruno-1',       name: 'Bruno Thomaz',       label: 'Aposta 1', pdfFile: 'bruno-1.pdf',      avatarFile: 'bruno.png' },
  { id: 'bruno-2',       name: 'Bruno Thomaz',       label: 'Aposta 2', pdfFile: 'bruno-2.pdf',      avatarFile: 'bruno.png' },
  { id: 'cleber',        name: 'Cleber',             pdfFile: 'cleber.pdf',        avatarFile: 'cleber.png' },
  { id: 'diego',         name: 'Diego Rodrigo',      pdfFile: 'diego.pdf',         avatarFile: 'diego.png' },
  { id: 'graca',         name: 'Graça Santos',       pdfFile: 'graca.pdf',         avatarFile: 'graca.png' },
  { id: 'igor',          name: 'Igor Rafael',        pdfFile: 'igor.pdf',          avatarFile: 'igor.png' },
  { id: 'ionaldo-jr',    name: 'Ionaldo Lins',       pdfFile: 'ionaldo-jr.pdf',    avatarFile: 'ionaldo-jr.png' },
  { id: 'joao-paulo-1',  name: 'João Paulo',         label: 'Aposta 1', pdfFile: 'joao-paulo-1.pdf', avatarFile: 'joao-paulo.png' },
  { id: 'joao-paulo-2',  name: 'João Paulo',         label: 'Aposta 2', pdfFile: 'joao-paulo-2.pdf', avatarFile: 'joao-paulo.png' },
  { id: 'jocelmo',       name: 'Jocelmo',            pdfFile: 'jocelmo.pdf',       avatarFile: 'jocelmo.png' },
  { id: 'kamilla',       name: 'Kamilla Ravenna',    pdfFile: 'kamilla.pdf',       avatarFile: 'kamilla.png' },
  { id: 'rebeca',        name: 'Rebeca Montenegro',  pdfFile: 'rebeca.pdf',        avatarFile: 'rebeca.png' },
  { id: 'rosinaldo',     name: 'Rosinaldo Barbosa',  pdfFile: 'rosinaldo.pdf',     avatarFile: 'rosinaldo.png' },
  { id: 'jorge-edson',   name: 'Jorginho',           pdfFile: 'jorginho.pdf',      avatarFile: 'jorge-edson.png' },
  { id: 'jorge-fernandes', name: 'Jorge Fernandes',  pdfFile: 'jorge-fernandes.pdf', avatarFile: 'jorge-fernandes.png' },
];

const KNOCKOUT_EXCLUDED = new Set(['graca', 'kamilla', 'netinho', 'cleber', 'rebeca', 'enio-2', 'bruno-2', 'joao-paulo-2']);

/**
 * Participantes do mata-mata (sem os que saíram, com uma aposta por pessoa).
 * Para adicionar segunda aposta: remover o ID do KNOCKOUT_EXCLUDED.
 */
export const KNOCKOUT_PARTICIPANTS: Participant[] = PARTICIPANTS
  .filter((p) => !KNOCKOUT_EXCLUDED.has(p.id))
  .map((p) => (p.label ? { ...p, label: undefined } : p));
