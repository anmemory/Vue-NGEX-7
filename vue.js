new Vue({
  el: '#app',
  data() {
    return {
      availableTraits: [
        'funny', 'smart', 'brave', 'loyal', 'kind', 'adventurous', 'curious', 'wise', 'gentle', 'strong', 'creative', 'caring'
      ],
      selectedTraits: [],
      characters: [
        {
          name: 'Totoro',
          image: 'assets/totoro.png ',
          description: 'Totoro is a gentle and wise forest spirit who brings joy and wonder to those who believe in him.',
          traits: ['gentle', 'wise', 'adventurous']
        },
        {
          name: 'Chihiro',
          image: 'assets/chihiro.png',
          description: 'Chihiro is brave, kind, and strong-willed. She navigates a magical world with courage and determination.',
          traits: ['brave', 'kind', 'strong']
        },
        {
          name: 'Howl',
          image: 'assets/howl.jpg ',
          description: 'Howl is a charming and adventurous wizard with a kind heart and a love for adventure.',
          traits: ['charming', 'adventurous', 'kind']
        }
      ],
      result: null
    };
  },
  methods: {
    findCharacter() {
      if (this.selectedTraits.length === 0) {
        this.result = null;
        return;
      }

      let bestMatch = null;
      let highestScore = 0;

      for (const char of this.characters) {
        let score = 0;
        for (const trait of this.selectedTraits) {
          if (char.traits.includes(trait)) {
            score++;
          }
        }
        if (score > highestScore) {
          highestScore = score;
          bestMatch = char;
        }
      }

      this.result = bestMatch || null;
    }
  }
});