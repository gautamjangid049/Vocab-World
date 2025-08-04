const words = [
  {
    word: 'abate',
    synonyms: ['decrease', 'diminish'],
    antonyms: ['increase', 'intensify']
  },
  {
    word: 'zeal',
    synonyms: ['enthusiasm', 'passion'],
    antonyms: ['apathy', 'indifference']
  },
  {
    word: 'succinct',
    synonyms: ['concise', 'terse'],
    antonyms: ['lengthy', 'verbose']
  }
];

const phrasalVerbs = [
  { verb: 'break down', meaning: 'stop working' },
  { verb: 'call off', meaning: 'cancel' },
  { verb: 'run into', meaning: 'meet unexpectedly' }
];

const idioms = [
  { idiom: 'a blessing in disguise', meaning: 'a good thing that seemed bad at first' },
  { idiom: 'hit the books', meaning: 'study hard' },
  { idiom: 'once in a blue moon', meaning: 'rarely' }
];

const searchInput = document.getElementById('search');
const results = document.getElementById('results');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  results.innerHTML = '';
  if (!query) return;

  const word = words.find(w => w.word === query);
  if (word) {
    const section = document.createElement('section');
    section.innerHTML = `
      <h2>${word.word}</h2>
      <p><strong>Synonyms:</strong> ${word.synonyms.join(', ')}</p>
      <p><strong>Antonyms:</strong> ${word.antonyms.join(', ')}</p>
    `;
    results.appendChild(section);
  }

  const matchingPhrasal = phrasalVerbs.filter(p => p.verb.toLowerCase().includes(query));
  if (matchingPhrasal.length) {
    const section = document.createElement('section');
    section.innerHTML = '<h2>Phrasal Verbs</h2>' +
      matchingPhrasal.map(p => `<p><strong>${p.verb}</strong>: ${p.meaning}</p>`).join('');
    results.appendChild(section);
  }

  const matchingIdioms = idioms.filter(i => i.idiom.toLowerCase().includes(query));
  if (matchingIdioms.length) {
    const section = document.createElement('section');
    section.innerHTML = '<h2>Idioms</h2>' +
      matchingIdioms.map(i => `<p><strong>${i.idiom}</strong>: ${i.meaning}</p>`).join('');
    results.appendChild(section);
  }
});
