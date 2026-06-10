import { Team } from '../lib/types';

export const TEAMS: Record<string, Team> = {
  // GRUPO A
  mexico:        { id: 'mexico',        name: 'México',          flag: '🇲🇽', group: 'A' },
  'south-africa':{ id: 'south-africa',  name: 'África do Sul',   flag: '🇿🇦', group: 'A' },
  'south-korea': { id: 'south-korea',   name: 'Coreia do Sul',   flag: '🇰🇷', group: 'A' },
  czechia:       { id: 'czechia',       name: 'Rep. Tcheca',     flag: '🇨🇿', group: 'A' },

  // GRUPO B
  canada:        { id: 'canada',        name: 'Canadá',          flag: '🇨🇦', group: 'B' },
  bosnia:        { id: 'bosnia',        name: 'Bósnia',          flag: '🇧🇦', group: 'B' },
  qatar:         { id: 'qatar',         name: 'Catar',           flag: '🇶🇦', group: 'B' },
  switzerland:   { id: 'switzerland',   name: 'Suíça',           flag: '🇨🇭', group: 'B' },

  // GRUPO C
  brazil:        { id: 'brazil',        name: 'Brasil',          flag: '🇧🇷', group: 'C' },
  morocco:       { id: 'morocco',       name: 'Marrocos',        flag: '🇲🇦', group: 'C' },
  haiti:         { id: 'haiti',         name: 'Haiti',           flag: '🇭🇹', group: 'C' },
  scotland:      { id: 'scotland',      name: 'Escócia',         flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', group: 'C' },

  // GRUPO D
  usa:           { id: 'usa',           name: 'EUA',             flag: '🇺🇸', group: 'D' },
  paraguay:      { id: 'paraguay',      name: 'Paraguai',        flag: '🇵🇾', group: 'D' },
  turkey:        { id: 'turkey',        name: 'Turquia',         flag: '🇹🇷', group: 'D' },
  australia:     { id: 'australia',     name: 'Austrália',       flag: '🇦🇺', group: 'D' },

  // GRUPO E
  germany:       { id: 'germany',       name: 'Alemanha',        flag: '🇩🇪', group: 'E' },
  'ivory-coast': { id: 'ivory-coast',   name: 'Costa do Marfim', flag: '🇨🇮', group: 'E' },
  ecuador:       { id: 'ecuador',       name: 'Equador',         flag: '🇪🇨', group: 'E' },
  curacao:       { id: 'curacao',       name: 'Curaçao',         flag: '🇨🇼', group: 'E' },

  // GRUPO F
  netherlands:   { id: 'netherlands',   name: 'Holanda',         flag: '🇳🇱', group: 'F' },
  japan:         { id: 'japan',         name: 'Japão',           flag: '🇯🇵', group: 'F' },
  sweden:        { id: 'sweden',        name: 'Suécia',          flag: '🇸🇪', group: 'F' },
  tunisia:       { id: 'tunisia',       name: 'Tunísia',         flag: '🇹🇳', group: 'F' },

  // GRUPO G
  belgium:       { id: 'belgium',       name: 'Bélgica',         flag: '🇧🇪', group: 'G' },
  egypt:         { id: 'egypt',         name: 'Egito',           flag: '🇪🇬', group: 'G' },
  iran:          { id: 'iran',          name: 'Irã',             flag: '🇮🇷', group: 'G' },
  'new-zealand': { id: 'new-zealand',   name: 'Nova Zelândia',   flag: '🇳🇿', group: 'G' },

  // GRUPO H
  spain:         { id: 'spain',         name: 'Espanha',         flag: '🇪🇸', group: 'H' },
  'cape-verde':  { id: 'cape-verde',    name: 'Cabo Verde',      flag: '🇨🇻', group: 'H' },
  'saudi-arabia':{ id: 'saudi-arabia',  name: 'Arábia Saudita',  flag: '🇸🇦', group: 'H' },
  uruguay:       { id: 'uruguay',       name: 'Uruguai',         flag: '🇺🇾', group: 'H' },

  // GRUPO I
  france:        { id: 'france',        name: 'França',          flag: '🇫🇷', group: 'I' },
  senegal:       { id: 'senegal',       name: 'Senegal',         flag: '🇸🇳', group: 'I' },
  iraq:          { id: 'iraq',          name: 'Iraque',          flag: '🇮🇶', group: 'I' },
  norway:        { id: 'norway',        name: 'Noruega',         flag: '🇳🇴', group: 'I' },

  // GRUPO J
  argentina:     { id: 'argentina',     name: 'Argentina',       flag: '🇦🇷', group: 'J' },
  algeria:       { id: 'algeria',       name: 'Argélia',         flag: '🇩🇿', group: 'J' },
  austria:       { id: 'austria',       name: 'Áustria',         flag: '🇦🇹', group: 'J' },
  jordan:        { id: 'jordan',        name: 'Jordânia',        flag: '🇯🇴', group: 'J' },

  // GRUPO K
  portugal:      { id: 'portugal',      name: 'Portugal',        flag: '🇵🇹', group: 'K' },
  'congo-dr':    { id: 'congo-dr',      name: 'Congo',           flag: '🇨🇩', group: 'K' },
  uzbekistan:    { id: 'uzbekistan',    name: 'Uzbequistão',     flag: '🇺🇿', group: 'K' },
  colombia:      { id: 'colombia',      name: 'Colômbia',        flag: '🇨🇴', group: 'K' },

  // GRUPO L
  england:       { id: 'england',       name: 'Inglaterra',      flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'L' },
  croatia:       { id: 'croatia',       name: 'Croácia',         flag: '🇭🇷', group: 'L' },
  ghana:         { id: 'ghana',         name: 'Gana',            flag: '🇬🇭', group: 'L' },
  panama:        { id: 'panama',        name: 'Panamá',          flag: '🇵🇦', group: 'L' },
};
